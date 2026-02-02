import { Book, Library } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"                
export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center h-screen" >
            <Library className="text-red-500" size={100} />
            <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
            <p className="text-gray-500">The page you are looking for does not exist.</p>
            <Button asChild>
                <Link href="/home/page=1">Go Back</Link>
            </Button>
        </div>
    );
}