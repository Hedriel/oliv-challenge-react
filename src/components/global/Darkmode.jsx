export function Darkmode() {

  function toggleDarkMode(){
   const html = document.getElementsByTagName('html')[0]

   html.classList.contains('dark')? html.classList.remove('dark'): html.classList.add('dark')
  }

  return (
    <button onClick={toggleDarkMode}
      className={`border border-black rounded-full transition-all hover:scale-110`}
    >
      +
    </button>
  );
}
