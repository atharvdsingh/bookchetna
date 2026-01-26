import CenterComponent from '@/components/CenterComponent'
import HomeCardSkeleton from '@/components/Home/HomeCardSkeleton'
import React from 'react'



function Loading() {
 


    return (

        <CenterComponent>
          <div className="grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" >
{Array.from({ length: 4 }).map((_, i) => (
    <HomeCardSkeleton key={i} />
  ))}
                    

          </div>
          
        </CenterComponent>

        
    )
}

export default Loading
