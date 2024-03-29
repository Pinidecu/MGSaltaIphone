import NavBar from "../../Componentes/NavBar/NavBar";
import CarrouselPortada from "../../Componentes/CarrouselPortada/CarrouselPortada";
import NavAdmin from "../../Componentes/Admin/NavAdmin";
import NuevosSellados from "../../Componentes/NuevosSellados/NuevosSellados";
import Cargando from "../../Componentes/Cargando/Cargando";
import Footer from "../../Componentes/Footer/Footer";
import { connect } from "react-redux";
import { getDolar, getIphones, getIphonesUsados, getAccesorios } from "../../store/Actions";
import { useEffect } from "react";
import portada1 from "../../Imagenes/portada1.jpg";
import portada2 from "../../Imagenes/portada2.jpg";
import portada3 from "../../Imagenes/portada3.jpg";
import { ContainerCarrousel, ContainerInicio, DolarPrice } from "./styled";
import Usados from "../../Componentes/Usados/Usados";
import Accesorios from "../../Componentes/Accesorios/Accesorios";

function Inicio({ iphones, iphonesUsados, accesorios, getAccesorios, getIphonesUsados, getIphones, getDolar, dolarBlue, admin }) {
  function getIphonesFunction() {
    getIphones();
    getIphonesUsados();
    getAccesorios();
  }
  function getDolarFunction() {
    getDolar();
  }

  useEffect(() => {
    getIphonesFunction();
    getDolarFunction();
  }, []);

  return (
    <ContainerInicio>
      <NavBar admin={admin} />
      <ContainerCarrousel>
        <CarrouselPortada imagenes={[portada1, portada2, portada3]} />
      </ContainerCarrousel>
      <DolarPrice>
        Dolar hoy: {dolarBlue === 0 ? <Cargando /> : ` $${dolarBlue}`}
      </DolarPrice>
      {admin ? <NavAdmin /> : null}
      <NuevosSellados iphones={iphones} admin={admin} />
      <ContainerCarrousel>
        <CarrouselPortada imagenes={[portada1, portada2, portada3]} />
      </ContainerCarrousel>
      <Usados iphonesUsados={iphonesUsados} admin={admin} />
      {/* <Accesorios accesorios={accesorios} admin={admin} /> */}
      <Footer />
    </ContainerInicio>
  );
}

const mapStateToProps = (state) => {
  return {
    iphones: state.iphones,
    iphonesUsados: state.iphonesUsados,
    accesorios: state.accesorios,
    dolarBlue: state.dolarBlue,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getIphones: (iphones) => {
      dispatch(getIphones(iphones));
    },
    getIphonesUsados: (iphonesUsados) => {
      dispatch(getIphonesUsados(iphonesUsados));
    },
    getAccesorios: (accesorios) => {
      dispatch(getAccesorios(accesorios));
    },
    getDolar: (dolarBlue) => {
      dispatch(getDolar(dolarBlue));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
