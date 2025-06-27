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
import { Separator } from "@radix-ui/react-dropdown-menu"
import { Facebook, Github, User } from "lucide-react"
import Image from "next/image"

const Profile = () => {
  return (
    <div className="w-100 max-lg:100 bg-card rounded-4xl rounded-tr-none border-2 p-5 pt-10">
        <div className="flex-row grid-cols-3 items-center justify-evenly gap-10 p-5 flex-wrap">
            <div>

            <Image
                src='/images/profile.jpg'
                alt="profile image"
                width='1000'
                height={100}
                className="rounded-2xl rounded-tr-none border-1"
            >
            </Image>
            </div>
            <div className="text-center pt-5 text-xl ">
                Data Engineer
            </div>
            <div className="text-center pt-5 text-4xl">
                Andrew Ryan 
            </div>
            <div className="flex p-5 items-center justify-around">
               <div className="bg-blue-500 size-10 flex justify-center items-center rounded-2xl">
                <User className=""/>
                </div> 
                <Github/>
                <Facebook/>
                
                <Facebook/>
            </div>
        </div>
    </div>
  )
}

export default Profile