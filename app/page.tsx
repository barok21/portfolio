import Portifolio from "@/components/portifolio";
import Profile from "@/components/profile";
import SideBar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 py-10 gap-8">
      <div className="lg:max-h-[80vh] lg:sticky top-10  flex flex-row gap-4">
        <SideBar />
        <Profile />
      </div>
      <div className="flex flex-col gap-6 ">
        <Portifolio />
      </div>
    </div>
  );
}
