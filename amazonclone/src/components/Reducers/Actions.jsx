import Axios from 'axios';

const API = process.env.REACT_APP_API || "https://laundrycart-api.onrender.com";

export const register = (data) => async (dispatch) => {
    try {
        const res = await Axios.post(API + "/register", data);
        dispatch({ type: "REGISTER_SUCCESS" });
    } catch (error) {
        dispatch({ type: "REGISTER_FAILED", payload: error.response.data });
    }
};

export const clearError = () => (dispatch) => {
    dispatch({ type: "CLEAR_ERROR" });
};
