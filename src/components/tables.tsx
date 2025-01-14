import {
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { DataUsers } from "../pages/dashboard";

const Tables = ({ data }: { data: DataUsers[] }) => {
  return (
    <Container>
      <Stack>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "100%", overflowX: "auto" }}
        >
          <Table sx={{ minWidth: 1500 }} aria-label="product table">
            <TableHead sx={{ bgcolor: "#3E3E3E" }}>
              <TableRow
                sx={{
                  "& th": {
                    fontWeight: "bold",
                    color: "white",
                    padding: "16px 32px",
                    textAlign: "center",
                  },
                }}
              >
                <TableCell sx={{ width: "5%" }}>Id</TableCell>
                <TableCell sx={{ width: "10%" }} align="center">
                  Familya
                </TableCell>
                <TableCell sx={{ width: "10%" }} align="center">
                  Ism
                </TableCell>
                <TableCell sx={{ width: "20%" }} align="center">
                  Email
                </TableCell>
                <TableCell sx={{ width: "15%" }} align="center">
                  Telefon raqam
                </TableCell>
                <TableCell sx={{ width: "10%" }} align="center">
                  Xona nomi
                </TableCell>
                <TableCell sx={{ width: "10%" }} align="center">
                  Xona narxi
                </TableCell>
                <TableCell sx={{ width: "10%" }} align="center">
                  Tashrif buyuruvchilar
                </TableCell>
                <TableCell sx={{ width: "10%" }} align="center">
                  Kirish vaqti
                </TableCell>
                <TableCell sx={{ width: "10%" }} align="center">
                  Chiqish vaqti
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{
                    "&:hover": {
                      bgcolor: "#2e2e2e1a",
                    },
                  }}
                >
                  <TableCell align="center">{product.id}</TableCell>
                  <TableCell align="center">{product.lastName}</TableCell>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.email}</TableCell>
                  <TableCell align="center">{product.phoneNumber}</TableCell>
                  <TableCell align="center">{product.room_name}</TableCell>
                  <TableCell align="center">{product.price}$</TableCell>
                  <TableCell align="center">{product.totalGuest}</TableCell>
                  <TableCell align="center">{product.checkIn}</TableCell>
                  <TableCell align="center">{product.checkOut}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Container>
  );
};

export default Tables;
