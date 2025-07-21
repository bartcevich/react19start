import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Grid, Paper, Typography } from "@mui/material";
import {
  List,
  ListItem,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  CloudUpload,
  InsertDriveFile,
  Image,
  Folder,
  ViewList,
  Apps,
} from "@mui/icons-material";

const FileStorage = () => {
  type FileType = "image" | "document" | "other";
  interface FileItem {
    name: string;
    size: string;
    type: FileType;
  }

  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [files, setFiles] = useState<FileItem[]>([
    { name: "40маг...", size: "4.2 MB", type: "document" },
    { name: "10solid...", size: "10.5 MB", type: "document" },
    { name: "50Jpg", size: "2.1 MB", type: "image" },
  ]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const newFiles: FileItem[] = acceptedFiles.map((file) => ({
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
        type: file.type.startsWith("image/")
          ? "image"
          : [".pdf", ".doc", ".docx"].some((ext) => file.name.endsWith(ext))
          ? "document"
          : "other",
      }));
      setFiles([...files, ...newFiles]);
    },
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
      "application/*": [".pdf", ".doc", ".docx"],
    },
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <Image color="primary" />;
      case "document":
        return <InsertDriveFile color="secondary" />;
      default:
        return <Folder color="action" />;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h5">Файловое хранилище</Typography>
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={(_, newMode) => newMode && setViewMode(newMode)}
          aria-label="view mode"
        >
          <ToggleButton value="list" aria-label="list view">
            <ViewList />
          </ToggleButton>
          <ToggleButton value="grid" aria-label="grid view">
            <Apps />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #ccc",
          borderRadius: "4px",
          padding: "40px",
          textAlign: "center",
          marginBottom: "20px",
          backgroundColor: isDragActive ? "#f0f0f0" : "white",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        <CloudUpload fontSize="large" color="action" />
        <Typography variant="body1">
          {isDragActive
            ? "Отпустите файлы для загрузки"
            : "Перетащите файлы сюда для загрузки"}
        </Typography>
      </div>

      {viewMode === "list" ? (
        <List>
          {files.map((file, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={file.name}
                secondary={file.size}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              />
              {getFileIcon(file.type)}
            </ListItem>
          ))}
        </List>
      ) : (
        <Grid container spacing={2}>
          {files.map((file, index) => (
            <div key={index}>
              <Paper style={{ padding: "16px", textAlign: "center" }}>
                {getFileIcon(file.type)}
                <Typography variant="subtitle1" noWrap>
                  {file.name}
                </Typography>
                <Typography variant="caption">{file.size}</Typography>
              </Paper>
            </div>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default FileStorage;
