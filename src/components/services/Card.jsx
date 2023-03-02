import React from "react";

function Card(props) {
  return (
    <div className="flex flex-col justify-between p-12  bg-[#f9f9f9]">
      <p className="text-2xl py-2">{props.title}</p>
      <p className="text-lg leading-180% py-8 text-[#777777]">
       {props.text}
      </p>
      <div className="">
        <a className="border-b border-black" href="#">
          {props.link}
        </a>
      </div>
    </div>
  );
}

export default Card;
