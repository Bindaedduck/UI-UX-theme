import React, { useState } from 'react';
import {
  Box, Paper, Typography, TextField, Button, Checkbox,
  FormControlLabel, Link, Stack, InputAdornment, IconButton
} from '@mui/material';
import {
  Window as WindowIcon,
  LockOutlined as LockIcon,
  VisibilityOutlined as VisibilityIcon,
  VisibilityOffOutlined as VisibilityOffIcon,
  PersonOutline as PersonIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const SignUpPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
  width: '100%',
  maxWidth: 420
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.primary.main,
}));

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw', 
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center',     
          backgroundColor: 'background.default',
          p: 2
        }}
      >
        
        <Stack 
          alignItems="center" 
          spacing={4} 
          sx={{ 
            width: '100%',
            maxWidth: 420 
          }}
        >
          <SignUpPaper elevation={0}>
            <Stack spacing={7} alignItems="center">
              <Stack spacing={2} alignItems="center">
                <IconBox>
                  <WindowIcon fontSize="large" />
                </IconBox>

                <Typography variant="h5" color="text.primary">
                  회원 가입
                </Typography>
              </Stack>
              
              <Stack spacing={2.5} width="100%" sx={{ mt:4}}>
                <Box>
                  <Typography variant="subtitle2" color="text.primary" fontWeight={600} sx={{ mb: 1 }}>
                    아이디
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Username"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon fontSize="small" color="action" />
                          </InputAdornment>
                        ),
                        
                        sx: { borderRadius: 2, backgroundColor: '#F8F9FA' },
                    }}}
                  />
                </Box>

                <Box>
                  <Typography variant="subtitle2" color="text.primary" fontWeight={600} sx={{ mb: 1 }}>
                    비밀번호
                  </Typography>
                  <TextField
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    slotProps={{
                      input:{
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
                    }}}
                  />
                </Box>

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={<Typography variant="body2" color="text.secondary">로그인 상태 유지</Typography>}
                  />
                </Stack>

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ py: 1.5, borderRadius: 2, fontSize: '1rem', fontWeight: 600 }}
                >
                  회원 가입
                </Button>
              </Stack>

              <Typography variant="body2" color="text.secondary">
                이미 게정이 있으신가요?{' '}
                <Link href="/signin" underline="hover" fontWeight={600}>로그인</Link>
              </Typography>
            </Stack>
          </SignUpPaper>

          <Typography variant="caption" color="text.secondary">Copyright ⓒ 2025 KSTEC. All Rights Reserved.</Typography>
        </Stack>
      </Box>
  );
}