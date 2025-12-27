import { 
  Box, Typography,  Chip, Table as MuiTable, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, LinearProgress, IconButton,  
} from '@mui/material';
import { ChevronLeft, ChevronRight, MoreVert } from '@mui/icons-material';

const projects = [
  { id: 1, name: '3분기 웹사이트 개편', dept: '마케팅 부서', status: '정상 진행', date: '2023. 10. 24', team: ['/avatar1.jpg'], progress: 65, statusKey: 'info' },
  { id: 2, name: '모바일 앱 출시', dept: '제품 엔지니어링', status: '위험', date: '2023. 11. 01', team: ['/avatar2.jpg'], progress: 40, statusKey: 'error' },
];

export default function Table() {
    return(
        <>
           <TableContainer sx={{ width: '100%' }}>
              <MuiTable>
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
              </MuiTable>
            </TableContainer>

            {/* Footer */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Typography variant="body2" color="text.secondary">총 24개 중 1-5</Typography>
              <Box>
                <IconButton size="small"><ChevronLeft /></IconButton>
                <IconButton size="small"><ChevronRight /></IconButton>
              </Box>
            </Box>
        </>
    )
}