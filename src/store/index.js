import { configureStore } from "@reduxjs/toolkit";
import forms from "./useForm";


const store = configureStore({
    reducer:{ formsSubmit:forms }
})

export default store;