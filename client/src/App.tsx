import UserLogin from "./pages/UserLogin"
import UserRegister from "./pages/UserRegister"
import ProtectedRoutes from "./routes/ProtectedRoutes"
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AllCoursesPage from "./pages/AllCoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => Boolean(localStorage.getItem("token")));

  useEffect(() => {
    const onStorage = () => setIsLoggedIn(Boolean(localStorage.getItem("token")));
    // Listen for storage changes (in case multiple tabs)
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);


  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar onMenuClick={() => setSidebarOpen(true)} />}
      {isLoggedIn && (
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} isLoggedIn={isLoggedIn} />
      )}
      
      <main>
        <Routes>
          <Route path="/userLogin" element={<UserLogin onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/userRegister" element={<UserRegister />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="*" element={<UserLogin />} />
          
         <Route path="/courses/:section" element={<AllCoursesPage />} />
         <Route path="/course/:id" element={<CourseDetailPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
