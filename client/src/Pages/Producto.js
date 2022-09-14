import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../Componentes/Footer/Footer";
import IphoneDetails from "../Componentes/IphoneDetails/IphoneDetails";
import NavBar from "../Componentes/NavBar/NavBar";
import { getDolar } from "../store/Actions";

function Producto(props) {
  let { id } = useParams();
  const dolarBlue = useSelector((state) => state.dolarBlue);

  function getDolarFunction() {
    getDolar();
  }
  useEffect(() => {
    getDolarFunction();
  }, []);
  return (
    <div className="flex flex-col min-h-screen justify-between bg-slate-700">
      <NavBar /> 
      <IphoneDetails id={id} dolar={dolarBlue} />
      <Footer />
    </div>
  );
}

export default Producto;
