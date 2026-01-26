"use client";
import { createSlice } from "@reduxjs/toolkit";

import Cookies from "js-cookie";

const initialState = {
  
  dataTheme: Cookies.get("dataTheme") || "light",
  dataLoader: Cookies.get("dataLoader") || "enable",
  isRtl: Cookies.get("rtl") || false,
};

const themeSettingSlice = createSlice({
  name: "themeSetting",
  initialState,
  reducers: {
   
    setDataTheme: (state, action) => {
      document.documentElement.setAttribute("class", action.payload);
      state.dataTheme = action.payload;
      Cookies.set("dataTheme", action.payload);
    },
    
    setLoader: (state, action) => {
      state.dataLoader = action.payload;
      Cookies.set("dataLoader", action.payload);
      document.documentElement.setAttribute("data-loader", action.payload);
    },
    setRtl: (state, action) => {
      state.isRtl = action.payload;
      Cookies.set("rtl", action.payload);
      document.body.setAttribute("class", action.payload);
    },
    resetAllMode: (state: any) => {

      state.dataTheme = "light";
      state.dataLoader = "enable";
      state.isRtl=""
      Cookies.set("rtl", "");
    },
  },
});

export const {
  resetAllMode,
  setDataTheme,
  setLoader,
  setRtl,
} = themeSettingSlice.actions;

export default themeSettingSlice.reducer;



