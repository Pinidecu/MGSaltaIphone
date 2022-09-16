import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio/Inicio";
import PageNotFound from "./Componentes/PageNotFound/PageNotFound";
import Producto from "./Pages/Producto";
import EditarProducto from "./Pages/EditarProducto";
import { NuevoIphone } from "./Pages/NuevoIphone";
import IphoneDetailsEdit from "./Componentes/IphoneDetails/IphoneDetailsEdit";
import NavBar from "./Componentes/NavBar/NavBar";
import Footer from "./Componentes/Footer/Footer";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Inicio admin={false} />} />
      <Route exact path="/admin" element={<Inicio admin={true} />} />
      <Route exact path="/producto/:id" element={<Producto />} />
      <Route exact path="/producto-admin/:id" element={<Producto admin={true}/>} />
      <Route
        exact
        path="/editarproducto/:id"
        element={<EditarProducto admin={true} />}
      />
      <Route
        exact
        path="/editarproductoprueba/:id"
        element={
          <div className="flex flex-col min-h-screen justify-between bg-slate-700">
            <NavBar />
            <IphoneDetailsEdit
              id={"c4fc706f-25ca-4a63-8615-0d9d7ac96554"}
              edit={true}
            />
            <Footer />
          </div>
        }
      />
      <Route exact path="/nuevoiphone" element={<NuevoIphone />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
