"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { registerNewUser } from "@/app/action/user";

const formSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["admin", "user"]),
});

type FormValues = z.infer<typeof formSchema>;

function RegisterPage() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", password: "", role: "user" },
  });

  async function onSubmit(values: FormValues) {
    try {
      setLoading(true);
      const response = await registerNewUser(values);
      if (response.success) {
        toast.success("Account created successfully");
        router.push("/login");
      } else {
        toast.error(response.message);
      }
    } catch (error: any) {
      toast.error("Error registering user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-bg">
      <div className="bg-white p-5 rounded-sm w-[400px]">
        <h1 className="text-2xl font-bold text-gray-600">Register your account</h1>
        <hr className="my-7 border-t border-gray-300" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input {...register("name")} className="h-10 w-full border-b border-gray-300 outline-none px-1" />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input {...register("email")} className="h-10 w-full border-b border-gray-300 outline-none px-1" />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <input type="password" {...register("password")} className="h-10 w-full border-b border-gray-300 outline-none px-1" />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Role</label>
            <div className="flex gap-8">
              <label className="flex items-center gap-2">
                <input type="radio" value="user" {...register("role")} defaultChecked />
                User
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="admin" {...register("role")} />
                Admin
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">Login</Link>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-4 py-2 rounded-sm disabled:opacity-50"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;