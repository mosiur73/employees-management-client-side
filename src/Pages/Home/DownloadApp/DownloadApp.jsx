import React from "react";
import { FaGooglePlay } from "react-icons/fa";

const DownloadApp = () => {
  return (
    <div className="bg-orange-500 text-white flex flex-col items-center justify-center  py-16 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold">
        Download App For <span className="text-gray-200">iPhone & Android</span> Now!
      </h2>
      <p className="text-gray-300 mt-2">Mobile application design isn't always easy.</p>

      {/* Download Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <a href="#" className="block">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
            alt="App Store"
            className="h-12"
          />
        </a>
       <div className="bg-black px-8">
       <a href="#" className="block py-4 text-3xl">
        <FaGooglePlay />
        </a>
       </div>
      </div>
    </div>
  );
};

export default DownloadApp;
