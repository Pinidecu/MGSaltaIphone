import Carrousel from "../Componentes/Carrousel/Carrousel";
import Footer from "../Componentes/Footer/Footer";
import IphoneCard from "../Componentes/IphoneCard/IphoneCard";
import NavBar from "../Componentes/NavBar/NavBar";
import { connect, useDispatch, useSelector } from "react-redux";
import { changeAdmin, getDolar, getIphones } from "../store/Actions";
import { useEffect } from "react";
import NavAdmin from "../Componentes/Admin/NavAdmin";
import Cargando from "../Componentes/Cargando/Cargando";

function Inicio({ iphones, getIphones, getDolar, dolarBlue, admin }) {
  /*   var iphones = useSelector((state) => state.iphones);
  var dolarBlue = useSelector((state) => state.dolarBlue);
 */

  const dispatch = useDispatch();

  function getIphonesFunction() {
    getIphones();
  }
  function getDolarFunction() {
    getDolar();
  }

  useEffect(() => {
    getIphonesFunction();
    getDolarFunction();
  }, []);
  return (
    <div className="flex relative">
      <NavBar admin={admin} />
      <div className=" bg-slate-700  mt-10">
        <div className=" h-[400px] mt-4 ">
          <Carrousel />
        </div>
        <h1 className="text-white text-center text-xl font-bold mt-8">
          Dolar hoy: {dolarBlue === 0 ? <Cargando /> : dolarBlue}
        </h1>

        {admin ? <NavAdmin /> : null}
        <h1 className="text-white text-center text-xl font-bold mt-8">
          Nuevos sellados
        </h1>
        <div className=" flex flex-wrap  justify-center p-2">
          {iphones.map((iphone) => {
            return (
              <IphoneCard
                name={iphone.name}
                price={iphone.price}
                images={iphone.image}
                id={iphone.id}
                key={iphone.id}
                colors={iphone.colors}
                admin={admin}
              />
            );
          })}
        </div>
        <div className=" h-[400px] mt-4 ">
          <Carrousel />
        </div>
        <h1 className="text-white text-center text-xl font-bold mt-8">
          Usados como nuevos
        </h1>
        <div className=" flex flex-wrap  justify-center p-2">
          <IphoneCard />
          <IphoneCard />
          <IphoneCard />
          <IphoneCard />
          <IphoneCard />
          <IphoneCard />
          <IphoneCard />
          <IphoneCard />
        </div>
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    iphones: state.iphones,
    dolarBlue: state.dolarBlue,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getIphones: (iphones) => {
      dispatch(getIphones(iphones));
    },
    getDolar: (dolarBlue) => {
      dispatch(getDolar(dolarBlue));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
//export default Inicio;
