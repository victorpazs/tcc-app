import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "./schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios"; // Import necessário para verificar se o erro é do Axios
import { useRequestLogin } from "./hooks/useRequestLogin";
import { toast } from "sonner";

export default function AuthPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const postData = useRequestLogin();

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoading(true);
    setError(null);
    try {
      await postData(values);

      toast.success(
        "Você receberá um e-mail com o link para entrar no sistema!"
      );
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || err.message);
      } else {
        setError("Ocorreu um erro inesperado");
      }
    } finally {
      setLoading(false);
    }
  }

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@doe.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={loading} className="w-full p-3" type="submit">
                {loading ? "Entrando..." : "Entrar"}
              </Button>

              {error && (
                <FormDescription className="text-red-500">
                  {error}
                </FormDescription>
              )}
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden h-full w-full bg-slate-200 lg:flex items-center justify-center">
        <img
          src="/login.svg"
          alt="Image"
          className="margin-auto max-w-[460px] object-contain dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
