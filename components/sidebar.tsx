import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ThemeToggle } from "./theme"

const SideBar = () => {
  return (
    <div className="items-center flex flex-col gap-4">
        <div>
            <ThemeToggle/>
        </div>
        <div className="flex flex-col items-center p-2 bg-card w-15 border-1 h-auto rounded-full">
         <p>1</p>
         <p>1</p>
         <p>1</p>
         <p>1</p>
        </div>
    </div>
  )
}

export default SideBar