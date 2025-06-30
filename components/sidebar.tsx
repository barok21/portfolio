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
import Link from "next/link"
import { Briefcase, Dumbbell, HandPlatter, Landmark, Newspaper, Send, UserPenIcon, Wrench } from "lucide-react"

const navItems = [
  { href: "#", icon: UserPenIcon },
  { href: "#", icon: Dumbbell },
  { href: "#", icon: Wrench },
  { href: "#", icon: Briefcase },
  { href: "#", icon: Landmark },
  { href: "#", icon: Newspaper },
  { href: "#", icon: Send },
];

const NavIconLink = ({ href, Icon }: { href: string; Icon: React.ComponentType }) => (
  <Link href={href} className="hover:text-green-500 hover:transition ease-in border-b-2  shadow p-2 rounded-full">
    <Icon />
  </Link>
);

const SideBar = () => {
  return (
    <div className="items-center flex flex-col gap-4">
  <div>
    <ThemeToggle />
  </div>
  <div className="flex flex-col items-center p-2 pt-5 pb-5 bg-card w-15 border-1 h-auto rounded-full gap-3">
    {navItems.map(({ href, icon: Icon }, index) => (
      <NavIconLink key={index} href={href} Icon={Icon} />
    ))}
  </div>
</div>
  )
}

export default SideBar