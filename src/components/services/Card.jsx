import React from "react";

export function Card(props) {
  return (
    <div className="group flex flex-col justify-between p-12 bg-[#f9f9f9] hover:rounded-3xl hover:bg-black hover:text-white transition-all duration-300">
      <p className="text-2xl py-2">{props.title}</p>
      <p className="text-lg leading-180% py-8 text-[#777777] group-hover:text-white">
       {props.text}
      </p>
      <div className="">
        <a className="border-b border-black group-hover:border-white" href="#">
          {props.link}
        </a>
      </div>
    </div>
  );
}

