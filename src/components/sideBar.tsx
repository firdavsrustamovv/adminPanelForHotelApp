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
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Group as CustomersIcon,
  Category as CategoryIcon,
  ViewList as ProductSizesIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const menuItems = [
    { text: "Band xonalar", icon: <DashboardIcon />, path: "/booked" },
    { text: "Foydalanuvchilar", icon: <CustomersIcon />, path: "/users" },
    { text: "Xonalar", icon: <ProductSizesIcon />, path: "/rooms" },
    { text: "Xona qo'shish", icon: <CategoryIcon />, path: "/addRooms" },
  ];

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
      <List>
        {menuItems.map((item) => (
          <ListItem
            component={Button}
            key={item.text}
            onClick={() => navigate(item.path)}
            sx={{
              ":hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            <ListItemIcon style={{ color: "#FFF" }}>{item.icon}</ListItemIcon>
            <ListItemText style={{ color: "#FFF" }}>{item.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
