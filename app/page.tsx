"use client";
// import Link from 'next/link'
// import ProductCard from './components/ProductCard'
import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
import authOptions from "./api/auth/[...nextauth]/authOptions"
import Image from "next/image";
import { Metadata } from "next";
// import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   // 如果加載失敗的話，我們就禁止render
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });


// import _ from 'lodash';


import { useState } from "react";
// import man from "@/public/images/man.png";

export default function Home() {
  // const session = await getServerSession(authOptions);
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <main className="relative h-screen">
      <h1 className="font-poppins">Hello World</h1>
      {/* <button
        onClick={() => {
          setIsVisible(true);
        }}
      >
        Show
      </button> */}

      {/* lazy loading  */}
      <button
        onClick={async() => {
          const _ = (await import('lodash')).default;
          const users = [
            {name: 'c'},
            {name: 'b'},
            {name: 'a'},
          ];
          const sortedArray = _.orderBy(users, ['name']);
          console.log(sortedArray)
        }}
      >
        Show
      </button>
      {/* {isVisible && <HeavyComponent />} */}
      {/* <h1>Hello World { session && <span>{session.user!.name}</span> }</h1>

      <Link href="/users">Users</Link>
      <ProductCard/> */}

      {/* 圖片優化 */}
      {/* <Image src={man} alt='Man'/> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Man"
        // width={300}
        // height={170}
        fill
        // fill={true}
        // style={{ objectFit: 'cover'}}
        // style={{ objectFit: 'contain'}}
        className="object-cover"
        // sizes="100vw"
        // RWD
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        // default images are lazy loading，最上方的圖片應該是最先載入

        // cancel lazy loading
        priority
      /> */}
    </main>
  );
}

// export const metadata: Metadata = {
//   title: '...'
//   // 這邊可以單頁dynamic生成metadata
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');
//   return {
//     title: 'product.title',
//     description: 'product.description'
//   }
// }
