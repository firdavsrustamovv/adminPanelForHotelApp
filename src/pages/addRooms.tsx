import { Button, Stack, Typography, Snackbar, Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { useState } from "react";

interface IFormInput {
  xonaNomi: string;
  malumot: string;
  narx: string;
  rasmHavolasi: string;
  xajmi: string;
  yotoqlarSoni: string;
}

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const AddRooms = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const handleCloseSnackbar = () => setOpenSnackbar(false);
  const handleCloseErrorSnackbar = () => setErrorSnackbar(false);
  const onSubmit: SubmitHandler<IFormInput> = async (val) => {
    try {
      const { data, error } = await supabase
        .from("roomsForHotel")
        .insert([
          {
            title: val.xonaNomi,
            infomation: val.malumot,
            price: val.narx,
            size: val.xajmi,
            beds: val.yotoqlarSoni,
            img: val.rasmHavolasi,
          },
        ])
        .select("*");
      if (error) throw error;
      setOpenSnackbar(true);
      reset();
    } catch (error) {
      console.error(error);
      setErrorSnackbar(true);
    }
  };
  return (
    <div>
      <Typography variant="h3" mt={1} textAlign={"center"}>
        Xona qo'shish
      </Typography>
      <Stack
        sx={{ width: { xs: "100%", md: "800px" }, maxWidth: "800px", mt: 5 }}
        direction={"column"}
        gap={3}
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextField
          fullWidth
          label="Xona Nomi"
          {...register("xonaNomi", { required: true })}
          id="xonaNomi"
        />
        <TextField
          fullWidth
          label="Ma'lumot"
          {...register("malumot", { required: true })}
          id="malumot"
        />
        <TextField
          fullWidth
          label="Narx"
          {...register("narx", { required: true })}
          id="narx"
        />
        <TextField
          fullWidth
          label="Rasm havolasi"
          {...register("rasmHavolasi", { required: true })}
          id="rasmHavolasi"
        />
        <Stack direction={"row"} gap={2}>
          <TextField
            fullWidth
            label="Xajmi"
            {...register("xajmi", { required: true })}
            id="xajmi"
          />
          <TextField
            fullWidth
            label="Yotoqlar soni"
            {...register("yotoqlarSoni", { required: true })}
            id="yotoqlarSoni"
          />
        </Stack>
        <Button type="submit" variant="contained">
          Qo'shish
        </Button>
      </Stack>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Xona muvaffaqiyatli qo'shildi!
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseErrorSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseErrorSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          Xona qo'shishda xatolik yuz berdi!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddRooms;
