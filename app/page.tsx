// import Link from 'next/link'
// import ProductCard from './components/ProductCard'
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
// import man from "@/public/images/man.png";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      {/* <h1>Hello World { session && <span>{session.user!.name}</span> }</h1>

      <Link href="/users">Users</Link>
      <ProductCard/> */}

      {/* 圖片優化 */}
      {/* <Image src={man} alt='Man'/> */}
      <Image
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
      />
    </main>
  );
}
