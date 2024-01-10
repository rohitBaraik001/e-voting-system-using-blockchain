import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuIcon,
  Toolbar,
  Typography,
  HowToRegIcon,
  PersonAddIcon,
  PublishedWithChangesIcon,
  AccountCircleIcon,
  LogoutIcon,
  Avatar,
} from "../../Helpers/HeadersExport";
import AdminMenuCheck from "./AdminMenuCheck";
import { useDispatch, useSelector } from "react-redux";
import { loadBlockchainData, loadWeb3 } from "../../Helpers/Web3Helpers";
import { getCandidates } from "../../Helpers/getData";
const drawerWidth = 240;
function AdminHome(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { wind } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const menuWithIcons = [
    {
      name: "Candidate Details",
      icon: <AccountCircleIcon />,
      path: "Candidate-Details",
    },
    {
      name: "Add Candidates",
      icon: <PersonAddIcon />,
      path: "Add-Candidates",
    },
    {
      name: "Change State",
      icon: <PublishedWithChangesIcon />,
      path: "Change-State",
    },
    {
      name: "Analytics",
      icon: <HowToRegIcon />,
      path: "Analytics",
    },

    {
      name: "Logout",
      icon: <LogoutIcon />,
      path: "Logout",
    },
  ];
  // connecting to ganache
  const account = useSelector((state) => state.account.account);
  const eVote = useSelector((state) => state.eVote.eVote);
  useEffect(() => {
    loadWeb3();
  }, []);
  useEffect(() => {
    loadBlockchainData(dispatch);
  }, [dispatch]);
  useEffect(() => {
    getCandidates(dispatch, eVote);
  }, [dispatch, eVote]);

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
          alt="bemy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGov7ul8dzgF8tbD125KHR49_hsRoP6FJmg&usqp=CAU"
        />
        <h3 style={{ color: "white", marginLeft: 8 }}>
          {account.substr(0, 6) + "....." + account.substr(37, 42)}
        </h3>
      </span>
      <Divider />
      <List>
        {menuWithIcons.map((data, index) => (
          <ListItem
            onClick={() => {
              if (data.path === "Logout") {
                navigate("/");
                return;
              }

              navigate(`/AdminHome/${data.path}`);
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

  const container =
    wind !== undefined ? () => window().document.body : undefined;

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
        <AdminMenuCheck name={params.name} />
      </Box>
    </Box>
  );
}

AdminHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  wind: PropTypes.func,
};

export default AdminHome;
