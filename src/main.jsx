import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider,extendTheme } from '@chakra-ui/react'

// Custom theme with space-like colors
// const theme = extendTheme({
//   colors: {
//     brand: {
//       50: '#e6e6fa',   // Lavender
//       100: '#4169e1',  // Royal Blue
//       500: '#000080',  // Navy Blue
//       900: '#00008b',  // Dark Blue
//     },
//   },
// });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider> 
      <App />
    </ChakraProvider>
  </StrictMode>,
)
