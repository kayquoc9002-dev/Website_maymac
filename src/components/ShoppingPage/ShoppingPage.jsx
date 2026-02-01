import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Cartegory from "./Cartegory/Cartegory";
import ListProduct from "./ListProduct/ListProduct";
// import {useState} from "react";
function ShoppingPage() {

  return (
    <>
      <Header />
      <Cartegory />
      <ListProduct />
      
    </>
  );
}
export default ShoppingPage;
