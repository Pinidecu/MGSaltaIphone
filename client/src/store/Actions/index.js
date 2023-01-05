import axios from "axios";
import {
  IPHONE_URL,
  IPHONESUSADOS_URL,
  DOLAR_URL,
  DETAIL_URL,
  COLORS_URL,
  DETAIL_USADO_URL,
} from "../../constants";
export const GET_IPHONES = "GET_IPHONES";
export const GET_IPHONES_USADOS = "GET_IPHONES_USADOS";
export const GET_DOLAR = "GET_DOLAR";
export const CHANGE_ADMIN = "CHANGE_ADMIN";
export const GET_DETALLE = "GET_DETALLE";
export const CLEAR_DETALLE = "CLEAR_DETALLE";
export const GET_COLORES = "GET_COLORES";
export const EDIT_IPHONE_ADD_COLOR = "EDIT_IPHONE_ADD_COLOR";
export const EDIT_IPHONE_CREATE_COLOR = "EDIT_IPHONE_CREATE_COLOR";

export function getIphones() {
  return function (dispatch) {
    return axios.get(IPHONE_URL).then((response) => {
      dispatch({
        type: GET_IPHONES,
        payload: response.data,
      });
    });
  };
}

export function getIphonesUsados() {
  return function (dispatch) {
    return axios.get(IPHONESUSADOS_URL).then((response) => {
      dispatch({
        type: GET_IPHONES_USADOS,
        payload: response.data,
      });
    });
  };
}

export function getDolar() {
  return function (dispatch) {
    return axios.get(DOLAR_URL).then((response) => {
      dispatch({
        type: GET_DOLAR,
        payload: response.data.dolar,
      });
    });
  };
}

export function changeAdmin() {
  return function (dispatch) {
    return dispatch({ type: CHANGE_ADMIN, payload: true });
  };
}

export function clearDetalle() {
  return function (dispatch) {
    return dispatch({ type: CLEAR_DETALLE });
  };
}

export function getDetalle(id) {
  return (dispatch) => {
    axios.get(DETAIL_URL + id).then((response) => {
      dispatch({ type: GET_DETALLE, payload: response.data });
    });
  };
}

export function getDetalleUsado(id) {
  return (dispatch) => {
    axios.get(DETAIL_USADO_URL + id).then((response) => {
      dispatch({ type: GET_DETALLE, payload: response.data });
    });
  };
}

export function getColors() {
  return function (dispatch) {
    return axios.get(COLORS_URL).then((response) => {
      dispatch({
        type: GET_COLORES,
        payload: response.data,
      });
    });
  };
}

export function editIphoneAddColor(visible) {
  return function (dispatch) {
    return dispatch({ type: EDIT_IPHONE_ADD_COLOR, payload: visible });
  };
}

export function editIphoneCreateColor(visible) {
  return function (dispatch) {
    return dispatch({ type: EDIT_IPHONE_CREATE_COLOR, payload: visible });
  };
}
