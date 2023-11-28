// slices/authenticationSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../firebase'; // Assurez-vous que le chemin est correct

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      console.log("state.user ", state.user)
      console.log("action.payload ", action.payload)
      state.isAuthenticated = !!action.payload;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
});

export const { setUser, setError, clearError } = authenticationSlice.actions;


// Fonction pour se connecter
export const login = (email, password) => async (dispatch) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
  
  // Fonction pour se déconnecter
  export const logout = () => async (dispatch) => {
    try {
      await auth.signOut();
      dispatch(setUser(null));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
  
  export default authenticationSlice.reducer;