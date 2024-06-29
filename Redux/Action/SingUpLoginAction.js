import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
  } from "firebase/auth";
  import app from "../../firebaseConfig";
  
  const auth = getAuth(app)
  
  export const authenticationSignup = (data) => {
    return async (dispatch) => {
              authenticate = data;
              createUserWithEmailAndPassword(
                auth,
                authenticate.emailID,
                authenticate.password
              )
                .then((userCredential) => {
                  console.log(userCredential.user);
                  dispatch({ type: "AUTHENTICATE_SIGNUP", payload: '' });
                })
                .catch((error) => {
                  console.log(error.code, error.message);
                });
    }
  };
  
  export const authenticationLogin = (data) => {
    return async (dispatch) => {
          authenticate = data;
          signInWithEmailAndPassword(
            auth,
            authenticate.emailID,
            authenticate.password
          )
            .then((userCredential) => {
              const user = userCredential.user;
              console.log("logged in");
              dispatch({ type: "AUTHENTICATE_LOGIN", payload: ''});
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(error.code, error.message);
            });
    }
  };
  
  export const passwordReset = (data) => {
    return async (dispatch) => {
      authenticate = data
      sendPasswordResetEmail(auth, authenticate.value)
      .then(() => {
          console.log("sent");
          dispatch({type: 'PASSWORD_RESET'})
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
      });
    }
  };
  
  export const signOutAcc = () => {
    return async (dispatch) => {
      signOut(auth).then(() => {
          console.log('sign out successful')
          dispatch({type: 'SIGN_OUT', payload:''})
      }).catch(error => {
          console.log('signout unsuccessful', error)
      })
    };
  };