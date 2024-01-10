import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import PollIcon from "@mui/icons-material/Poll";
import BallotIcon from "@mui/icons-material/Ballot";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, useParams } from "react-router-dom";
import UserMenuCheck from "./UserMenuCheck";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loadBlockchainData, loadWeb3 } from "../../Helpers/Web3Helpers";

const drawerWidth = 240;
function UserHome(props) {
  const navigate = useNavigate();
  const params = useParams();
  const { wind } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [username, setUsername] = useState("");
  const eVote = useSelector((state) => state.eVote.eVote);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const menuWithIcons = [
    {
      name: "Voter Registration",
      icon: <HowToRegIcon />,
      path: "Voter-Registration",
    },
    {
      name: "Voter Area",
      icon: <BallotIcon />,
      path: "Voter-Area",
    },

    {
      name: "Result",
      icon: <PollIcon />,
      path: "Result",
    },

    {
      name: "About",
      icon: <InfoIcon />,
      path: "About",
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      path: "Logout",
    },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    loadWeb3();
  }, []);
  useEffect(() => {
    loadBlockchainData(dispatch);
  }, [dispatch]);
  const getUser = async () => {
    try {
      const email = localStorage.getItem("email");
      const res = await eVote.methods.usersList(email).call();
      setUsername(res.username);
    } catch (error) {}
  };
  useEffect(() => {
    getUser();
  });

  const drawer = (
    <div style={{ backgroundColor: "#17202A", height: "100vh" }}>
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 15,
        }}
      >
        <Avatar
          style={{ backgroundColor: "#EE4C0B" }}
          alt={username}
          src={username}
        />
        <h3 style={{ color: "white", marginLeft: 8 }}>{username}</h3>
      </span>
      <Divider />
      <List>
        {menuWithIcons.map((data, index) => (
          <ListItem
            onClick={() => {
              if (data.path === "Logout") {
                localStorage.removeItem("email");
                localStorage.removeItem("username");
                navigate("/");
                return;
              }
              navigate(`/UserHome/${data.path}`);
            }}
            button
            key={index}
          >
            <ListItemIcon style={{ color: "white" }}>{data.icon}</ListItemIcon>
            <ListItemText style={{ color: "white" }} primary={data.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = wind !== undefined ? () => wind().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{ backgroundColor: "#17202A" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {params.name.replace(/-/g, " ")}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <UserMenuCheck name={params.name} />
      </Box>
    </Box>
  );
}

UserHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  wind: PropTypes.func,
};

export default UserHome;
