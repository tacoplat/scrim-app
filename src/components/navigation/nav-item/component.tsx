import React from "react";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import Link from "next/link";

interface NavItemProps {
  icon: React.ReactElement;
  text: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, href }) => {
  return (
    <Link href={href}>
      <MenuItem>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </MenuItem>
    </Link>
  );
};

export default NavItem;
