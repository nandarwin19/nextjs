import Image from "next/image";
import React from "react";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  return (
    <div>
      <div>
        <Image src="/brands.png" width={300} height={400} />
      </div>
      <div>
        <h1 className="text-xl">{post.title}</h1>
        <span>Authot</span>
        <span>Terry Jefferson</span>
        <span>Published</span>
        <span>01.0</span>
      </div>
    </div>
  );
};

export default SinglePostPage;
