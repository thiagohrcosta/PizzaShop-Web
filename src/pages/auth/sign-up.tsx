import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Helmet } from "react-helmet-async"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Link, useNavigate } from "react-router-dom"

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    console.log(data)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success("Restaurant successfully created", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in")
        },
      })
    } catch {
      toast.error("Error while trying to create your restaurant account.")
    }
    
  }

  return (
    <>
      <Helmet title="Sign Up" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-4 top-8">
          <Link to="/sign-in">
            Login
          </Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Create you free account
            </h1>
            <p className="text-sm text-muted-foreground">
              Be our partner and start you sales
            </p>
          </div>
          
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Company name</Label>
              <Input id="restaurantName" type="text" {...register('restaurantName')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Manager Name</Label>
              <Input id="managerName" type="text" {...register('managerName')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Your email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">Create account</Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              By clicking <strong>"Create account"</strong>, you confirm that you have read and understood our <a href="#" className="underline underline-offset-2">Terms of Service</a> and <a href="#" className="underline underline-offset-2">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}