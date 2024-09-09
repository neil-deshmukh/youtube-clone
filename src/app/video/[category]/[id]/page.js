"use client"
import Navbar from "@/app/components/Navbar";
import PlayVideo from "@/app/components/PlayVideo";
import Recommended from "@/app/components/Recommended";
import { usePathname } from "next/navigation";

export default function VideoPage() {
  const videoId =
    usePathname().split("/")[usePathname().split("/").length - 1];
  const categoryId = usePathname().split("/")[usePathname().split("/").length - 2];
  return (
    <>
      <Navbar />
      <div className="flex">
        <PlayVideo videoId={videoId} />
        <Recommended categoryId={categoryId} />
      </div>
    </>
  );
}
