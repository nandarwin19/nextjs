import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/libs/data";
import React from "react";

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const Blog = async () => {
  const posts = await getPosts();
  return (
    <div className="flex justify-between flex-wrap">
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
