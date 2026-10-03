import Link from "next/link";
import { getAllPosts } from "@/lib/sanity";

export const metadata = { title: "Blog | Chuka Okudo" };
export const revalidate = 60;

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1160px] px-7">
        <h1 className="mb-10 font-serif text-4xl font-bold uppercase">
          Blog
        </h1>

        {posts.length === 0 ? (
          <p className="text-inkSoft">
            No posts yet. Add one from the{" "}
            <Link href="/studio" className="text-sage underline">
              dashboard
            </Link>
            .
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="block rounded border border-line p-7 transition duration-300 hover:-translate-y-1 hover:border-sage/50"
              >
                {post.tag && (
                  <div className="mb-3 text-sm font-semibold text-sageDark">
                    {post.tag}
                  </div>
                )}
                <h2 className="mb-2 font-serif text-xl">{post.title}</h2>
                {post.excerpt && (
                  <p className="text-sm text-inkSoft">{post.excerpt}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
