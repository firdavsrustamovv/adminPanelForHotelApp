import { Container, Stack, Typography, Box } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import Card from "../components/card";
import { useEffect, useState } from "react";

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
const AdminPanel = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [rooms, setRooms] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const fetchData = async (
    table: string,
    setter: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    try {
      const { data, error } = await supabase.from(table).select("*");
      if (error) {
        throw error;
      }
      setter(data || []);
    } catch (error) {
      console.log("Error message", error);
    }
  };
  useEffect(() => {
    fetchData("usersList", setUsers);
    fetchData("roomsForHotel", setRooms);
    fetchData("bookingRoom", setBookings);
  }, []);
  return (
    <div>
      <Container sx={{ mt: 1, mb: 5 }}>
        <Typography
          textAlign="center"
          variant="h4"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Hotel-app uchun Admin panel
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={5}
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            padding: 3,
            backgroundColor: "#f9f9f9",
          }}
        >
          <PieChart
            series={[
              {
                data: [
                  {
                    id: 0,
                    value: users?.length || 0,
                    label: "Foydalanuvchi soni",
                  },
                  { id: 1, value: rooms?.length || 0, label: "Xonalar soni" },
                  {
                    id: 2,
                    value: bookings?.length || 0,
                    label: "Bron qilingan xonalar",
                  },
                ],
              },
            ]}
            width={650}
            height={250}
          />
        </Box>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            flexWrap: "wrap",
            gap: 3,
            borderRadius: 2,
            boxShadow: 3,
            padding: 1,
            backgroundColor: "#f9f9f9",
          }}
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
