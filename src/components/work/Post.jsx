import React from "react";
import { Button } from "../global/Button";
export function Post(props) {
  return (
    <div className="post flex flex-wrap md:items-center md:justify-between flex-col md:flex-row ">
        <img className="w-full cursor-pointer rounded-r-r transition-all" src={props.src} />
      <div className="-order-1 md:order-3 my-2">
        <Button text={props.tag} size="small"/>
      </div>
      <div>
        <a className="text-2xl" href="#">{props.title}</a>
      </div>
    </div>
  );
}
