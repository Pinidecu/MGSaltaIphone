import {
  GET_IPHONES,
  GET_IPHONES_USADOS,
  GET_DOLAR,
  CHANGE_ADMIN,
  GET_DETALLE,
  CLEAR_DETALLE,
  GET_COLORES,
  EDIT_IPHONE_CREATE_COLOR,
  EDIT_IPHONE_ADD_COLOR,
} from "../Actions";

const initialState = {
  iphones: [],
  iphonesUsados: [],
  dolarBlue: 0,
  admin: false,
  detalle: {},
  colores: [],
  editIphoneAddColor: false,
  editIphoneCreateColor: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IPHONES:
      return {
        ...state,
        iphones: action.payload,
      };
      case GET_IPHONES_USADOS:
      return {
        ...state,
        iphonesUsados: action.payload,
      };
    case GET_DOLAR:
      return {
        ...state,
        dolarBlue: action.payload,
      };
    case CHANGE_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };
    case GET_DETALLE:
      return {
        ...state,
        detalle: action.payload,
      };
    case CLEAR_DETALLE:
      return {
        ...state,
        detalle: {},
      };
    case GET_COLORES:
      return {
        ...state,
        colores: action.payload,
      };
    case EDIT_IPHONE_ADD_COLOR:
      return {
        ...state,
        editIphoneAddColor: action.payload,
      };
    case EDIT_IPHONE_CREATE_COLOR:
      return {
        ...state,
        editIphoneCreateColor: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
