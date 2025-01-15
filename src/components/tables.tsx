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

const Tables = ({
  data,
  tableName,
}: {
  data: DataUsers[];
  tableName: string[];
}) => {
  return (
    <Container>
      <Stack>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "100%", overflowX: "auto" }}
        >
          <Table sx={{ minWidth: 1700 }} aria-label="product table">
            <TableHead sx={{ bgcolor: "#3E3E3E" }}>
              <TableRow
                sx={{
                  "& th": {
                    fontWeight: "bold",
                    color: "white",
                    padding: "10px 32px",
                    textAlign: "center",
                  },
                }}
              >
                {tableName.map((header, index) => (
                  <TableCell key={index} sx={{ width: "10%" }}>
                    {header}
                  </TableCell>
                ))}
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
