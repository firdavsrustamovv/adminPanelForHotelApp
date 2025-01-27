import { Container, Stack, Typography } from "@mui/material";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import TablesForUsers from "../components/tablesForUsers";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { RootState } from "../store/store";
import { startLoading, stopLoading } from "../slice/loaderSlice";

export interface DataUsers {
  id: number;
  name: string;
  email: string;
  role: string;
  title?: string;
  infomation?: string;
  price?: string;
}
const tableName = ["No", "Ism", "Email", "Role"];

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
const UsersPage = () => {
  const [usersInformation, setUsersInformation] = useState<DataUsers[]>([]);
  const loading = useSelector((state: RootState) => state.loader.isLoading);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      dispatch(startLoading());
      const { data, error } = await supabase.from("usersList").select("*");
      dispatch(stopLoading());
      if (error) {
        throw error;
      }
      setUsersInformation(data || []);
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
          Foydalanuvchilar
        </Typography>
        <Stack>
          <TablesForUsers data={usersInformation} tableName={tableName} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default UsersPage;
