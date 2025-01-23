import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import AdminPanel from "./pages/adminPanel";
import SideBar from "./components/sideBar";
import UsersPage from "./pages/usersPage";
import Rooms from "./pages/rooms";
import AddRooms from "./pages/addRooms";
import { Stack } from "@mui/material";
import BookedRooms from "./pages/dashboard";
import Login from "./pages/login";

const App: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname !== "/login";
  const userEmail = localStorage.getItem("email");

  return (
    <Stack flexDirection={"row"} justifyContent={"center"}>
      {isLoginPage && <SideBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        {userEmail ? (
          <>
            <Route path="/" element={<AdminPanel />} />
            <Route path="/booked" element={<BookedRooms />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/addrooms" element={<AddRooms />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Stack>
  );
};

export default App;
