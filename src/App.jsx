// src/App.jsx
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import "./index.css";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <main className="">
      <Helmet></Helmet>
      <Header />
      <Outlet />
    </main>
  );
};

export default App;
