import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

export const iframeHeight = "800px";

export const containerClassName = "w-full h-full p-4 lg:p-0";

export default function AuthPage() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-start">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-secondary">
              Entre o seu e-mail abaixo
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="placeholder:text-secondary"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              <span className="text-sm mt-4 text-secondary">
                Você receberá um e-mail com o seu acesso
              </span>
            </div>

            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden h-full w-full bg-slate-200 lg:flex items-center justify-center">
        <img
          src="/login.svg"
          alt="Image"
          className="  margin-auto max-w-[460px] object-contain dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
