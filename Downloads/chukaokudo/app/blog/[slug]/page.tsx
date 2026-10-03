import { PortableText } from "@portabletext/react";
import { getPostBySlug, urlFor } from "@/lib/sanity";
import { notFound } from "next/navigation";
import Image from "next/image";

export const revalidate = 60;

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <article className="py-20">
      <div className="mx-auto max-w-[720px] px-7">
        {post.tag && (
          <div className="mb-3 text-sm font-semibold text-sageDark">
            {post.tag}
          </div>
        )}
        <h1 className="mb-8 font-serif text-4xl font-bold uppercase">
          {post.title}
        </h1>

        {post.coverImage && (
          <div className="relative mb-10 aspect-video w-full overflow-hidden rounded">
            <Image
              src={urlFor(post.coverImage).width(1200).height(675).url()}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert max-w-none text-inkSoft">
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p>{post.excerpt}</p>
          )}
        </div>
      </div>
    </article>
  );
}
