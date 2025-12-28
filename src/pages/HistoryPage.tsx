import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import Sidebar, { sidebarWidth } from '../components/Sidebar';
import Topbar from '../components/Topbar';
import TableControls from '../components/TableControls';
import DataTable from '../components/DataTable';

export default function HistoryPage() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <Sidebar />
      <Topbar sidebarWidth={sidebarWidth} mainMenu="프로젝트" subMenu="프로젝트1"/>
      {/* Main */}
      <Box sx={{ flexGrow: 1 }}>
        <Box sx = {{overflowX: 'auto', m: 3  }}>
          <Container maxWidth={false} sx={{ minWidth: 1300, mt: 10}}>
            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Box>
                  <Typography variant="h4">프로젝트</Typography>
                  <Typography variant="body2" color="text.secondary">진행 중인 프로젝트를 관리하세요</Typography>
                </Box>
                <Box>
                  {/* 우측에 배치할 components */}
                </Box>
              </Stack>
          
              <Paper sx={{ p: 3 }}>
                <TableControls />
              </Paper>

              <Paper sx={{ p: 3 }}>
                <DataTable />
              </Paper>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
