export function Button(props) {
    
  function getColor(){
      if (props.color == "black") {
        return (`bg-black text-white`)
      }
    }

  function getSize(){
    if (props.size == "small") {
      return (`text-xs px-2 py-2`)
    }else{
      return(`px-4 py-2.5`)
    }
  }

    return (
      <button className={`border border-black rounded-full transition-all hover:scale-110 ${getSize()} ${getColor()}`}>
        {props.text}
      </button>
    );
  
}
