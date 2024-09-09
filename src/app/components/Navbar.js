import Image from "next/image";
import Link from "next/link";

export default function Navbar({query, setQuery}) {
  return (
    <nav className="flex justify-between py-3 px-6 sticky items-center shadow-sm z-50 bg-white">
      <div className="flex space-x-6 cursor-pointer items-center">
        <Image src="/menu.png" width={22} height={16} />
        <Link href="/">
          <Image src="/logo.png" width={130} height={31.65} />
        </Link>
      </div>
      <div className="flex relative items-center w-[400px]">
        <input
          type="text"
          placeholder="Search... "
          value={query}
          className="py-1 px-6 rounded-2xl w-full border border-gray-400"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Image
          src="/search.png"
          width={19}
          height={20}
          className="absolute top-2 right-3 cursor-pointer"
        />
      </div>
      <div className="flex space-x-7 items-center">
        <Image
          src="/upload.png"
          width={30}
          height={30}
          className="cursor-pointer"
        />
        <Image
          src="/more.png"
          width={30}
          height={30}
          className="cursor-pointer"
        />
        <Image
          src="/notification.png"
          width={30}
          height={30}
          className="cursor-pointer"
        />
        <Image
          src="/jack.png"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
}