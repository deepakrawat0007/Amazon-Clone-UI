const initialState = {
    error: null,
    loading: false,
    success: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER_SUCCESS":
            return { ...state, success: true };
        case "REGISTER_FAILED":
            return { ...state, error: action.payload };
        case "CLEAR_ERROR":
            return { ...state, error: null };
        default:
            return state;
    }
};

export default authReducer;
