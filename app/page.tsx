import { getAllPostsData } from "@/lib/blog-posts";
import Link from "next/link";

export default async function Home() {
  const allPostsData = await getAllPostsData();

  return (
    <main>
      <header>
        <h1>My Blog posts</h1>
      </header>
      <section>
        <ul>
          {allPostsData.map(({ slug, metadata }) => (
            <li key={slug}>
              <Link href={"./blog/" + slug}>
                <h2>{metadata.title}</h2>
                <p>{metadata.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
