import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/libs/data";
import Image from "next/image";
import React, { Suspense } from "react";

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  //Fetch data without API
  const post = await getPost(slug);
  return (
    <div>
      <div>
        <Image src="/brands.png" width={300} height={400} />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PostUser userId={slug} />
      </Suspense>
    </div>
  );
};

export default SinglePostPage;
