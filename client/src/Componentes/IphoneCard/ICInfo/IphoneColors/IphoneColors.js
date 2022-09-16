import { ColorButton } from "./styled";

export default function IphoneColors({ colors }) {
  return (
    <div className="flex items-center justify-center w-full mt-2">
      {colors
        ? colors.map((color) => {
            return (
              <ColorButton key={color.id} color={color?.hexa}></ColorButton>
            );
          })
        : null}
    </div>
  );
}
