import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = { title: "Blog — Chuka Okudo" };

export default function BlogIndex() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1080px] px-7">
        <h1 className="mb-10 font-serif text-4xl font-medium">Blog</h1>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded border border-line p-7"
            >
              <div className="mb-3 text-sm font-semibold text-sageDark">
                {post.tag}
              </div>
              <h2 className="mb-2 font-serif text-xl">{post.title}</h2>
              <p className="text-sm text-inkSoft">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
