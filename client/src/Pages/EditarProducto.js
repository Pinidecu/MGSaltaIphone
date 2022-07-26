import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Carrousel from "../Componentes/Carrousel/Carrousel";
import EditIphone from "../Componentes/EditIphone/EditIphone";
import Footer from "../Componentes/Footer/Footer";
import NavBar from "../Componentes/NavBar/NavBar";
import { getDolar } from "../store/Actions";

function EditarProducto(props) {
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
      {/* <div className=" bg-slate-700 mt-10">
        <h1 className="text-white text-center text-xl font-bold mt-8">
          Iphone 13 PRO MAX
        </h1>
        <div className=" flex flex-wrap  justify-center p-2">
          <IphoneDetails />
        </div>
      </div> */}
      <EditIphone id={id} dolar={dolarBlue} />
      <Footer />
    </div>
  );
}

export default EditarProducto;
