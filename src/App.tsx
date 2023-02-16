import "./App.css";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Component/NavbarComponent";
import Homepage from "./Component/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailspage from "./Component/Detailspage";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Container>
        <h1 className="my-4  ">
          {" "}
          Spaceflight<span style={{ color: "#b33030" }}>NewsArticles</span>
        </h1>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<Detailspage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
