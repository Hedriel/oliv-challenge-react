import React from "react";
export function Post(props) {
  return (
    <div className="post flex flex-wrap md:items-center md:justify-between flex-col md:flex-row ">
        <img className="w-full cursor-pointer rounded-r-r transition-all" src={props.src} />
      <div className="-order-1 md:order-3">
        <button href="#" className="border border-black rounded-full my-2 px-2 py-2 shrink-0 transition-all hover:scale-110 text-xs ">{props.tag}</button>
      </div>
      <div>
        <a className="text-2xl" href="#">{props.title}</a>
      </div>
    </div>
  );
}
