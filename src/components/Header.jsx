import { Button } from "./Button";

const navItems=[
    {
        label:'Work',
        route:'#'
    },
    {
        label:'Services',
        route:'#'
    },
    {
        label:'About',
        route:'#'
    },
    {
        label:'Blog',
        route:'#'
    },
]

export function Header() {
  return (
    <header>
        <nav>
            <ul>
            {
                navItems.map(({label, route}) =>(
                    <li key={route}>
                        <a href={route}>{label}</a>
                    </li>
                    ))
                }
                </ul>
        </nav>
      <Button text="Let's Talk" />
    </header>
  );
}
