import CenterComponent from "@/components/CenterComponent";
import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";



async function Page() {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) {
    redirect("./");
  }

  return (
    <>
    
      <CenterComponent className="min-h-screen" >
        <div></div>

      </CenterComponent>
    </>
  );
}

export default Page;
