import { Icons } from "@/components/icons";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 py-8 px-4 text-white text-center">
      <div className="container mx-auto flex flex-col items-center">
        <Icons.gitHub className="mr-2 h-4 w-4" />

        {/* <img src="path/to/your/logo.png" alt="Quiz App Logo" className="mb-4" /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-center">
            {/* <img
              src="path/to/about-us-icon.png"
              alt="About Us"
              className="w-6 h-6 mr-2"
            /> */}
            <Icons.gitHub className="mr-2 h-4 w-4" />

            <a href="#" className="text-white hover:text-gray-400">
              About Us
            </a>
          </div>
          <div className="flex items-center justify-center">
            {/* <img
              src="path/to/contact-us-icon.png"
              alt="Contact Us"
              className="w-6 h-6 mr-2"
            /> */}
            <Icons.gitHub className="mr-2 h-4 w-4" />

            <a href="#" className="text-white hover:text-gray-400">
              Contact Us
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a href="#" className="text-white hover:text-gray-400">
              <span className="sr-only">Facebook</span>
              {/* <img
                src="path/to/facebook-icon.png"
                alt="Facebook"
                className="w-6 h-6 mr-2"
              /> */}
              <Icons.gitHub className="mr-2 h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <span className="sr-only">Twitter</span>
              {/* <img
                src="path/to/twitter-icon.png"
                alt="Twitter"
                className="w-6 h-6 mr-2"
              /> */}
              <Icons.gitHub className="mr-2 h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <span className="sr-only">Instagram</span>
              {/* <img
                src="path/to/instagram-icon.png"
                alt="Instagram"
                className="w-6 h-6 mr-2"
              /> */}
              <Icons.gitHub className="mr-2 h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="mt-4">Copyright © 2023 Quiz App</p>
      </div>
    </footer>
  );
}

export default Footer;
