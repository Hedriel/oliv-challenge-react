import React from "react";
import { Button } from "../global/Button";
import { Post } from "./Post";

const postItems = [
  {
    title: "Invision Studio",
    src: require("../../img/invision-studio.png"),
    tag: "Marketing",
  },
  {
    title: "Square Media",
    src: require("../../img/square-media.png"),
    tag: "Branding",
  },
  {
    title: "Vision Design",
    src: require("../../img/vision-design.png"),
    tag: "Social Media",
  },
  {
    title: "Design Bors",
    src: require("../../img/design-bors.png"),
    tag: "Branding",
  },
];

export function Work() {
  return (
    <div className="flex justify-center">
      <a id='work' className='anchor'></a>
      <div className="mx-10 max-w-7xl my-12">
        <div className="py-2 border-b text-xs">OUR WORK</div>
        <div className="flex justify-between items-center py-10">
          <span className="text-4xl w-min font-medium md:w-fit">Selected Work</span>
          <div>
            <Button text="All Work" />
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {postItems.map((post) => (
            <Post
              key={post.title}
              title={post.title}
              src={post.src}
              tag={post.tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
