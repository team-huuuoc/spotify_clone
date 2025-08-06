import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource/inter/400.css";
import App from "@/App";
import ThemeProvider from "@/contexts/ThemeContext";
import {StyleProvider} from "@ant-design/cssinjs";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <StyleProvider layer>
          <ThemeProvider>
              <App />
          </ThemeProvider>
      </StyleProvider>
  </StrictMode>,
)
