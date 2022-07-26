import Carrousel from "../Componentes/Carrousel/Carrousel";
import Footer from "../Componentes/Footer/Footer";
import IphoneCard from "../Componentes/IphoneCard/IphoneCard";
import NavBar from "../Componentes/NavBar/NavBar";
import { connect, useDispatch, useSelector } from "react-redux";
import { changeAdmin, getDolar, getIphones } from "../store/Actions";
import { useEffect } from "react";
import NavAdmin from "../Componentes/Admin/NavAdmin";
import Cargando from "../Componentes/Cargando/Cargando";
import NuevoIphoneForm from "../Componentes/NuevoIphone/NuevoIphoneForm";

export function NuevoIphone() {
  /* var dolarBLue = getDolarBlue();
  console.log(dolarBLue); */
  return (
    <div className="grid relative  min-h-screen">
      <NavBar admin={true} />
      <NuevoIphoneForm />
      <Footer />
    </div>
  );
}
