"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

type Session = typeof auth.$Infer.Session;

export default function Navigation({ session }: { session: Session | null }) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileText className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900 hidden sm:block">
              PDF Extractor
            </span>
          </Link>

          <nav className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            <Button
              asChild
              variant={isActive("/") ? "secondary" : "ghost"}
              size="sm"
              className={cn(
                "text-sm font-medium",
                isActive("/") && "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
              )}
            >
              <Link href="/">Home</Link>
            </Button>

            {session ? (
              <>
                <Button
                  asChild
                  variant={isActive("/dashboard") ? "default" : "secondary"}
                  size="sm"
                  className={cn(
                    "text-sm font-medium",
                    isActive("/dashboard")
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                  )}
                >
                  <Link href="/dashboard">
                    <span className="hidden sm:inline">Extract PDF</span>
                    <span className="sm:hidden">Extract</span>
                  </Link>
                </Button>

                <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-muted rounded-lg">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-sm font-semibold">
                      {session.user.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-gray-700 max-w-[120px] truncate">
                    {session.user.name || session.user.email}
                  </span>
                </div>

                {/* Mobile Avatar */}
                <div className="md:hidden">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-xs font-semibold">
                      {session.user.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </>
            ) : (
              <Button asChild size="sm" className="shadow-md">
                <Link href="/auth">Sign In</Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}