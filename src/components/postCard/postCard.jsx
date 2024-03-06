import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="w-[350px] h-auto">
      <div>
        <div className="w-[350px] h-auto bg-gray-400">
          <Image
            src="/post.png"
            alt=""
            layout="responsive"
            width={300}
            height={400}
            className="max-w-full h-auto object-cover"
          />
        </div>

        <span>01.01.2024</span>
      </div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={`/blog/${post.id}`}>READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
