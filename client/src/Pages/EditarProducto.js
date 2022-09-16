import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditIphone from "../Componentes/EditIphone/EditIphone";
import Footer from "../Componentes/Footer/Footer";
import IphoneDetailsEdit from "../Componentes/IphoneDetails/IphoneDetailsEdit";
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

      <EditIphone id={id} dolar={dolarBlue} admin ={props.admin}/>
      {/* <IphoneDetailsEdit id={id}   edit={true}/> */}
      <Footer />
    </div>
  );
}

export default EditarProducto;
