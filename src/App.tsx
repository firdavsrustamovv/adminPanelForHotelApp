import { Route, Routes } from "react-router-dom";
import AdminPanel from "./pages/adminPanel";
import SideBar from "./components/sideBar";
import UsersPage from "./pages/usersPage";
import Rooms from "./pages/rooms";
import AddRooms from "./pages/addRooms";
import { Stack } from "@mui/material";
import BookedRooms from "./pages/dashboard";

const App: React.FC = () => {
  return (
    <Stack flexDirection={"row"} justifyContent={"center"}>
      <SideBar />
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="booked" element={<BookedRooms />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="addrooms" element={<AddRooms />} />
      </Routes>
    </Stack>
  );
};

export default App;
