import { Box, Button, Container, Grid, Paper, styled } from '@mui/material';
import React from 'react';
import SideBar from './components/Sidebar/SideBar';
import Nations from './pages/Nations/Nations';

function App() {
  return (
    <CONTAINER elevation={0}>
      <SIDERBAR>
        <SideBar />
      </SIDERBAR>
      <CONTENTS>
        <Nations />
      </CONTENTS>
    </CONTAINER>
  );
}

const CONTAINER = styled(Paper)`
  display: flex;
  flex-grow: 1;
  height: 100%;
`;

const CONTENTS = styled(Box)`
  width: calc(100% - 220px);
  padding: 10px;
`;

const SIDERBAR = styled(Box)`
  width: 220px;
`;

export default App;
