import { getAllPostsData } from "@/lib/blog-posts";
import { useMDXComponents } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import rehypeHighlight from "rehype-highlight";

const allPostsData = getAllPostsData();

export const generateStaticParams = async () => {
  return allPostsData.map(({ slug }) => ({ slug }));
};

function BlogPost({ params: { slug } }: any) {
  const { content, metadata } = allPostsData.find(
    (post) => post.slug === slug
  )!;
  const mdxComponents = useMDXComponents({});

  return (
    <main>
      <header>
        <h1>{metadata.title}</h1>
        <em>{metadata.description}</em>
      </header>
      <article>
        <MDXRemote
          source={content}
          options={{
            mdxOptions: { rehypePlugins: [rehypeHighlight] },
          }}
          components={mdxComponents}
        />
      </article>
    </main>
  );
}

export default BlogPost;
