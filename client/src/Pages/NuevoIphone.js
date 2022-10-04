import Footer from "../Componentes/Footer/Footer";
import NavBar from "../Componentes/NavBar/NavBar";
import NuevoIphoneForm from "../Componentes/NuevoIphoneForm/NuevoIphoneForm";
import styled from "styled-components";
import NuevoIphoneUsadoForm from "../Componentes/NuevoIphoneUsadoForm/NuevoIphoneUsadoForm";

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

export function NuevoIphone({usado}) {
  return (
    <NuevoIphoneContainer>
      <NavBar admin={true} />
      {usado?<NuevoIphoneUsadoForm />:<NuevoIphoneForm />}
      
      <Footer />

    </NuevoIphoneContainer>
  );
}
