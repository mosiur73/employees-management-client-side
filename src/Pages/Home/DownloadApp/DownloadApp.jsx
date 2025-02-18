import React from 'react';

const DownloadApp = () => {
    return (
        <div>
            <div className="bg-red-600 text-white flex flex-col md:flex-row items-center justify-center px-8 py-16">
      {/* Left Side - Text & Buttons */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold">
          Download App For <span className="text-gray-200">iPhone & Android</span> Now!
        </h2>
        <p className="text-gray-300 mt-2">Mobile application design isn't always easy.</p>

        {/* Download Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <a href="#" className="block">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" className="h-12" />
          </a>
          <a href="#" className="block">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12" />
          </a>
        </div>
      </div>

      {/* Right Side - Mobile Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        {/* <img
          src="/path-to-your-image.png"
          alt="Mobile App"
          className="h-80 md:h-auto"
        /> */}
      </div>
    </div>
        </div>
    );
};

export default DownloadApp;