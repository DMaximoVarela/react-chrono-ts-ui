import React from "react";
import { Item, MenuItemProps } from "../../types";
import { useLocation } from "wouter";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <ListItem
      key={item.id}
      disablePadding
      sx={{
        marginTop: "1rem",
        ":hover": {
          color: (theme) => `${theme.palette.primary.main} !important`,
          transition: ".3s",
        },
      }}
    >
      <ListItemButton
        sx={{
          padding: { xs: ".25rem", md: "auto" },
        }}
        onClick={() => handleClick(item)}
      >
        <ListItemIcon
          sx={{
            justifyContent: "center",
            color: "inherit",
          }}
        >
          <item.icon />
        </ListItemIcon>
        {!isTablet && <ListItemText primary={item.label} />}
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItem;
