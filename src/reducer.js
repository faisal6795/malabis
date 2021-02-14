import { ACTION, initialData } from "./constants";

const initialState = getData() || initialData;

function getData() {
    return JSON.parse(localStorage.getItem('saree'));
}

function setData(data) {
    localStorage.setItem('saree', JSON.stringify(data));
}

export default function reducer(state = initialState, action) {
    function performAction(state, action) {
        switch (action.type) {
            case ACTION.SET_FAVOURITE:
                return { ...state, products: state.products.map(item => item.id === action.value.id ? { ...item, isFav: action.value.isFav } : item) };
            case ACTION.ADD_TO_CART:
                return { ...state, products: state.products.map(item => item.id === action.value.id ? { ...item, isCart: action.value.isCart } : item) };
            case ACTION.CHANGE_QUANTITY:
                return { ...state, products: state.products.map(item => item.id === action.value.id ? { ...item, quantity: action.value.quantity } : item) };
            case ACTION.SET_CURRENT:
                return { ...state, currentProduct: action.value };
            case ACTION.SAVE_FIRST_NAME:
                return { ...state, userData: { ...state.userData, firstName: action.value } };
            case ACTION.SAVE_LAST_NAME:
                return { ...state, userData: { ...state.userData, lastName: action.value } };
            case ACTION.SAVE_PHONE:
                return { ...state, userData: { ...state.userData, phone: action.value } };
            case ACTION.SAVE_ADDRESS:
                return { ...state, userData: { ...state.userData, address: action.value } };
            default:
                return state;
        }
    }
    const updatedData = performAction(state, action);
    setData(updatedData);
    return updatedData;
}