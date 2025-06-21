import { Routes, Route } from 'react-router-dom';
import Home from "@/pages/Home/Home.jsx";
import Header from "@components/layout/Header/Header.jsx";


function App() {
  return (
    <div>
        <Header />
        <main>
            <Routes>
            <Route path="/" element={<Home />} />
            </Routes>
        </main>
    </div>
      
  );
}

export default App;