import { Heart, Notification, Setting2 } from "iconsax-react";
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between py-7 bg-white">
      <div className="flex ml-16">
        <h1 className="h-color text-xl font-bold">MORENT</h1>
        <div className="ml-10">
          <input className="py-1 px-4 w-72 text-sm rounded-xl border border-slate-300" type="text" placeholder="Search Something here"/>
        </div>
      </div>
      <div className="flex gap-3 mr-8">
        <div className="border rounded-full border-slate-400 w-7 h-7 p-1">
          <Link href={"/"}>
            <Heart size="18" color="#596780" variant="Bold" />
          </Link>
        </div>
        <div className="border rounded-full border-slate-400 w-7 h-7 p-1">
          <Link href={"/"}>
            <Notification size="18" color="#596780" variant="Bold" />
          </Link>
        </div>
        <div className="border rounded-full border-slate-400 w-7 h-7 p-1">
          <Link href={"/"}>
            <Setting2 size="18" color="#596780" variant="Bold" />
          </Link>
        </div>
        <div>
          <Image className="rounded-full" src={'/imgs/avatar.png'} alt="Image Not Found" width={26} height={26} />
        </div>
      </div>
    </div>
  )
}
