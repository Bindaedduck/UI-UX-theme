import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* 모든 브라우저에서 일관적인 스타일 적용 */}
            <BrowserRouter>
                {children}
            </BrowserRouter>
    </ThemeProvider>
  );
}