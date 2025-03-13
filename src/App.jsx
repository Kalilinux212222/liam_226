// After (React Router v6)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Login from './components/login';
import Newest from './components/Newest'
import Col from './components/Collections';
import Popular from './components/Popular'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Nav/>} />
                <Route path="/newest" element={<Newest/>} />
                <Route path="/popular" element={<Popular/>} />
                <Route path="/col" element={<Col/>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}
export default App