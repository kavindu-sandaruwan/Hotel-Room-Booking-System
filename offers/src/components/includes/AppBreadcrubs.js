import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink } from "react-router-dom";
import "../../css/AppBreadcrumbs.css";

const AppBreadcrumbs = () => {
  const breadcrumbs = [
    <Link
      className="link1"
      underline="hover"
      key="1"
      color="inherit"
      component={RouterLink}
      to="/home"
    >
      Home
    </Link>,

    <Link
      className="link2"
      underline="hover"
      key="2"
      color="inherit"
      component={RouterLink}
      to="/promotions"
    >
      Promotions
    </Link>,

    <Typography key="3" color="text.primary">
      Promotion Details
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="medium" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default AppBreadcrumbs;
