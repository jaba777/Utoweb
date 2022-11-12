import { createSlice } from "@reduxjs/toolkit";

const formsSlice = createSlice({
    name: 'forms',
    initialState: [],
    reducers: {
        addFormHandler(state,action){
            const NewForm={
                id: Math.random(),
                name: action.payload.name,
                surname: action.payload.surname,
                email: action.payload.email,
                password: action.payload.password
            }

            state.push(NewForm);
            
        }
    }
})



export const formSubmitSlice=formsSlice.actions;


export default formsSlice.reducer;