import iphoneAzul from "../../Imagenes/iphoneAzul.png";
import logo from "../../Imagenes/logoGris.png";
import mari from "../../Imagenes/mari.jpg";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { changeAdmin } from "../../store/Actions";
import { Link } from "react-router-dom";

export default function NavAdmin({ admin }) {
  return (
    <div className="flex items-center justify-center gap-x-8 m-5">
      <Link
        to="/nuevoiphone"
        className="text-gray-900 bg-white border border-2 border-gray-300 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 font-medium  text-sm px-5 py-5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Nuevo iPhone
      </Link>
      <Link
        to="/producto"
        className="text-gray-900 bg-white border border-2 border-gray-300 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 font-medium  text-sm px-5 py-5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Nuevo iPhone Usado
      </Link>
      <Link
        to="/producto"
        className="text-gray-900 bg-white border border-2 border-gray-300 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 font-medium  text-sm px-5 py-5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Nuevo Accesorio
      </Link>
    </div>
  );
}
