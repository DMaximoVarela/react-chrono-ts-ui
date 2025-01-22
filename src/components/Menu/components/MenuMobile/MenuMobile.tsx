/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Item, MenuMobileProps } from "../../types";
import { useLocation } from "wouter";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";

const MenuMobile: React.FC<MenuMobileProps> = ({ navItems, mobileItems }) => {
  const [_location, navigate] = useLocation();

  const handleClick = (item: Item) => {
    if (item.link) {
      if (item.link.startsWith("http://") || item.link.startsWith("https://")) {
        window.open(item.link, "_blank", "noopener,noreferrer");
      } else {
        navigate(item.link);
      }
    }
    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <React.Fragment>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            component="h6"
            fontWeight="bold"
            fontSize="20px"
            sx={{
              cursor: "pointer",
              ":hover": {
                color: (theme) => theme.palette.primary.main,
                transition: ".3s",
              },
            }}
          >
            React Chrono TS
          </Typography>
          <Box sx={{ display: "block", marginLeft: "auto" }}>
            {navItems.map((item, index) => (
              <IconButton
                key={index}
                sx={{
                  margin: "0px .25rem",
                  ":hover": {
                    color: (theme) => theme.palette.primary.main,
                    transition: ".3s",
                  },
                }}
                onClick={() => handleClick(item)}
              >
                <item.icon />
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bottom="0"
        width="80%"
        position="fixed"
        margin="1rem auto"
        left="0"
        right="0"
        borderRadius=".5rem"
        sx={{
          background: (theme) => theme.palette.background.paper,
          backdropFilter: "blur(10px)",
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".5rem",
          }}
        >
          {mobileItems.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ width: "36px" }}>
              <ListItemButton
                sx={{
                  borderRadius: ".25rem",
                  justifyContent: "center",
                  padding: "8px",
                  ":hover": {
                    color: (theme) => theme.palette.primary.main,
                    transition: ".3s",
                  },
                }}
                onClick={() => item.link && navigate(item.link)}
              >
                <item.icon />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </React.Fragment>
  );
};

export default MenuMobile;
