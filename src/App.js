
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { ChakraProvider, theme } from "@chakra-ui/react"
import { Helmet } from "react-helmet";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Header from "./components/Header";

function App() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Course Recommendor</title>
        <link rel="canonical" href="http://localhost:3004 " />
      </Helmet>
      <ChakraProvider theme={theme}>
        <React.StrictMode>
          <ThemeProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </React.StrictMode>
      </ChakraProvider>
    </div>
  );
}

export default App;
