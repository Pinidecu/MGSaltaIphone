import iphoneAzul from "../../Imagenes/iphoneAzul.png";
import logo from "../../Imagenes/logoGris.png"

export default function Footer() {
  return (
    <div className=" w-full mt-5 self-end bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022
        <a
          href="https://instagram.com/ezequieldecu"
          target="blank"
          className="hover:underline"
        >
          Vintech™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="http://localhost:3000/"
            className="mr-4 hover:underline md:mr-6 "
          >
            About
          </a>
        </li>
        <li>
          <a
            href="http://localhost:3000/"
            className="mr-4 hover:underline md:mr-6"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="http://localhost:3000/"
            className="mr-4 hover:underline md:mr-6"
          >
            Licensing
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
