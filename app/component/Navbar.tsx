import Link from "next/link"
import { Button } from "@/components/ui/button"
import {  Download } from "lucide-react"

  
  
  export default function Navbar () {
  return (
  
  <header className="sticky top-0 z-10 border-b border-green-500/20 bg-black/80 backdrop-blur-sm">
   <div className="container flex h-16 items-center justify-between">
     <div className="text-xl font-bold text-green-500">
       <span className="text-white">Dev</span>Portfolio
     </div>
     <nav className="hidden md:block">
       <ul className="flex space-x-8">
         {["Home", "A propos", "Skills", "Projects", "Education", "Contact"].map((item) => (
           <li key={item}>
             <Link
               href={`#${item.toLowerCase()}`}
               className="text-sm font-medium text-gray-300 transition-colors hover:text-green-500"
             >
               {item}
             </Link>
           </li>
         ))}
       </ul>
     </nav>
     <a href="/CV.pdf" download="Mon_CV.pdf">
<Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
Curriculum vitæ
<Download className="ml-2 h-4 w-4" />
</Button>
</a>

   </div>
 </header>

        )
        }