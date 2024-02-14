import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/rootReducer";



const store = configureStore({
    reducer: {
      rootTest: rootReducer,
    },
  });
  
  export default store;