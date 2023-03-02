export function Button(props) {

  if (props.color !== 'black') {
    return (
      <button className="border border-black rounded-full px-4 py-2 shrink-0 transition-all hover:scale-110">
        {props.text}
      </button>
    );
  }else{
    return (
      <button className="border border-black rounded-full px-4 py-2 shrink-0 transition-all hover:scale-110 bg-black text-white">
        {props.text}
      </button>
    );
  }
}
