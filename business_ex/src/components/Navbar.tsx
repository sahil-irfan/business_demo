"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Button2 from "@/components/UI/Button2";
import DashboardButton from "./DashboardButton";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-2xl font-black tracking-tighter text-slate-900"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white transition-transform group-hover:rotate-12">
            B
          </div>
          <span>
            Business<span className="text-indigo-600">Hub</span>
          </span>
        </Link>
 {!session?.user ? (
        
        <div className="flex items-center gap-3">
          

          <Link
            href="/auth/login"
            className="relative inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-slate-800 hover:shadow-indigo-200 active:scale-95"
          >
            Login
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-4">
            <DashboardButton />
            <Image
              src={session.user?.image || "https://ui-avatars.com/api/?name=User"}
              alt="Profile"
              
              width={40}
              height={40}
              className="rounded-full object-cover"
            />

            <div>
              <p className="text-sm font-semibold">
                {session.user?.name}
              </p>

              <p className="text-xs text-gray-500">
                {session.user?.email}
              </p>
            </div>

            <Button2
              onClick={async () => {
    await signOut({
      callbackUrl: "/",
      redirect: true,
    });
  }}
              
            >
              Logout
            </Button2>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;