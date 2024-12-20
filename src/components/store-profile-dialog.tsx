import { getManagedRestaurant, GetManageRestaurantResponse } from "@/api/get-managed-restaurant";
import { Button } from "./ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { updateProfile } from "@/api/update-profile";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";

const storeProfileSchmea = z.object({
  name: z.string().min(1),
  description: z.string().nullable()
})

type StoreProfileSchema = z.infer<typeof storeProfileSchmea>

export function StoreProfileDialog() {
  const queryClient = useQueryClient()

  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
  })
  
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchmea),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? ''
    },
  })

  function updateManagedRestaurantCache({name, description}: StoreProfileSchema) {
    const cached = queryClient.getQueryData<GetManageRestaurantResponse>([
      'managed-restaurant'
    ])
    
    if (cached) {
      queryClient.setQueryData<GetManageRestaurantResponse>(
        ['managed-restaurant'], 
        {
          ...cached,
          name,
          description
        },
      )
    }

    return { cached }
  }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate({ name, description }) {
      const { cached } = updateManagedRestaurantCache({ name, description})

      return { previousProfile: cached }
    },
    onError(_, __, context) {
      if(context?.previousProfile) {
        updateManagedRestaurantCache(context.previousProfile)
      }
    }
  })

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfile({
        name: data.name,
        description: data.description
      })

      toast.success('Profile successfully updated!')
    } catch {
      toast.error('Failure to update profile, try it again"')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Profile</DialogTitle>
        <DialogDescription>Update your store information visible to your customer</DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">Name</Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">Description</Label>
            <Textarea className="col-span-3" id="description" {...register('description')} />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" variant="success" disabled={isSubmitting}>
            Save
          </Button>
        </DialogFooter>
      </form>
      
    </DialogContent>
  )
}