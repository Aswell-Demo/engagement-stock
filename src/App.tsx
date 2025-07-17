// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AssignPointsPage from "./pages/AssignPointsPage";
import PointListPage from "./pages/PointListPage";
import EmployeeMasterPage from "./pages/EmployeeMasterPage";
import RequirementMasterPage from "./pages/RequirementMasterPage";
import RedeemPointsPage from "./pages/RedeemPointsPage";
import PointDetailTaro from "./pages/PointDetailTaro";
import PointDetailJiro from "./pages/PointDetailJiro";
import UserRedeemPointsPage from "./pages/RedeemPointsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                      element={<LoginPage />} />
        <Route path="/user"                  element={<UserDashboard />} />
        <Route path="/admin"                 element={<AdminDashboard />} />
        <Route path="/admin/assign"          element={<AssignPointsPage />} />
        <Route path="/admin/view-all"        element={<PointListPage />} />
        <Route path="/admin/employees"       element={<EmployeeMasterPage />} />
        <Route path="/admin/requirements"    element={<RequirementMasterPage />} />
        <Route path="/admin/redeempoints"    element={<RedeemPointsPage />}/>
        <Route path="/admin/PointDetailTaro" element={<PointDetailTaro />}/>
        <Route path="/admin/PointDetailJiro" element={<PointDetailJiro />}/>
        <Route path="/user/redeem"           element={<UserRedeemPointsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
