import React from 'react';
import FlightIcon from '@mui/icons-material/Flight';
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  styled,
} from '@mui/material';

const MENULIST = [{ icon: <FlightIcon />, label: '국가별 여행 경보상황' }];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

const SideBar = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: '100%',
        borderRadius: '0 10px 10px 0',
      }}
    >
      <FireNav component="nav" disablePadding>
        <ListItemButton component="a" href="#customized-list">
          <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
          <ListItemText
            sx={{ my: 0 }}
            primary="Firebash"
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: 'medium',
              letterSpacing: 0,
            }}
          />
        </ListItemButton>

        <Divider />

        {MENULIST.map((menu) => (
          <ListItemButton key={menu.label}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText>{menu.label}</ListItemText>
          </ListItemButton>
        ))}
      </FireNav>
    </Paper>
  );
};

export default SideBar;
