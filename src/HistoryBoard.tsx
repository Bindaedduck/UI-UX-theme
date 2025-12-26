import React from 'react';
import { 
  Box, 
  Typography,  Chip, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, LinearProgress, Button, TextField, InputAdornment,
  CssBaseline, ThemeProvider, IconButton,  
} from '@mui/material';
import { 
   Add, Search, FilterList, Sort, ChevronLeft, ChevronRight, MoreVert
} from '@mui/icons-material';
import { theme } from './theme';
import Sidebar, { sidebarWidth } from './components/sidebar';
import Topbar from './components/Topbar';

const projects = [
  { id: 1, name: '3분기 웹사이트 개편', dept: '마케팅 부서', status: '정상 진행', date: '2023. 10. 24', team: ['/avatar1.jpg'], progress: 65, statusKey: 'info' },
  { id: 2, name: '모바일 앱 출시', dept: '제품 엔지니어링', status: '위험', date: '2023. 11. 01', team: ['/avatar2.jpg'], progress: 40, statusKey: 'error' },
];

export default function HistoryBoard() {
  return (
    <ThemeProvider theme={theme}>  {/* 테마 적용 */}
       
      <CssBaseline /> {/* CSS 정규화 */}

      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        <Sidebar/>
        <Topbar sidebarWidth={sidebarWidth} mainMenu='프로젝트' subMenu='프로젝트1'/>

        {/* Main */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: 6,
            py: 4,
            width: `calc(100vw - ${sidebarWidth}px)`,
            overflowX: 'auto',
            pt: '110px'
          }}
        >
          <Box
  sx={{
    minWidth: 1300,      // ✅ 여기서 고정
  }}
>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 5, px: 1 }}>
            <Box>
              <Typography variant="h4">프로젝트</Typography>
              <Typography variant="body2" color="text.secondary">진행 중인 프로젝트를 관리하세요</Typography>
            </Box>
            <Button variant="contained" startIcon={<Add />}>새 프로젝트</Button>
          </Box>

          {/* Table Card */}
          <Paper sx={{ p: 3, width: '100%' }}>
            {/* Controls */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
              <TextField
                size="small"
                placeholder="프로젝트 검색"
                sx={{ minWidth: 280 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
              <Button startIcon={<FilterList />} variant="outlined">필터</Button>
              <Button startIcon={<Sort />} variant="outlined">정렬</Button>
            </Box>

            {/* Table */}
            <TableContainer sx={{ width: '100%' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>프로젝트</TableCell>
                    <TableCell>상태</TableCell>
                    <TableCell>마감일</TableCell>
                    <TableCell>진행률</TableCell>
                    <TableCell align="right" />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projects.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>
                        <Typography fontWeight={600}>{row.name}</Typography>
                        <Typography variant="caption" color="text.secondary">{row.dept}</Typography>
                      </TableCell>
                      <TableCell>
                        <Chip label={row.status} size="small" color={row.statusKey} />
                      </TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell sx={{ width: 180 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LinearProgress variant="determinate" value={row.progress} sx={{ flexGrow: 1 }} />
                          <Typography variant="caption">{row.progress}%</Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton size="small"><MoreVert /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Footer */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Typography variant="body2" color="text.secondary">총 24개 중 1-5</Typography>
              <Box>
                <IconButton size="small"><ChevronLeft /></IconButton>
                <IconButton size="small"><ChevronRight /></IconButton>
              </Box>
            </Box>
          </Paper>
        </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
