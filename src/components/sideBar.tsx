import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Dashboard as DashboardIcon,
  Group as CustomersIcon,
  Category as CategoryIcon,
  ViewList as ProductSizesIcon,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Band xonalar", icon: <DashboardIcon />, path: "/booked" },
    { text: "Foydalanuvchilar", icon: <CustomersIcon />, path: "/users" },
    { text: "Xonalar", icon: <ProductSizesIcon />, path: "/rooms" },
    { text: "Xona qo'shish", icon: <CategoryIcon />, path: "/addRooms" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          backgroundColor: "#3E3E3E",
          color: "#FFF",
        },
      }}
    >
      <div style={{ padding: "16px", textAlign: "center" }}>
        <Avatar
          sx={{ width: 80, height: 80, margin: "0 auto", bgcolor: "#5A5A5A" }}
        />
        <Typography variant="h6" style={{ marginTop: "8px" }}>
          Salom, {"Admin"}
        </Typography>
      </div>
      <Stack>
        <Button
          variant="contained"
          onClick={handleLogout}
          sx={{ maxWidth: "300px", width: "50%", margin: "0 auto" }}
        >
          <Stack direction={"row"} gap={1}>
            <LogoutIcon />
            Chiqish
          </Stack>
        </Button>
      </Stack>
      <List>
        {menuItems.map((item) => (
          <ListItem
            component={Button}
            key={item.text}
            onClick={() => navigate(item.path)}
            sx={{
              justifyContent: "flex-start",
              marginTop: "10px",
              backgroundColor:
                location.pathname === item.path
                  ? "rgba(255, 255, 255, 0.2)"
                  : "inherit",
              ":hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              color: location.pathname === item.path ? "#FFF" : "#BBB",
            }}
          >
            <ListItemIcon
              style={{
                color: location.pathname === item.path ? "#FFF" : "#BBB",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
