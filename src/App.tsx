import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import {Calculator, History, Reports, AdminPanel} from "./pages"
import {Navbar} from "./components/Navbar.tsx";


function App() {

  return (
    <div>
        <Navbar/>
        <Container >
            <Routes>
                <Route path="/" element={<Calculator/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/reports" element={<Reports/>}/>
                <Route path="/admin" element={<AdminPanel/>}/>
            </Routes>
        </Container>

    </div>

  )
}

export default App
