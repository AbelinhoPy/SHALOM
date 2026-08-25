"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
//import { Link } from "lucide-react";
import Link from "next/link";
import  Cookie  from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import { loginUser } from "@/app/action/user";

function LoginPage() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const formSchema = z.object({
    email : z.string().email(),
   password: z.string().min(8),
   role : z.enum(["admin","user"]),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email:"",
      password: "",
      role: "user",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
   try {
    setLoading(true);
    const response: any = await loginUser(values);
    if(response.success){
      toast.success("Login successful");
      Cookie.set("token", response.data);
      Cookie.set("role", values.role);
      //router.push('/${values.role}/dashboard');
      router.push(`/${values.role}/dashboard`);
    
    } else {
      toast.error(response.message);
    }
    
   } catch (error:any) {
    toast.error(error.message || "Error logging in");
    
   } finally {
    setLoading(false);
   }
  }
/*
  return (
    <div className="auth-bg">
      <div className="bg-white p-5 rounded-sm w-[400px]">
        <h1 className="text-2xl font-bold! text-gray-600">
            Login to your account
        </h1> 
        <hr
        className="my-7 border-t border-gray-300"
        />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>

                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                 

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>

                  <FormControl>
                    <Input placeholder="" 
                    type="password"
                    {...field} />
                  </FormControl>

                 

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
  control={form.control}
  name="role"
  render={({ field }) => (
    <FormItem className="space-y-3">
      <FormLabel>Role</FormLabel>

      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue={field.value}
          className="flex  space-x-20"
        >
          <FormItem className="flex items-center space-x-3 space-y-0">
            <FormControl>
              <RadioGroupItem value="admin" />
            </FormControl>
            <FormLabel className="font-normal">
              Admin
            </FormLabel>
          </FormItem>

          <FormItem className="flex items-center space-x-3 space-y-0">
            <FormControl>
              <RadioGroupItem value="user" />
            </FormControl>
            <FormLabel className="font-normal">
              User
            </FormLabel>
          </FormItem>

          
        </RadioGroup>
      </FormControl>

      <FormMessage />
    </FormItem>
  )}
/>
<div className="flex justify-between items-center">
                <div className="flex gap-5 text-sm">
                    Don't have an account?{""} 
                    <Link href="/register" className="underline">
                    Register
                    </Link>                
                </div>
                <Button type="submit">Submit</Button>
            </div>
            
          </form>
        </Form>
      </div>
    </div>
  );
}
*/
return (
    <div className="auth-bg">
      <div className="bg-white p-5 rounded-sm w-[400px]">
        <h1 className="text-2xl font-bold text-gray-600">Login to your account</h1>
        <hr className="my-7 border-t border-gray-300" />

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input {...form.register("email")} className="h-10 w-full border-b border-gray-300 outline-none px-1" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <input type="password" {...form.register("password")} className="h-10 w-full border-b border-gray-300 outline-none px-1" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Role</label>
            <div className="flex gap-8">
              <label className="flex items-center gap-2">
                <input type="radio" value="user" {...form.register("role")} defaultChecked />
                User
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="admin" {...form.register("role")} />
                Admin
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm">
              Don't have an account?{" "}
              <Link href="/register" className="underline">Register</Link>
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
export default LoginPage;
            