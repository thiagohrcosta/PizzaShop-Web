import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Helmet } from "react-helmet-async"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"

import { Link, useSearchParams } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { signIn } from "@/api/sign-in"

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    }
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email })

      toast.success("Autentication link sent to you email", {
        action: {
          label: "Send again",
          onClick: () => handleSignIn(data),
        },
      })
    } catch {
      toast.error("Invalid credentials.")
    }   
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-4 top-8">
          <Link to="/sign-up">
            New Company
          </Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Painel Access
            </h1>
            <p className="text-sm text-muted-foreground">
              Track your sales through the partner dashboard!
            </p>
          </div>
          
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Your e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">Login to painel</Button>
          </form>
        </div>
      </div>
    </>
  )
}