import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AllCoursesPage from "./pages/AllCoursesPage";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/:section" element={<AllCoursesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
