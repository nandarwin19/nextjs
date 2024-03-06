import { getUser } from "@/libs/data";
import React from "react";

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${userId}`,
//     { catch: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  //Fetch data without API
  const post = await getUser(userId);
  return (
    <div>
      <h1 className="text-xl">{user?.title}</h1>
      <span>Authot</span>
      <span>Terry Jefferson</span>
      <span>Published</span>
      <span>01.0</span>
    </div>
  );
};

export default PostUser;
