import { useState } from "react";
import {
  useGetAlbumsQuery,
  useDeleteAlbumMutation,
} from "../../features/albums/albumsApi";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";

interface Album {
  id: string;
  title: string;
  description: string;
}

const Albums = () => {
  const {
    data: albums = [],
    isLoading,
    isError,
    error,
  } = useGetAlbumsQuery(undefined);
  const [deleteAlbum] = useDeleteAlbumMutation();
  const [newAlbum, setNewAlbum] = useState({ title: "", description: "" });

  if (isLoading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (isError) {
    return (
      <Alert severity="error">
        Ошибка при загрузке альбомов: {error?.toString()}
      </Alert>
    );
  }

  return (
    <div className="albums-container">
      <h2>Управление альбомами</h2>

      <div className="add-album">
        <TextField
          label="Название альбома"
          value={newAlbum.title}
          onChange={(e) => setNewAlbum({ ...newAlbum, title: e.target.value })}
        />
        <TextField
          label="Описание альбома"
          value={newAlbum.description}
          onChange={(e) =>
            setNewAlbum({ ...newAlbum, description: e.target.value })
          }
        />
        <Button variant="contained">Добавить</Button>
      </div>

      <h3>Созданные альбомы</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Описание</TableCell>
              <TableCell>Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(albums as Album[]).map((album: Album) => (
              <TableRow key={album.id}>
                <TableCell>{album.title}</TableCell>
                <TableCell>{album.description}</TableCell>
                <TableCell>
                  <Button color="error" onClick={() => deleteAlbum(album.id)}>
                    Удалить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Albums;
