import React from "react";

export function Footer() {
  return (
    <div className="footer">
      <div className="flex justify-between text-xs py-6 px-4 max-w-7xl m-auto">
        <div>
          <p>
            ©2022 Made by <span className="font-extrabold underline-offset-2 underline"> Pawel Gola.</span> Powered by <span className="font-extrabold underline-offset-2 underline">Webflow</span>
          </p>
        </div>
        <div className="flex gap-6 text-[#777777]">
          <a href="#" className="hover:scale-110 transition-all">Privacy</a>
          <a href="#" className="hover:scale-110 transition-all">Imprint</a>
        </div>
      </div>
    </div>
  );
}
