import Portifolio from "@/components/portifolio";
import Profile from "@/components/profile";
import SideBar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
     <div className="w-full max-w-[80vw] mx-auto flex p-20 gap-4">
      <div className="max-h-[80vh] sticky top-20 flex flex-row gap-4">
        <SideBar />
        <Profile />
      </div>
      <div className="flex flex-col gap-6 ">
        <Portifolio />
    </div>
  </div>
  );
}
