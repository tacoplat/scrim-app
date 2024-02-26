import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import GroupsIcon from "@mui/icons-material/Groups";
import ExploreIcon from "@mui/icons-material/Explore";

import styles from "./styles.module.scss";
import NavItem from "./nav-item/component";

const Navigation: React.FC = () => {
  return (
    <Drawer variant="permanent" anchor="left" className={styles.navigation}>
      <Box className={styles.linksGroup}>
        <NavItem icon={<HomeIcon />} text="Home" href="/" />
        <NavItem icon={<SportsEsportsIcon />} text="Matches" href="/matches" />
        <NavItem icon={<GroupsIcon />} text="Teams" href="/teams" />
        <Divider />
        <NavItem icon={<ExploreIcon />} text="Discover" href="/discover" />
      </Box>
      <Box>
        <MenuItem className={styles.accountItem}>
          <ListItemAvatar>
            <Avatar src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528" />
          </ListItemAvatar>
          <ListItemText primary="Player Name" secondary="Role"></ListItemText>
        </MenuItem>
      </Box>
    </Drawer>
  );
};

export default Navigation;
