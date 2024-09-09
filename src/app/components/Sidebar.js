import Image from "next/image";
import Link from "next/link";

export default function Sidebar({category, setCategory}) {
  return (
    <aside className="bg-white fixed pl-6 pt-5 w-[240px]">
      <div className="flex flex-col space-y-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setCategory(0);
          }}
        >
          <Image
            src="/home.png"
            width={23}
            height={23}
            className={`mr-3 ${
              category == 0 && "border-b-4 border-red-800 pb-1"
            }`}
          />{" "}
          Home
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setCategory(20);
          }}
        >
          <Image
            src="/game_icon.png"
            width={23}
            height={23}
            className={`mr-3 ${
              category == 20 && "border-b-4 border-red-800 pb-1"
            }`}
          />{" "}
          Gaming
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setCategory(2);
          }}
        >
          <Image
            src="/automobiles.png"
            width={23}
            height={23}
            className={`mr-3 ${
              category == 2 && "border-b-4 border-red-800 pb-1"
            }`}
          />{" "}
          Automobiles
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setCategory(17);
          }}
        >
          <Image
            src="/sports.png"
            width={23}
            height={23}
            className={`mr-3 ${
              category == 17 && "border-b-4 border-red-800 pb-1"
            }`}
          />{" "}
          Sports
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setCategory(24);
          }}
        >
          <Image
            src="/entertainment.png"
            width={23}
            height={23}
            className={`mr-3 ${
              category == 24 && "border-b-4 border-red-800 pb-1"
            }`}
          />{" "}
          Entertainment
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setCategory(28);
          }}
        >
          <Image
            src="/tech.png"
            width={23}
            height={23}
            className={`mr-3 ${
              category == 28 && "border-b-4 border-red-800 pb-1"
            }`}
          />{" "}
          Technology
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setCategory(10);
          }}
        >
          <Image
            src="/music.png"
            width={23}
            height={23}
            className={`mr-3 ${
              category == 10 && "border-b-4 border-red-800 pb-1"
            }`}
          />{" "}
          Music
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setCategory(22);
          }}
        >
          <Image
            src="/blogs.png"
            width={23}
            height={23}
            className={`mr-3 ${
              category == 22 && "border-b-4 border-red-800 pb-1"
            }`}
          />{" "}
          Blogs
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setCategory(25);
          }}
        >
          <Image
            src="/news.png"
            width={23}
            height={23}
            className={`mr-3 ${
              category == 25 && "border-b-4 border-red-800 pb-1"
            }`}
          />{" "}
          News
        </div>
      </div>
      <hr className="mt-6 mb-4 border border-gray-300" />
      <div className="flex flex-col space-y-4">
        <h3 className="text-lg font-serif text-gray-400 font-semibold mb-4">
          Subscribed
        </h3>
        <div className="flex space-x-5 items-center">
          <Image
            src="/simon.png"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p>PewDiePie</p>
        </div>
        <div className="flex space-x-5 items-center">
          <Image
            src="/jack.png"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p>Jacksepticeye</p>
        </div>
        <div className="flex space-x-5 items-center">
          <Image
            src="/gerard.png"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p>Slogo</p>
        </div>
      </div>
    </aside>
  );
}
