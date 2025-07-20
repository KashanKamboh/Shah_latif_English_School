import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./blogData";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-green-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl italic font-bold text-green-900 mb-8 text-center animate-fade-in-up">School Blog</h1>
          <p className="text-lg md:text-xl text-green-800 mb-12 text-center animate-fade-in-up delay-100">
            Stay updated with the latest events, achievements, and stories from Shah Latif English Schooling System. Explore our vibrant school life through detailed blog posts, photos, and more!
          </p>
          <div className="grid gap-10 md:grid-cols-2">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:scale-[1.03] transition-transform duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="w-full h-56 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={224}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-green-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-sm text-green-700 mb-4 italic">{post.date}</p>
                    <p className="text-green-900 text-base mb-4">{post.description}</p>
                  </div>
                  <div className="flex justify-end">
                    <Link href={`/Blog/${post.slug}`}>
                      <button className="px-4 py-2 bg-green-900 text-white rounded-full font-semibold shadow hover:bg-green-800 transition-all animate-pulse">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
