import { Container, Stack, Typography } from "@mui/material";
import Card from "../components/card";

const AdminPanel = () => {
  return (
    <div>
      <Container>
        <Typography mt={5} variant="h3">
          Hotel-app uchun Admin panel
        </Typography>

        <Stack
          mt={5}
          gap={3}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          sx={{ cursor: "pointer" }}
        >
          <Card title={"Foydalanuvchi ma'lumotlari"} />
          <Card title={"Xonalar haqida ma'lumot"} />
          <Card title={"Bron qilingan xonalar haqida ma'lumoti"} />
          <Card title={"Yangi xona qo'shish"} />
        </Stack>
      </Container>
    </div>
  );
};

export default AdminPanel;
