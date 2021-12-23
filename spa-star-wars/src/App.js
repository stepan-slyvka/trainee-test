import { Route, Routes, Navigate } from "react-router-dom";
import { Fragment } from "react";

import Home from "./pages/Home";
import Table from "./pages/Table/Table";
import NotFound from "./pages/NotFound";
import Navigation from "./components/layout/Navigation";

function App() {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/table" element={<Table />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
