import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./styles/index.css";
import { AdminPanel, Estimate, Reports, History } from "../pages";
import { Navbar } from "../components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Estimate />} />
          <Route path="/history" element={<History />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
