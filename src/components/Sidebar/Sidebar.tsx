// import React from 'react';
import { Link } from "react-router-dom";
import { Button, List, ListItem } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <ListItem>
          <Button
            component={Link}
            to="/storage"
            fullWidth
            sx={{ justifyContent: "flex-start" }}
          >
            Хранилище
          </Button>
        </ListItem>
        <ListItem>
          <Button
            component={Link}
            to="/storage"
            fullWidth
            sx={{ justifyContent: "flex-start" }}
          >
            Темы
          </Button>
        </ListItem>
        <ListItem>
          <Button
            component={Link}
            to="/albums"
            fullWidth
            sx={{ justifyContent: "flex-start" }}
          >
            Альбомы
          </Button>
        </ListItem>
        <ListItem>
          <Button
            component={Link}
            to="/storage"
            fullWidth
            sx={{ justifyContent: "flex-start" }}
          >
            Запись экрана
          </Button>
        </ListItem>
      </List>
      <div className="logout">
        <ListItem>
          <Button
            component={Link}
            to="/storage"
            fullWidth
            sx={{ justifyContent: "flex-start" }}
          >
            Выйти
          </Button>
        </ListItem>
      </div>
    </div>
  );
};

export default Sidebar;
