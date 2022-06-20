import { Box, Button, Container, Grid, Paper, styled } from '@mui/material';
import React from 'react';
import SideBar from './components/Sidebar/SideBar';
import Nations from './pages/Nations/Nations';

function App() {
  return (
    <CONTAINER>
      <Grid sx={{ height: '100%' }} container spacing={2}>
        <Grid item xs={2} md={3} lg={2}>
          <SideBar />
        </Grid>
        <Grid item xs={8} md={9} lg={10}>
          <Nations />
        </Grid>
      </Grid>
    </CONTAINER>
  );
}

const CONTAINER = styled(Box)`
  flex-grow: 1;
  height: 100%;
`;

export default App;
