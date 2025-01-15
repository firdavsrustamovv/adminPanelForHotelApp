import { Container, Stack, Typography } from "@mui/material";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import TablesForUsers from "../components/tablesForUsers";

export interface DataUsers {
  id: number;
  name: string;
  email: string;
  role: string;
  title?: string;
  infomation?: string;
  price?: string;
}
const tableName = ["Id", "Ism", "Email", "Role"];
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
const UsersPage = () => {
  const [usersInformation, setUsersInformation] = useState<DataUsers[]>([]);
  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("usersList").select("*");
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
      <Stack direction={"column"} gap={"20px"} mt={5}>
        <Typography textAlign={"center"} variant="h2">
          Users List
        </Typography>
        <Stack>
          <TablesForUsers data={usersInformation} tableName={tableName} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default UsersPage;
