import Portifolio from "@/components/portifolio";
import Profile from "@/components/profile";
import SideBar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-20 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex grid-rows-3 gap-4 size-full border- p-4">
        <div className="">
          <SideBar/>
        </div>
        <div>
          <Profile/>
        </div>
        <div>
          <Portifolio/>
        </div>
      </div>
    </div>
  );
}
