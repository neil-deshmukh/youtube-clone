"use client"
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PlayVideo({videoId}) {
  const [vidData, setVidData] = useState({})
  const [channelData, setChannelData] = useState({})
  const [comments, setComments] = useState([])
  const fetchVideoData = async () => {
    const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyAQiFCsIy8vvJJdWDI6yWFlXt95uP0OwOE`;
    const result = await fetch(videoDetails_url)
    const res = await result.json()
    console.log(res)
    setVidData(res.items[0])
  }
  const fetchOtherData = async () => {
    const channelData_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${vidData.snippet.channelId}&key=AIzaSyAQiFCsIy8vvJJdWDI6yWFlXt95uP0OwOE`;
    const result = await fetch(channelData_url)
    const res = await result.json()
    setChannelData(res.items[0])
    const commentsData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=40&videoId=${videoId}&key=AIzaSyAQiFCsIy8vvJJdWDI6yWFlXt95uP0OwOE`;
    const result2 = await fetch(commentsData_url)
    const res2 = await result2.json()
    setComments(res2.items)
  }
  const value_converter = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };
  useEffect(() => {
    fetchVideoData()
  }, [])
  useEffect(() => {
    if (vidData.snippet) {
      fetchOtherData()
    }
  }, [vidData])
  if (vidData.snippet && channelData.snippet) {
    return (
      <div className="p-5 max-w-[67%]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-[100%] h-[34vw]"
        ></iframe>
        <h3 className="my-3 text-2xl font-bold">{vidData.snippet.title}</h3>
        <div className="flex justify-between">
          <p className="text-gray-600 text-[14px]">
            {value_converter(vidData.statistics.viewCount)} Views &bull;{" "}
            {moment(vidData.snippet.publishedAt).fromNow()}
          </p>
          <div className="flex space-x-4">
            <span className="flex text-gray-600 text-[14px] items-end cursor-pointer">
              <Image
                src="/like.png"
                width={20}
                height={20}
                className="mr-2.5"
              />{" "}
              {value_converter(vidData.statistics.likeCount)}
            </span>
            <span className="flex text-gray-600 text-[14px] items-center cursor-pointer">
              <Image
                src="/dislike.png"
                width={20}
                height={20}
                className="mr-2.5"
              />{" "}
            </span>
            <span className="flex text-gray-600 text-[14px] items-center cursor-pointer">
              <Image
                src="/share.png"
                width={20}
                height={20}
                className="mr-2.5"
              />{" "}
              Share
            </span>
            <span className="flex text-gray-600 text-[14px] items-center cursor-pointer">
              <Image
                src="/save.png"
                width={20}
                height={20}
                className="mr-2.5"
              />{" "}
              Save
            </span>
          </div>
        </div>
        <hr className="my-4 border rounded border-gray-300" />
        <div className="flex justify-between items-center">
          <div className="flex space-x-5 items-center">
            <div>
              <Image
                src={channelData.snippet.thumbnails.default.url}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold -mb-1">
                {vidData.snippet.channelTitle}
              </h4>
              <p className="text-xs text-gray-600">
                {channelData.statistics
                  ? value_converter(channelData.statistics.subscriberCount)
                  : "0"}{" "}
                Subscribers
              </p>
            </div>
          </div>
          <button className="bg-[#ff0000] text-white py-2 rounded text-sm px-6">
            Subscribe
          </button>
        </div>
        <div className="pl-[60px] mt-3">
          <p className="text-sm text-gray-600">{vidData.snippet.description}</p>
          <hr className="my-3 border rounded border-gray-300" />
          <h5 className="text-gray-700 text-[15px] font-semibold mb-3">
            {value_converter(vidData.statistics.commentCount)} Comments
          </h5>
          <div className="flex flex-col space-y-7">
            {comments.map(comment => {
              return (
                <div className="flex space-x-5">
                  <div className="cursor-pointer">
                    <Image
                      src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                      width={38}
                      height={38}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h6 className="font-bold text-sm">
                      {
                        comment.snippet.topLevelComment.snippet.authorDisplayName
                      }
                      <span className="text-[12px] text-gray-600 font-normal ml-2">
                        {moment(
                          comment.snippet.topLevelComment.snippet.publishedAt
                        ).fromNow()}
                      </span>
                    </h6>
                    <p className="text-gray-600 text-sm">
                      {comment.snippet.topLevelComment.snippet.textOriginal}
                    </p>
                    <div className="flex mt-2 items-center">
                      <p className="text-gray-600 text-sm cursor-pointer flex">
                        <Image
                          src="/like.png"
                          width={20}
                          height={20}
                          className="mr-1"
                        />
                        {comment.snippet.topLevelComment.snippet.likeCount}
                      </p>
                      <div className="cursor-pointer ml-3 flex items-center">
                        <Image src="/dislike.png" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
