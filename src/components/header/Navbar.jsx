import { useState } from "react";
import { Button } from "../global/Button";
import { Darkmode } from "../global/Darkmode";
export function Navbar() {
  const navItems = [
    {
      label: "Work",
      route: "#work",
    },
    {
      label: "Services",
      route: "#services",
    },
    {
      label: "About",
      route: "#why",
    },
    {
      label: "Blog",
      route: "#",
    },
  ];

  const action = ()=> {
    console.log("hola")
  }
  return (
    <ul className="flex items-center w-full justify-around md:justify-end md:gap-7 ">
      {navItems.map(({ label, route }) => (
        <li className="navitem text-sm hover:border-b border-black dark:text-gray-300" 
        key={route}>
          <a href={route}>{label}</a>
        </li>
      ))}

      <Darkmode text="Let's Talk"/>
    </ul>
  );
}

const navItem = document.querySelectorAll('.navitem')
    navItem.forEach(navItem =>{
        navItem.addEventListener('click', () => {
            document.querySelector('.active')?.classList.remove('active')
            navItem.classList.add('active')
        })
    })