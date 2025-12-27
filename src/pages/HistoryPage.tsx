import { Box, Typography, Paper } from '@mui/material';
import Sidebar, { sidebarWidth } from '../components/Sidebar';
import Topbar from '../components/Topbar';
import TableControls from '../components/TableControls';
import DataTable from '../components/DataTable';

export default function HistoryPage() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Sidebar />
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
          pt: '110px',
          minWidth: 1300 //가로길이를 줄였을 때 components를 보여줄 최소 너비
        }}
      >
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, px: 1 }}>
          <Box>
            <Typography variant="h4">프로젝트</Typography>
            <Typography variant="body2" color="text.secondary">진행 중인 프로젝트를 관리하세요</Typography>
          </Box>
          <Box>
            {/* 우측에 배치할 components */}
          </Box>
        </Box>

        <Paper sx={{ p: 3, width: '100%' }}>
          <TableControls />
        </Paper>

        <Paper sx={{ p: 3, mt: 2, width: '100%' }}>
          <DataTable />
        </Paper>
      </Box>
    </Box>
  );
}
