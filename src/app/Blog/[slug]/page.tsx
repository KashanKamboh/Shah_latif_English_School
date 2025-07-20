

import React from "react";
import { blogPosts } from "../blogData";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Image from "next/image";

interface BlogDetailParams {
  slug: string;
}

interface BlogContentSection {
  heading: string;
  text: string;
}

export default function BlogDetail({ params }: { params: BlogDetailParams }) {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">404 | Blog Not Found</h1>
      </main>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-green-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">{post.title}</h1>
          <p className="text-green-700 mb-6 italic">{post.date}</p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {post.images && post.images.map((img: string, i: number) => (
              <Image key={i} src={img} alt={post.title + ' image ' + (i+1)} width={400} height={192} className="rounded-xl shadow object-cover w-full h-48" />
            ))}
          </div>
          {post.content && post.content.map((section: BlogContentSection, i: number) => (
            <div key={i} className="mb-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-2">{section.heading}</h2>
              <p className="text-green-900 text-base">{section.text}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 