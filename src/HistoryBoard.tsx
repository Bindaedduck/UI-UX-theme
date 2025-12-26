import React from 'react';
import { 
  Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, 
  Typography, Avatar, Chip, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, LinearProgress, Button, TextField, InputAdornment,
  CssBaseline, ThemeProvider, IconButton,  AppBar,
  Toolbar,
  Badge,
} from '@mui/material';
import { 
  Dashboard as DashboardIcon, Folder, Assignment, Group, BarChart, Settings, Add, Search, FilterList, Sort, GridView, ChevronLeft, ChevronRight, MoreVert, NotificationsNoneOutlined, HelpOutlineOutlined
} from '@mui/icons-material';
import { theme } from './theme';
import Sidebar from './components/sidebar';

const sidebarWidth = 240;

const projects = [
  { id: 1, name: '3분기 웹사이트 개편', dept: '마케팅 부서', status: '정상 진행', date: '2023. 10. 24', team: ['/avatar1.jpg'], progress: 65, statusKey: 'info' },
  { id: 2, name: '모바일 앱 출시', dept: '제품 엔지니어링', status: '위험', date: '2023. 11. 01', team: ['/avatar2.jpg'], progress: 40, statusKey: 'error' },
];

export default function ProjectDashboard() {
  return (
    <ThemeProvider theme={theme}>
      {/* CSS 정규화 */}
      <CssBaseline />

      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* Sidebar */}
        <Sidebar/>

<AppBar
  position="fixed"
  elevation={0}
  sx={{
    p: 1,
    bgcolor: '#fff',
    borderBottom: '1px solid #eaeef3',
    color: 'text.primary',
    zIndex: (theme) => theme.zIndex.drawer + 1,
    left: `${sidebarWidth}px`,
    width: `calc(100% - ${sidebarWidth}px)`,
    
  }}
>
  
  <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
    {/* Breadcrumb */}
    <Typography variant="h6" color="text.secondary">
      Dashboard&nbsp; / &nbsp;<b>Projects</b>
    </Typography>

      {/* Right Actions */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton>
          <Badge variant="dot" color="error">
            <NotificationsNoneOutlined />
          </Badge>
        </IconButton>

        <IconButton>
          <HelpOutlineOutlined />
        </IconButton>

      <Avatar sx={{ width: 32, height: 32 }} />
    </Box>
  </Toolbar>
</AppBar>

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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
            <Box>
              <Typography variant="h4">모든 프로젝트</Typography>
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
