import Footer from "../Componentes/Footer/Footer";
import NavBar from "../Componentes/NavBar/NavBar";
import NuevoIphoneForm from "../Componentes/NuevoIphoneForm/NuevoIphoneForm";
import styled from "styled-components";
import NuevoIphoneUsadoForm from "../Componentes/NuevoIphoneUsadoForm/NuevoIphoneUsadoForm";
import NuevoAccesorioForm from "../Componentes/NuevoAccesorioForm/NuevoAccesorioForm";

const NuevoIphoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  background-color: var(--background-gray);
`;

export function NuevoIphone({nuevo, usado, accesorio}) {
  return (
    <NuevoIphoneContainer>
      <NavBar admin={true} />
      {nuevo?<NuevoIphoneForm />:null}
      {usado?<NuevoIphoneUsadoForm />:null}
      {accesorio?<NuevoAccesorioForm />:null}
      
      <Footer />

    </NuevoIphoneContainer>
  );
}
