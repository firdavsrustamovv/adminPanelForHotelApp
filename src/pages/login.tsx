import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
  const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
  const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("usersList")
        .select("*")
        .eq("email", email)
        .single();

      if (error || !data) {
        setErrorMessage("Invalid email or password");
        return;
      }
      if (data.password === password) {
        if (data.role === "admin") {
          navigate("/");
          localStorage.setItem("email", email);
        } else {
          setErrorMessage("You do not have admin access.");
        }
      } else {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("email")) {
      navigate("/");
    }
  }, []);
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 20 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Kirish ("Faqat adminlar uchun")
        </Typography>
        {errorMessage && (
          <Typography color="error" textAlign="center" gutterBottom>
            {errorMessage}
          </Typography>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Parol"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Kirish
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
