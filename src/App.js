import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ViewTask from './pages/ViewTask';

function App() {  
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/view-task/:id" element={<ViewTask />} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
