import React from "react";
import { Route, Routes } from "react-router-dom";  // Cambié 'Switch' por 'Routes'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Dashboard } from './pages/Dashboard';  
import Statements from "./pages/Statements";
import PaymentHistory from "./pages/PaymentHistory";
import PaymentMethods from "./pages/PaymentMethods";
import Profile from "./pages/Profile";
import Contracts from "./pages/Contracts";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="d-flex h-100">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <div className="container-fluid p-4">
          <Routes>  {/* Cambié 'Switch' por 'Routes' */}
            <Route path="/dashboard" element={<Dashboard />} />  {/* Usé 'element' en lugar de 'component' */}
            <Route path="/statements" element={<Statements />} />
            <Route path="/payment-history" element={<PaymentHistory />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
