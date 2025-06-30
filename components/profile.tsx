import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Facebook, Github, Linkedin, Twitter, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = [
  { href: "https://github.com/barok21", icon: Github },
  { href: "#", icon: Facebook },
  { href: "#", icon: Twitter },
  { href: "#", icon: Linkedin },
];

const SocialMediaLink = ({
  href,
  Icon,
}: {
  href: string;
  Icon: React.ComponentType;
}) => (
  <Link
    href={href}
    className="hover:text-green-500 hover:transition ease-in border-2 p-2 rounded-2xl"
  >
    <Icon />
  </Link>
);

const Profile = () => {
  return (
    <div className="bg-card border-2 rounded-4xl rounded-tr-none p-6 text-center shadow-md">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/images/profile.jpg"
          alt="profile image"
          width={200}
          height={200}
          className="rounded-2xl rounded-tr-none border object-cover"
        />

        <div className="text-sm uppercase text-gray-600">Data Engineer</div>

        <div className="text-2xl font-bold">Andrew Ryan</div>

        <div className="flex gap-4 mt-4">
          {SocialMedia.map(({ href, icon: Icon }, index) => (
            <SocialMediaLink key={index} href={href} Icon={Icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
