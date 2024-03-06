"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <form action="" className="max-w-[400px] space-y-4">
        <Input type="text" label="Name" />
        <Input type="email" label="Email" />
        <Input type="text" label="Phone number" />
        <Textarea
          label="Description"
          placeholder="Enter your description"
          className="max-w-xs"
        />
        <Button onClick={() => console.log("clicked")}>Send</Button>
      </form>
    </div>
  );
}
