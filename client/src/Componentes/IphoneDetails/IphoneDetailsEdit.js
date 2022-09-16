import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useDispatch, useSelector } from "react-redux";
import {
  clearDetalle,
  getColors,
  getDetalle,
  getDolar,
} from "../../store/Actions";
import { IDContainer } from "./styled";
import IDCaracteristicas from "./IDCaracteristicas/IDCaracteristicas";
import IDCard from "./IDCard/IDCard";

export default function IphoneDetailsEdit({id, edit}) {
   const detalle = useSelector((state) => state.detalle);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetalle(id));
    dispatch(getColors());
    return () => {
      dispatch(clearDetalle());
    };
  }, [dispatch]);

  function getDolarFunction() {
    getDolar();
  }
  useEffect(() => {
    getDolarFunction();
  }, []);

  let [more, setMore] = useState(false);
  return (
    <IDContainer>
      <IDCard detalle={detalle} />
      {detalle.features ? (
        <IDCaracteristicas
          setMore={setMore}
          more={more}
          features={detalle.features}
          edit={edit}
        />
      ) : null}
    </IDContainer>
  );
}
