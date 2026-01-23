import Procted from "@/components/Procted";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {  ArrowLeft } from "lucide-react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Procted>
      <div className="  min-h-screen">
        <Button
          asChild
          className="fixed top-3 left-3   transition-all duration-300  "
        >
          <Link href={"./"} className=" flex  ">
            {" "}
            <ArrowLeft /> Back{" "}
          </Link>
        </Button>

        {children}
      </div>
    </Procted>
  );
}
