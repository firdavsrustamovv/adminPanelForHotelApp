import { Container, Stack, Typography } from "@mui/material";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import TablesForUsers from "../components/tablesForUsers";
import { DataUsers } from "../pages/usersPage";

const tableName = ["Id", "Xona nomi", "Ma'lumot", "Narx"];
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
const Rooms = () => {
  const [roomsInformation, setRoomsInformation] = useState<DataUsers[]>([]);
  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("roomsForHotel").select("*");
      if (error) {
        throw error;
      }
      setRoomsInformation(data || []);
    } catch (error) {
      console.log("Error message", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      <Stack direction={"column"} gap={"20px"} mt={5}>
        <Typography textAlign={"center"} variant="h2">
          Rooms List
        </Typography>
        <Stack>
          <TablesForUsers data={roomsInformation} tableName={tableName} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Rooms;
