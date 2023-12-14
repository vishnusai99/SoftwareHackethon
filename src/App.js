
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { ChakraProvider, theme } from "@chakra-ui/react"
import { Helmet } from "react-helmet";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Courses from "./components/Courses";

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
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/courses' element={<Courses />} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </React.StrictMode>
      </ChakraProvider>
    </div>
  );
}

export default App;
