import * as React from "react"
import {  ChakraProvider, theme } from "@chakra-ui/react"
import { DataTable } from "./components/DataTable";
import { Column } from "react-table";
//import  Menu  from "./components/menu/menu"
import  Menu2  from "./components/menu/menu2"
//import "./components/menu/menu.css"
import { Route, Routes } from "react-router-dom";
import Car from "./pages/List_Routhe";
import LandingPage from "./pages/LandingPage";
import AddCountry from "./pages/AddCountry";
import AddNeighbours from "./pages/AddNeighbours";
import AddSettlement from "./pages/AddSettlement";
import AddAirport from "./pages/AddAirport";
import AddStation from "./pages/AddStation";
import AddFlight from "./pages/AddFlight";
import AddLine from "./pages/AddLine";

const App = () => {

  

  return(    
  
    <ChakraProvider theme={theme}>
        <Menu2 />
        <Routes>
        <Route   path="/" element={<LandingPage/>} />
          <Route path="/addcountry" element={<AddCountry/>} />
          <Route path="/addneighbours" element={<AddNeighbours/>} />
          <Route path="/addsettlement" element={<AddSettlement/>} />
          <Route path="/addairport" element={<AddAirport/>} />
          <Route path="/addstation" element={<AddStation/>} />
          <Route path="/addflight" element={<AddFlight/>} />
          <Route path="/addline" element={<AddLine/>} />
        </Routes>
      </ChakraProvider>
    
  );
};

export default App;
