
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
import Landing from "./components/Landing";

function App() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Course Compass</title>
        <link rel="canonical" href="http://localhost:3004 " />
        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
    <dotlottie-player src="https://lottie.host/43df6a7d-7fb9-44bb-88f1-e9240fe08414/URlD21Py1T.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
      </Helmet>
      <ChakraProvider theme={theme}>
        <React.StrictMode>
          <ThemeProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/landing' element={<Landing />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/home' element={<Home />} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </React.StrictMode>
      </ChakraProvider>
    </div>
  );
}

export default App;
