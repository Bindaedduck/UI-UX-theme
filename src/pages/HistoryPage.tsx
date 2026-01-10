import { Box, Paper, Stack, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import HistoryTable from '../features/history/components/HistoryTable';
import HistoryTableContorls from '../features/history/components/HistoryTableControls';

export default function HistoryPage() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh",  bgcolor: "background.default"}}>
      <Sidebar />
      {/* Main */}
      <Box sx={{ flexGrow: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <Topbar mainMenu="프로젝트" subMenu="프로젝트1"/>
        <Box sx = {{ overflowX: 'hidden', m: 3  }}>
          {/* contents 최소너비 확보 */}
          <Box sx={{ minWidth: 1300, px: 4, pt: 2, pb: 4 }}> 
            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Box>
                  <Typography variant="h4">프로젝트</Typography>
                  <Typography variant="body2" color="text.secondary">진행 중인 프로젝트를 관리하세요</Typography>
                </Box>
                {/* 우측에 배치할 contents */}
                <Box>
                </Box>
              </Stack>
          
              <Paper sx={{ p: 3 }}>
                <HistoryTableContorls />
              </Paper>

              <Paper sx={{ p: 3 }}>
                <HistoryTable />
              </Paper>
            </Stack>
          </Box> 
        </Box>
      </Box>
    </Box>
  );
}
