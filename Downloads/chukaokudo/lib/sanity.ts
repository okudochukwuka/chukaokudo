import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export type Post = {
  _id: string;
  title: string;
  slug: string;
  tag?: string;
  excerpt?: string;
  coverImage?: any;
  body?: any;
  publishedAt?: string;
};

const postFields = `
  _id,
  title,
  "slug": slug.current,
  tag,
  excerpt,
  coverImage,
  body,
  publishedAt
`;

export async function getAllPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) { ${postFields} }`
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] { ${postFields} }`,
    { slug }
  );
}
