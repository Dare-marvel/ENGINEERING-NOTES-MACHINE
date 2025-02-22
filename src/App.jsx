import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes';
import Astronaut from './components/Astronaut'
import { Analytics } from "@vercel/analytics/react"
// import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Box >
        <Astronaut />
          {/* <Breadcrumbs /> */}
          <AppRoutes />
        </Box>
      </Box>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;