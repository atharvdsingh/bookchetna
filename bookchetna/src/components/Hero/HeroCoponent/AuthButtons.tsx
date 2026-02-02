import { GetTheSession } from "@/util/GetTheSession";
import ManagingDiffrentButton from "./ManagingDiffrentButton";
import React from "react";

/**
 * AuthButtons (Server Component)
 * 
 * This component is 'async'. It handles the data fetching (GetTheSession).
 * 
 * BY MOVING THE FETCH HERE:
 * We can wrap this component in <Suspense> in the parent. 
 * This allows the parent (FirstPage) to render everything else (text, images) 
 * without waiting for this session check to finish.
 */
async function AuthButtons() {
  // This 'await' will trigger the Suspense fallback in the parent.
  const promise=new Promise((resolve)=>setTimeout(resolve,10000))
  await promise.then(()=>{
    console.log("Session loaded")
  })
  const session = await GetTheSession();

  // Once the session is ready, we render the actual buttons (Client Component).
  return <ManagingDiffrentButton session={session!} />;
}

export default AuthButtons;
