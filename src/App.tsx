import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  InputAdornment,
  IconButton,
  CssBaseline,
} from '@mui/material';
import {
  Window as WindowIcon,
  EmailOutlined as EmailIcon,
  LockOutlined as LockIcon,
  VisibilityOutlined as VisibilityIcon,
  VisibilityOffOutlined as VisibilityOffIcon,
} from '@mui/icons-material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0083B0',
    },
    text: {
      primary: '#1A237E',
      secondary: '#757575',
    },
    background: {
      default: '#F0F2F5',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: { fontWeight: 700 },
  },
  shape: {
    borderRadius: 12,
  },
});

const LoginPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius * 1.5,
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
  width: '100%',
  maxWidth: 420, // 시안과 가장 유사한 너비
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  backgroundColor: '#E3F2FD',
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.primary.main,
}));

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw', // 뷰포트 너비 전체 사용
          display: 'flex',
          justifyContent: 'center', // 가로 중앙
          alignItems: 'center',     // 세로 중앙
          backgroundColor: 'background.default',
          p: 2, // 모바일 대응을 위한 최소 패딩
        }}
      >
        {/* Container 대신 Stack을 직접 사용하여 너비 제한 및 중앙 정렬 */}
        <Stack 
          alignItems="center" 
          spacing={4} 
          sx={{ 
            width: '100%',
            maxWidth: 420 // 카드의 maxWidth와 일치시켜 일직선 정렬
          }}
        >
          <LoginPaper elevation={0}>
            <Stack spacing={3} alignItems="center">
              <IconBox>
                <WindowIcon fontSize="large" />
              </IconBox>
              
              <Box textAlign="center">
                <Typography variant="h5" color="text.primary" gutterBottom>
                  Welcome Back
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sign in to access your dashboard
                </Typography>
              </Box>

              <Stack spacing={2.5} width="100%">
                <Box>
                  <Typography variant="subtitle2" color="text.primary" fontWeight={600} sx={{ mb: 1 }}>
                    Email Address
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="name@company.com"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon fontSize="small" color="action" />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: 2, backgroundColor: '#F8F9FA' },
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="subtitle2" color="text.primary" fontWeight={600} sx={{ mb: 1 }}>
                    Password
                  </Typography>
                  <TextField
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon fontSize="small" color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                            {showPassword ? <VisibilityIcon fontSize="small" /> : <VisibilityOffIcon fontSize="small" />}
                          </IconButton>
                        </InputAdornment>
                      ),
                      sx: { borderRadius: 2, backgroundColor: '#F8F9FA' },
                    }}
                  />
                </Box>

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={<Typography variant="body2" color="text.secondary">Remember me</Typography>}
                  />
                  <Link href="#" variant="body2" underline="hover" fontWeight={500}>
                    Forgot password?
                  </Link>
                </Stack>

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ py: 1.5, borderRadius: 2, fontSize: '1rem', fontWeight: 600, textTransform: 'none' }}
                >
                  Login
                </Button>
              </Stack>

              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <Link href="#" underline="hover" fontWeight={600}>Sign up</Link>
              </Typography>
            </Stack>
          </LoginPaper>

          {/* Footer Links */}
          <Stack direction="row" spacing={2} alignItems="center" sx={{ opacity: 0.7 }}>
            <Link href="#" variant="caption" color="text.secondary" underline="hover">Privacy Policy</Link>
            <Typography variant="caption" color="text.secondary">•</Typography>
            <Link href="#" variant="caption" color="text.secondary" underline="hover">Terms of Service</Link>
            <Typography variant="caption" color="text.secondary">•</Typography>
            <Link href="#" variant="caption" color="text.secondary" underline="hover">Help Center</Link>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}