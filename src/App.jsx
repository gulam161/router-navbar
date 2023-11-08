import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import User from "./component/User";
import Search from "./component/Search";
import Error from "./component/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  const Name = () => {
    return <h1> I am name page</h1>;
  };
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service name="Service" />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/contact/name" element={<Name />} />
        <Route exact path="/user/:fname/:lname" element={<User />} />
        <Route exact path="search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
