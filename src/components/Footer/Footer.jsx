import React from "react";
import LanguageTranslator from "../LanguageTranslator/LanguageTranslator";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full bg-green-950 text-white">
      <div className="container">
        <div className="relative w-full py-14 border-b border-b-green-900">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h5 className="mb-3 text-lg font-bold">Services</h5>
              <ul>
                <li className="block">
                  <Link href="/" className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300">
                    LEI registration
                  </Link>
                </li>
                <li className="block">
                  <Link href="/" className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300">
                    LEI renewal
                  </Link>
                </li>
                <li className="block">
                  <Link href="/" className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300">
                    LEI certificate & tag
                  </Link>
                </li>
                <li className="block">
                  <Link href="/" className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300">
                    LEI search
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h5 className="mb-3 text-lg font-bold">Resources</h5>
              <ul>
                <li className="block">
                  <Link href="/" className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300">
                    Track your order
                  </Link>
                </li>
                <li className="block">
                  <Link href="/" className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300">
                    LEI cost
                  </Link>
                </li>
                <li className="block">
                  <Link href="/" className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300">
                    Blog
                  </Link>
                </li>
                <li className="block">
                  <Link href="/" className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h5 className="mb-3 text-lg font-bold">Company</h5>
              <ul>
                <li className="block">
                  <Link href="/" className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300">
                    About us
                  </Link>
                </li>
                <li className="block">
                  <Link href="/" className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300">
                    Become a partner
                  </Link>
                </li>
                <li className="block">
                  <Link href="/" className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300">
                    Contact
                  </Link>
                </li>
                <li className="block">
                  <Link href="/" className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300">
                    Terms & conditions
                  </Link>
                </li>
                <li className="block">
                  <Link href="/" className="block font-light py-0.5 text-white/80 hover:text-white transition-all duration-300">
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h5 className="text-lg font-bold">LEI Register</h5>
              <p className="text-xs font-light mb-3">
                LEI: 9845003A5176DAA0E442
              </p>
              <p className="text-xs font-light">
                Official Registration Agent of Ubisecure Oy (RapidLEI) LEI:
                529900T8BM49AURSDO55, Nasdaq CSD SE (Nasdaq LEI) LEI:
                485100001PLJJ09NZT59
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full py-10">
          <p className="text-sm font-light">Copyright &copy; ISIN 2024 | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
