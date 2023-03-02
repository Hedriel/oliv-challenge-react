export function Button(props) {
    
  function getColor(){
      if (props.color == "black") {
        return (`bg-black text-white`)
      }
    }
    return (
      <button className={`border border-black rounded-full px-4 py-2 shrink-0 transition-all hover:scale-110 ${getColor()}`}>
        {props.text}
      </button>
    );
  
}
