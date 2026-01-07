import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0F4E83', // 사이드바 활성화, 검색 버튼 등
      light: '#9FC5E8', 
      dark: '#002060',  // 텍스트, 헤더 등 딥 블루
      contrastText: '#fff',
    },
    text: {
      primary: '#002060', // 대부분의 본문 텍스트
      secondary: '#64748B', // 보조 텍스트 (e.g., 작은 설명)
      disabled: '#9CA3AF',
    },
    background: {
      default: '#F8FAFC', // 전체 배경
      paper: '#FFFFFF',   // 카드, 테이블 등 배경
    },
    grey: { // 그림자 효과를 위해 특정 그레이 사용
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontSize: '2rem', fontWeight: 700, lineHeight: 1.2 }, 
    h5: { fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.3 }, 
    h6: { fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.3 }, 
    subtitle1: { fontSize: '1rem', fontWeight: 600 },
    subtitle2: { fontSize: '0.875rem', fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.5 },
    body2: { fontSize: '0.875rem', lineHeight: 1.4 },
    caption: { fontSize: '0.75rem', lineHeight: 1.3 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 8, // 전체적인 라운드
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: '#0F4E83',
          '&:hover': { backgroundColor: '#0A3B66' },
        },
        containedSecondary: {
          backgroundColor: '#0092BB',
          '&:hover': { backgroundColor: '#007A9C' },
        },
        outlined: {
          borderColor: '#CBD5E1',
          color: '#64748B',
          '&:hover': { borderColor: '#AAB8C9', backgroundColor: 'rgba(0, 0, 0, 0.04)' },
        }
      },
    },
    MuiChip: { //Used in table
      styleOverrides: {
        root: {
          height: 24,
        },
        label: {
          paddingLeft: 8,
          paddingRight: 8,
        }
      }
    },
    MuiTableHead: { //Used in table
      styleOverrides: {
        root: {
          backgroundColor: '#F1F5F9', 
        },
      },
    },
    MuiTableCell: { //Used in table
      styleOverrides: {
        root: {
          fontSize: '0.875rem', 
          borderColor: '#E2E8F0',
          padding: '12px 16px',
        },
        head: {
          fontWeight: 600,
          color: '#64748B', 
          fontSize: '0.8125rem', 
        },
      },
    },
    MuiListItemButton: { //Used in sidebar
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.Mui-selected': {
            backgroundColor: 'rgba(15, 78, 131, 0.1)', // primary.main의 10% 투명도
            color: '#0F4E83',
            '& .MuiListItemIcon-root': {
              color: '#0F4E83',
            },
            '&:hover': { // 호버 시에도 동일한 배경 유지
              backgroundColor: 'rgba(15, 78, 131, 0.15)',
            },
          },
          '&:hover': {
            backgroundColor: 'rgba(15, 78, 131, 0.05)',
          },
        },
      },
    },
    MuiListItemIcon: { // Used in sidebar
      styleOverrides: {
        root: {
          minWidth: 40,
          color: '#64748B', // 비활성 아이콘 색상
        },
      },
    },
    MuiPaper: { //Used in sidebar, topbar
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05)', // 이미지와 유사한 그림자
        },
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            borderColor: '#E2E8F0',
          },
        },
      ],
    },
    MuiTextField: { // Used in tableControls
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8, 
            backgroundColor: '#FFFFFF', // 내부 배경
            '& fieldset': {
              borderColor: '#E2E8F0',
            },
            '&:hover fieldset': {
              borderColor: '#9FC5E8', // 호버 시
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0092BB', // 포커스 시
              borderWidth: '1px',
            },
          },
          '& .MuiInputBase-input': {
            padding: '10px 14px', // 내부 텍스트 패딩
          },
        },
      },
    },
    MuiInputAdornment: { // Used in tableControls
      styleOverrides: {
        root: {
          color: '#94A3B8', // 아이콘 색상
        }
      }
    },
    MuiSelect: { // Used in tableControls
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': { // 호버 시
            borderColor: '#9FC5E8',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { // 포커스 시
            borderColor: '#0092BB',
            borderWidth: '1px',
          },
          color: '#9CA3AF'
        }
      }
    },
    MuiIconButton: { // Used in topbar
      styleOverrides: {
        root: {
          '&:focus': { outline: 'none' }
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 8,
          borderRadius: 4,
          backgroundColor: '#E5E7EB', // 이미지에 보이는 옅은 그레이 배경
        },
        bar: {
          borderRadius: 4,
        }
      }
    }
  },
});