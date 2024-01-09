// import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello World XD</h1>
      {/* 這不是好的Navigation方式 */}
      {/* <a href="/user">Users</a> */}

      {/* 這才是正確的Clinet Side Navigation方式 */}
      <Link href="/users">Users</Link>
      <ProductCard/>
      </main>
    
  )
}
