import Tables from "../components/tables";
import { Container, Stack, Typography } from "@mui/material";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { RootState } from "../store/store";
import { startLoading, stopLoading } from "../slice/loaderSlice";
import { bookingRoomData } from "../slice/bookingSlice";

export interface DataUsers {
  id: number;
  name?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  price?: string;
  checkIn?: string;
  checkOut?: string;
  totalRoom?: string;
  totalGuest?: string;
  codeRefferal?: string;
  room_name?: string;
}
const tableName = [
  "Id",
  "Familya",
  "Ism",
  "Email",
  "Telefon raqam",
  "Xona nomi",
  "Xona narxi",
  "Tashrif buyuruvchilar",
  "Kirish vaqti",
  "Chiqish vaqti",
  `O'chirish`,
];

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
const BookedRooms = () => {
  const loading = useSelector((state: RootState) => state.loader.isLoading);
  const bookingData = useSelector(
    (state: RootState) => state.booked.bookingRoomData
  );
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      dispatch(startLoading());
      const { data, error } = await supabase.from("bookingRoom").select("*");
      dispatch(stopLoading());
      if (error) {
        throw error;
      }
      // setUsersData(data || []);
      dispatch(bookingRoomData(data || []));
    } catch (error) {
      console.log("Error message", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [dispatch]);
  return (
    <Container>
      {loading && <Loader />}
      <Stack direction={"column"} gap={"20px"} mt={5}>
        <Typography textAlign={"center"} variant="h2">
          Band Xonalar
        </Typography>
        <Stack>
          <Tables
            data={bookingData}
            tableName={tableName}
            refetch={fetchData}
            deletedTableName={"bookingRoom"}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default BookedRooms;
