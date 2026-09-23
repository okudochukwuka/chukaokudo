import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="py-20">
      <div className="mx-auto max-w-[720px] px-7">
        <div className="mb-3 text-sm font-semibold text-sageDark">
          {post.tag}
        </div>
        <h1 className="mb-8 font-serif text-4xl font-medium">{post.title}</h1>
        <p className="whitespace-pre-line text-inkSoft">{post.body}</p>
      </div>
    </article>
  );
}
