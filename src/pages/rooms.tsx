import { Container, Stack, Typography } from "@mui/material";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import TablesForUsers from "../components/tablesForUsers";
import { DataUsers } from "../pages/usersPage";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { RootState } from "../store/store";
import { startLoading, stopLoading } from "../slice/loaderSlice";

const tableName = ["No", "Xona nomi", "Ma'lumot", "Narx", `O'chirish`];
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
const Rooms = () => {
  const [roomsInformation, setRoomsInformation] = useState<DataUsers[]>([]);
  const loading = useSelector((state: RootState) => state.loader.isLoading);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      dispatch(startLoading());
      const { data, error } = await supabase.from("roomsForHotel").select("*");
      dispatch(stopLoading());
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
      {loading && <Loader />}
      <Stack direction={"column"} gap={"20px"} mt={5}>
        <Typography textAlign={"center"} variant="h2">
          Xonalar
        </Typography>
        <Stack>
          <TablesForUsers
            data={roomsInformation}
            tableName={tableName}
            refetch={fetchData}
            deletedTableName={"roomsForHotel"}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Rooms;
