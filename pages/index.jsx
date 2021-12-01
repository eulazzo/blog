import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";

const posts = [
  { title: "React Testing", excerpt: "Learning react Testing" },
  { title: "React With taildind", excerpt: "Learning react Testing" },
  { title: "React With lama", excerpt: "Learning react Testing" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Toppo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1 ">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative ">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
