"use client"
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Container({ category, query }) {
  const [data, setData] = useState([])
  const [videos, setVideos] = useState([])
  const fetchData = async () => {
    const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=AIzaSyAQiFCsIy8vvJJdWDI6yWFlXt95uP0OwOE`;
    let response = await fetch(videoList_url)
    let res = await response.json()
    setData(res.items)
    if (query) {
      setVideos(res.items.filter(video => video.snippet.title.includes(query)));
    } else {
      setVideos(res.items)
    }
  }
  const value_converter = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M"
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K"
    } else {
      return value
    }
  }
  useEffect(() => {
    fetchData()
  }, [category, query])
  return (
    <div className="bg-slate-50 pt-12 pl-8 ml-[260px] w-full min-h-screen">
      <div className="grid grid-cols-4 gap-x-5 gap-y-8">
        {videos.map((video, i) => {
          return (
            <Link href={`/video/${video.snippet.categoryId}/${video.id}`} key={video.id}>
              <Image
                src={video.snippet.thumbnails.medium.url}
                width={250}
                height={140}
                className="rounded"
              />
              <h4 className="font-bold text-lg">{video.snippet.title}</h4>
              <h6 className="font-semibold text-gray-600 text-sm">
                {video.snippet.channelTitle}
              </h6>
              <p>
                <span className="text-gray-400 text-sm mr-1">
                  {value_converter(video.statistics.viewCount)} •{" "}
                </span>
                <span className="text-gray-400 text-sm">
                  {moment(video.snippet.publishedAt).fromNow()}
                </span>
              </p>
            </Link>
          );
        })}
        
      </div>
    </div>
  );
}
