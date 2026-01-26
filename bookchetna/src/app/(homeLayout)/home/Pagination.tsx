"use client"
import PaginationWrapper from '@/components/PaginationWrapper'

interface PaginationProps {
    pageNumber: number;
    totalPages: number;
    roomId?: string | null;
}

function Pagination({ pageNumber, totalPages = 3, roomId }: PaginationProps) {

    console.log(totalPages)
    // const {page}=useParams<{page:string}>()

    // console.log( "this is pagition ",page.replace("page%3D","") )
    // const PageNumber:number=parseInt(page.replace("page%3D",""))
    return (
        <>
            <PaginationWrapper totalPages={totalPages} currentPage={pageNumber} roomId={roomId} />
        </>
    )
}

export default Pagination
