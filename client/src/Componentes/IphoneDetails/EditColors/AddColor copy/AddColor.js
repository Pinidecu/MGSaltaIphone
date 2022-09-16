import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useSelector } from "react-redux";

import CreateColor from "../CreateColor/CreateColor";
import SelectColor from "../SelectColor";
import { AddColorContainer, AddColorModal } from "./styled";

export default function AddColor(props) {
  const editIphoneAddColor = useSelector((state) => state.editIphoneAddColor);
  const editIphoneCreateColor = useSelector(
    (state) => state.editIphoneCreateColor
  );

  return (
    <AddColorContainer editIphoneAddColor={editIphoneAddColor}>
      <AddColorModal></AddColorModal>
      {editIphoneCreateColor ? (
        <CreateColor />
      ) : (
        <SelectColor id={props.id} detalle={props.detalle} />
      )}
    </AddColorContainer>
  );
}
