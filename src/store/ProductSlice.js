import React from 'react'
import {createSlice} from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
const initialState={
    data:[],
    status:"idle"
};
const productSlice =createSlice({
    name:"Products",
    initialState,
    reducers:{
       // fetchProducts(state,action){
        //    state.data=action.payload;
        },
        extraReducers:(builder)=>{
           builder
           .addCase(getProducts.pending,(state,action)=>{
            state.status='loading';

           })
            .addCase(getProducts.fulfilled,(state,action)=>{
                state.data=action.payload;
                state.status='idle';
            })
            .addCase(getProducts.rejected,(state,action)=>{
                state.status='error';
            })

        }
    }
)

export const {fetchProducts}=productSlice.actions;
export default productSlice.reducer;
export const getProducts =createAsyncThunk('products/get',async ()=>{
    const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        return result;
})




    


