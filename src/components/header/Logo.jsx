import logo from "../../img/logo.svg";
export function Logo () {
    return(
        <div className="flex gap-2">
            <img src={logo} />
            <span>oliv</span>
        </div>
    )
}