import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

function BlogHeader() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(240,13,205,1) 0%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography
          component={Link}
          to="/blog"
          variant="h4"
          style={{ textDecoration: "none" }}
        >
          3T Blog
        </Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(event, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/blog" label="All Blogs" />
              <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs " />
              <Tab LinkComponent={Link} to="/blogs/add" label="Create Blogs " />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
              >
                Sign In
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
              >
                Sign Up
              </Button>
              <Button
                LinkComponent={Link}
                to="/"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
              >
                Home
              </Button>
            </>
          )}
          {isLoggedIn && (
            <>
               <Button
               LinkComponent={Link}
               to="/"
               variant="contained"
               sx={{ margin: 1, borderRadius: 10 }}
             >
               Home
             </Button>
            <Button
              onClick={() => dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/blog"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
            >
              Log Out
            </Button>
            </>

          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default BlogHeader;
