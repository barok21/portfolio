import Portifolio from "@/components/portifolio";
import Profile from "@/components/profile";
import SideBar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-screen h-screen z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./images/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 py-10 gap-8 min-h-screen">
        <div className="lg:max-h-[80vh] lg:sticky top-10 flex flex-row gap-4">
          <SideBar />
          <Profile />
        </div>
        <div className="flex flex-col gap-6">
          <Portifolio />
        </div>
      </div>
    </div>
  );
}
