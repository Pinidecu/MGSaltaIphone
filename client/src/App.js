import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import PageNotFound from "./Componentes/PageNotFound/PageNotFound";
import Producto from "./Pages/Producto";
import EditarProducto from "./Pages/EditarProducto";
import { NuevoIphone } from "./Pages/NuevoIphone";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Inicio admin={false} />} />
      <Route exact path="/producto/:id" element={<Producto />} />
      <Route exact path="/editarproducto/:id" element={<EditarProducto />} />
      <Route exact path="/nuevoiphone" element={<NuevoIphone />} />
      <Route exact path="/admin" element={<Inicio admin={true} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
