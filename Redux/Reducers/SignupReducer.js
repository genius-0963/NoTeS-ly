const initialState = {}

//set displayName
const SignupReducer = (state = initialState, action) => {
    switch(action.type){
        case "AUTHENTICATE_SIGNUP":
            return null
        case 'SIGN_OUT':
            return null
        case 'PASSWORD_RESET':
            return null
        case "AUTHENTICATE_LOGIN":
            return null
        default: return initialState
    }
};

export default SignupReducer;