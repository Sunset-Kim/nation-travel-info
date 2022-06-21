import React from 'react';
import FlightIcon from '@mui/icons-material/Flight';
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuList,
  Paper,
  styled,
  Typography,
} from '@mui/material';
import Logo from '@assets/logo.png';

const MENULIST = [{ icon: <FlightIcon />, label: '국가별 여행 경보상황' }];

const SideBar = () => {
  return (
    <CONTAINER elevation={8} sx={{ padding: '32px 16px' }}>
      <LOGO>
        <a href={'/'}>
          <img src={Logo} alt="공공데이터" />
        </a>
      </LOGO>

      <Box>
        <Typography component={'span'} sx={{ paddingLeft: 2, fontSize: 14 }}>
          현재 서비스
        </Typography>
        <MenuList>
          {MENULIST.map((menu) => (
            <ICON_TAB key={menu.label}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText>{menu.label}</ListItemText>
            </ICON_TAB>
          ))}
        </MenuList>
      </Box>

      <FOOTER></FOOTER>
    </CONTAINER>
  );
};

const CONTAINER = styled(Paper)`
  height: 100%;
  border-radius: 0 10px 10px 0;
`;

const LOGO = styled(Box)`
  margin-bottom: 40px;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const ICON_TAB = styled(ListItemButton)<{ component?: React.ElementType }>({
  // 디폴트
  '&.MuiListItemButton-root': {
    padding: '12px 12px',
    borderRadius: '8px',
    transition: 'background 0.15s ease-in-out',
  },

  // 선택
  '&.Mui-selected': {
    backgroundColor: 'rgba(102, 157, 246, 0.24)',
  },

  ':not(:last-of-type)': {
    marginBottom: 10,
  },
  '.MuiListItemIcon-root': {
    marginRight: 4,
    minWidth: 0,
  },
});

const FOOTER = styled(Box)``;

export default SideBar;
