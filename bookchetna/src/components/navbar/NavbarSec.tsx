"use client"
import React from "react";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";


function NavbarSec() {
    const path=usePathname()
    console.log(path);
    
  interface linksType {
    href: string;
    name: string;
  }
  const link: linksType[] = [
    {
      name: "Browse Books",
      href: "/home/page=1",
      
    },
    {
      name: "My Books",
      href: "/my-books/post",
     
    },
    {
      name: "My Rentals",
      href: "/rentedbooks",
     
    },
    {
      name: "Cart",
      href: "/cart",
      
    },
  ];
  

  return (
    <>
      <ButtonGroup>
        {
            link.map((link,index)=> (
              
                
                <Button className={`${(path.replace(`[1-9]\d*`,"1") === link.href || path.replace("rental-request","") === link.href.replace("post","") )  ?("text-black"):("text-gray-500") }`} asChild key={index} >
                    <Link href={`${link.href}`} >
                       {link.name}
                    </Link>
                    </Button>
            )  )
            
        }
      
      </ButtonGroup>
    </>
  );
}

export default NavbarSec;
