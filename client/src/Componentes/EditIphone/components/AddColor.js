import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useSelector } from "react-redux";

import CreateColor from "./CreateColor";
import SelectColor from "./SelectColor";

export default function AddColor(props) {
  const editIphoneAddColor = useSelector((state) => state.editIphoneAddColor);
  const editIphoneCreateColor = useSelector(
    (state) => state.editIphoneCreateColor
  );

  return (
    <div
      className={`absolute top-0 right-0 w-screen h-full overflow-clip z-40 flex items-center justify-center   ${
        editIphoneAddColor ? null : "hidden"
      } `}
    >
      <div className="absolute top-0 right-0 w-screen h-full bg-black opacity-90"></div>
      {editIphoneCreateColor ? (
        <CreateColor />
      ) : (
        <SelectColor id={props.id} detalle={props.detalle} />
      )}
    </div>
  );
}
