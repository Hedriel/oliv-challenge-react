import { Button } from "../global/Button";
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
  return (
    <ul className="flex items-center w-full justify-around md:justify-end md:gap-7 ">
      {navItems.map(({ label, route }) => (
        <li className="navitem text-sm hover:border-b border-black" 
        key={route}>
          <a href={route}>{label}</a>
        </li>
      ))}
      <Button text="Let's Talk"/>
    </ul>
  );
}

const navItem = document.querySelectorAll('.navitem')
console.log(navItem)
    navItem.forEach(navItem =>{
        navItem.addEventListener('click', () => {
            document.querySelector('.active')?.classList.remove('active')
            navItem.classList.add('active')
        })
    })