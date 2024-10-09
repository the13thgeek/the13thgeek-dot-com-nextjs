import Link from "next/link";
//import Image from "next/image";

export default function Home() {
  return <main>
    <div>
      {/* <Image
        src="/geek-favicon.png"
        alt="test image" 
        layout="responsive"
        width={50}
        height={50}
      /> */}
      <h1>Home Page</h1>
      <p>Some content</p>
    </div>
    <Link href="/about">About</Link>
  </main>;
}
