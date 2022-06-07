import { createStore } from "redux";

const initialState = {
    users: [],
    loggedInUser: null,
    cart: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Signup":
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        case "Login":
            return {
                ...state,
                user: action.payload
            }
        case "Logout":
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
}

export default createStore(reducer);