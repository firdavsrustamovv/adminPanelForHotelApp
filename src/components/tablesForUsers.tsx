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
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataUsers } from "../pages/usersPage";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const TablesForUsers = ({
  data,
  tableName,
  refetch,
  deletedTableName,
}: {
  data: DataUsers[];
  tableName: string[];
  deletedTableName: string;
  refetch: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [idToDelete, setidToDelete] = useState<number | null>(null);
  const handleClickOpen = (id: number) => {
    setidToDelete(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setidToDelete(null);
  };
  const deleteHandler = async (
    deletingTableName: string,
    idToDelete: number | null
  ) => {
    if (idToDelete === null) return;
    try {
      const { error } = await supabase
        .from(deletingTableName)
        .delete()
        .eq("id", idToDelete);

      if (!error) {
        console.log("Deleted successfully!");

        handleClose();
        refetch();
      } else {
        console.log(error.message);
      }
    } catch (error) {
      console.log("error deleting");
    }
  };
  return (
    <Container>
      <Stack>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "100%", overflowX: "auto" }}
        >
          <Table sx={{ minWidth: 600 }} aria-label="product table">
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
                  <TableCell key={index} sx={{ width: "5%" }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((product, idx) => (
                <TableRow
                  key={product.id}
                  onClick={() => handleClickOpen(product.id)}
                  sx={{
                    "&:hover": {
                      bgcolor: "#2e2e2e1a",
                    },
                  }}
                >
                  <TableCell align="center">{idx + 1}</TableCell>

                  <TableCell align="center">
                    {product.name || product.title}
                  </TableCell>
                  <TableCell align="center">
                    {product.email || product.infomation}
                  </TableCell>
                  <TableCell align="center">
                    {product.role || product.price} {product.price ? "$" : ""}
                  </TableCell>
                  <TableCell align="center">{<DeleteIcon />}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"DIQQAT"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Siz rostanham o'chirmoqchimisiz
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>YOQ</Button>
            <Button onClick={() => deleteHandler(deletedTableName, idToDelete)}>
              XA
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </Container>
  );
};

export default TablesForUsers;
