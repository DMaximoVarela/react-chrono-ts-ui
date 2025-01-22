import React from "react";
import { Drawer, Grid2, List, Typography, useMediaQuery } from "@mui/material";
import MenuItem from "./components/MenuItem/MenuItem";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import { MenuProps } from "./types";
import { useLocation } from "wouter";

const Menu: React.FC<MenuProps> = ({ header, footer, mobileConfig }) => {
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_location, navigate] = useLocation();

  return (
    <React.Fragment>
      <Drawer
        variant={"permanent"}
        anchor="left"
        open={true}
        sx={{ flexShrink: 0 }}
        PaperProps={{
          sx: {
            background: (theme) => theme.palette.background.paper,
            width: { xs: "72px", md: "240px" },
            display: { xs: "none", sm: "flex" },
          },
        }}
      >
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
            width: "100%",
            padding: 0,
            cursor: "pointer",
            ":hover": {
              color: (theme) => theme.palette.primary.main,
              transition: ".3s",
            },
          }}
          onClick={() => navigate("/")}
        >
          <img
            src={header.logo}
            alt="logo react-chrono-ts"
            style={{
              width: "36px",
              aspectRatio: "1:1",
              marginRight: !isTablet ? ".5rem" : "6px",
            }}
          />
          {!isTablet && (
            <Typography component="h6" fontWeight="bold" fontSize="20px">
              {header.title}
            </Typography>
          )}
        </Grid2>
        <List sx={{ marginTop: "2rem" }}>
          {header.primaryItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </List>

        {footer && (
          <React.Fragment>
            <List
              sx={{ marginTop: "auto", marginBottom: { xs: ".5rem", md: 0 } }}
            >
              {footer.secondaryItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </List>
            {!isTablet && (
              <Grid2
                justifyContent="center"
                alignItems="center"
                padding="1.5rem"
              >
                <Typography
                  component="p"
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                  }}
                  fontWeight="semibold"
                >
                  {footer.footerText}
                </Typography>
              </Grid2>
            )}
          </React.Fragment>
        )}
      </Drawer>
      {isMobile && mobileConfig && (
        <MenuMobile
          navItems={mobileConfig.navItems}
          mobileItems={mobileConfig.mobileItems}
        />
      )}
    </React.Fragment>
  );
};

export default Menu;
