import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice(
    {
        name: "alBum",
        initialState:{albumId:null},
        reducers:{
            fixAlbumId:(state,action)=>{
                state.albumId=action.payload;
            }
        }
    }
)

export const albumReducer= albumSlice.reducer;
export const {fixAlbumId} = albumSlice.actions;
export const selectAlbumId = (state) => state.alBum;