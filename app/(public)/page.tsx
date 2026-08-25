"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

function Homepage() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center bg-gray-200 p-5">
                <h1 className="font-bold! text-2xl text-black">S.H.E.Y</h1>

                <Button>
                  <Link href="/login">Login</Link>
                </Button>
            </div>

            <div className="bg-white mt-20 grid lg:grid-cols-2 grid-cols-1 px-20 min-h-[70vh] items-center gap-10">
              <div className="col-span-1">
                <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-bold!">Bienvenidos a Shalon</h1>
                <p className="text-sm text-gray-600">
                  rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                <Button className="w-max"> Find a salon </Button>
              </div>
              </div>

              <div className="col-span-1 flex justify-end items-center">
                <img 
                src="/457741981_1991750664617542_3459835488104245273_n.jpg"
                className="h-96"
                />
              </div>
            </div>
        </div>
    );
}

export default Homepage;