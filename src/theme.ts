import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0F4E83', // 사이드바 활성화, 검색 버튼 등 (로그인 페이지와는 다르게 설정)
      light: '#9FC5E8', // Light Blue
      dark: '#002060',  // 텍스트, 헤더 등 딥 블루
      contrastText: '#fff',
    },
    secondary: { // 이미지의 "새 프로젝트" 버튼 색상
      main: '#0092BB',
      contrastText: '#fff',
    },
    error: { main: '#DC2626' }, // 위험 상태
    success: { main: '#22C55E' }, // 완료됨 상태
    warning: { main: '#FBBF24' }, // 보류됨 상태 (이미지에는 없지만 유추)
    info: { main: '#9FC5E8' }, // 정보 (이미지 상 '정상 진행' 칩 색)
    text: {
      primary: '#002060', // 대부분의 본문 텍스트
      secondary: '#64748B', // 보조 텍스트 (e.g., 작은 설명)
      disabled: '#9CA3AF',
    },
    background: {
      default: '#F8FAFC', // 전체 배경
      paper: '#FFFFFF',   // 카드, 테이블 등 배경
    },
    grey: { // 그림자 효과를 위해 특정 그레이 사용 (이미지 참조)
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontSize: '2rem', fontWeight: 700, lineHeight: 1.2 }, // "모든 프로젝트" 제목
    h5: { fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.3 }, // "ProjectMgt" 제목
    subtitle1: { fontSize: '1rem', fontWeight: 600 },
    subtitle2: { fontSize: '0.875rem', fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.5 },
    body2: { fontSize: '0.875rem', lineHeight: 1.4 },
    caption: { fontSize: '0.75rem', lineHeight: 1.3 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 8, // 전체적인 라운드값
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
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
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
    MuiChip: {
      variants: [
        {
          props: { color: 'info' }, // '정상 진행' 에 사용
          style: {
            backgroundColor: '#DBEAFE', // 배경색
            color: '#2563EB', // 글자색
            fontWeight: 600,
            borderRadius: 6,
          },
        },
        {
          props: { color: 'error' }, // '위험' 에 사용
          style: {
            backgroundColor: '#FECACA',
            color: '#EF4444',
            fontWeight: 600,
            borderRadius: 6,
          },
        },
        {
          props: { color: 'success' }, // '완료됨' 에 사용
          style: {
            backgroundColor: '#DCFCE7',
            color: '#16A34A',
            fontWeight: 600,
            borderRadius: 6,
          },
        },
      ],
      styleOverrides: {
        root: {
          height: 24, // 이미지 Chip 높이
          fontSize: '0.75rem',
        },
        label: {
          paddingLeft: 8,
          paddingRight: 8,
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
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#F1F5F9', // 헤더 배경색
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem', // 기본 셀 폰트 크기
          borderColor: '#E2E8F0',
          padding: '12px 16px', // 이미지와 유사한 패딩
        },
        head: {
          fontWeight: 600,
          color: '#64748B', // 이미지와 같은 어두운 회색
          fontSize: '0.8125rem', // 헤더 폰트 크기
        },
      },
    },
    MuiListItemButton: {
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
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 40,
          color: '#64748B', // 비활성 아이콘 색상
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8, // 이미지와 유사한 라운드
            backgroundColor: '#FFFFFF', // 텍스트필드 내부 배경은 흰색
            '& fieldset': {
              borderColor: '#E2E8F0',
            },
            '&:hover fieldset': {
              borderColor: '#9FC5E8', // 호버 시 연한 블루
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0F4E83', // 포커스 시 메인 블루
              borderWidth: '1px',
            },
          },
          '& .MuiInputBase-input': {
            padding: '10px 14px', // 내부 텍스트 패딩 조절
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: '#94A3B8', // 아이콘 색상
        }
      }
    }
  },
});