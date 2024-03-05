import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Estimate, History, Reports, AdminPanel } from "./pages";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import "./styles/index.css";
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
