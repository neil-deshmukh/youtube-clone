"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Recommended({ categoryId }) {
  const [data, setData] = useState([])
  const value_converter = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };
  const fetchData = async () => {
    const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=AIzaSyAQiFCsIy8vvJJdWDI6yWFlXt95uP0OwOE`;
    let response = await fetch(videoList_url);
    let res = await response.json();
    setData(res.items);
  };
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="flex flex-col space-y-3 pt-5">
      {data.map((video, i) => {
        return (
          <div className="flex space-x-3 items-start" key={video.id}>
            <Link href={`/video/${video.snippet.categoryId}/${video.id}`} className="w-[40%]">
              <img
                src={video.snippet.thumbnails.medium.url}
                className="min-w-full"
              />
            </Link>
            <div className="w-[60%] max-h-[100px]">
              <h5 className="text-[15px] font-semibold">
                {video.snippet.title.length > 50 ? video.snippet.title.slice(0, 50) + "..." : video.snippet.title}
              </h5>
              <p className="text-gray-600 text-sm mt-2">{video.snippet.channelTitle}</p>
              <p className="text-gray-600 text-xs">{value_converter(video.statistics.viewCount)} Views</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
