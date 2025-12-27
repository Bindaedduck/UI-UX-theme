import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../theme';

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <BrowserRouter>
                {children}
            </BrowserRouter>
    </ThemeProvider>
  );
}