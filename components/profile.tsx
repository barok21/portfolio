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
import { Facebook, Github, Linkedin, Twitter, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const SocialMedia = [
  { href: "https://github.com/barok21", icon: Github },
  { href: "#", icon: Facebook },
  { href: "#", icon: Twitter },
  { href: "#", icon: Linkedin },
];

const SocialMediaLink = ({ href, Icon }: { href: string; Icon: React.ComponentType }) => (
  <Link href={href} className="hover:text-green-500 hover:transition ease-in border-2 p-2 rounded-2xl">
    <Icon />
  </Link>
);

const Profile = () => {
  return (
    <div className=" bg-card rounded-4xl rounded-tr-none border-2 p-5 pt-10">
        <div className="flex-row grid-cols-3 items-center justify-evenly gap-10 p-5 flex-wrap">
            <div>
            <Image
                src='/images/profile.jpg'
                alt="profile image"
                width='1000'
                height={100}
                className="rounded-2xl rounded-tr-none border-1 aspect-auto object-cover"
            >
            </Image>
            </div>
            <div className="text-center pt-5 text-sm uppercase">
                Data Engineer
            </div>
            <div className="text-center pt-5 text-4xl font-bold">
                Andrew Ryan 
            </div>
            <div className="flex p-5 items-center justify-around">
               
                <div className="flex gap-6">
                  {SocialMedia.map(({ href, icon: Icon }, index) => (
                    <SocialMediaLink key={index} href={href} Icon={Icon} />
                  ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Profile