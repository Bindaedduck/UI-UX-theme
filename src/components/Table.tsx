import { useState } from 'react';
import { 
  Chip, Table as MuiTable, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, TablePagination 
} from '@mui/material';
import { tableItem } from '../tableItem';

export default function Table() {
  const [page, setPage] = useState(0); // 현재 페이지 of 전체 페이지
  const [rowsPerPage, setRowsPerPage] = useState(10); // 한 번에 보여줄 페이지

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return(
      <>
          <TableContainer sx={{ width: '100%' }}>
            <MuiTable stickyHeader>
              <TableHead sx={{ height: 60 }}> 
                <TableRow>
                  <TableCell>REQ ID</TableCell>
                  <TableCell align='center'>BIZ CLS</TableCell>
                  <TableCell align='center' sx={{ minWidth: 100 }}>IDP TYPE</TableCell>
                  <TableCell>FILE NAME</TableCell>
                  <TableCell>FILE PATH</TableCell>
                  <TableCell align='center'>PAGE</TableCell>
                  <TableCell align='center'>STATUS</TableCell>
                  <TableCell align='center' sx={{ minWidth: 150 }}>START DATE TIME</TableCell>
                  <TableCell align='center' sx={{ minWidth: 150 }}>END DATE TIME</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableItem
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.req_id} hover sx={{ height: 80 }}>
                      <TableCell>{row.req_id}</TableCell>
                      <TableCell align='center'><Chip label={row.biz_cls}/></TableCell>
                      <TableCell align='center'>{row.idp_type}</TableCell>
                      <TableCell>{row.file_name}</TableCell>
                      <TableCell>{row.file_path}</TableCell>
                      <TableCell align='center'>{row.page}</TableCell>
                      <TableCell align='center'>
                        { row.status === 'success' ? 
                            <Chip label={row.status} color='success' variant='outlined'/> : 
                          row.status === 'pending' ? 
                            <Chip label={row.status} variant='outlined'/> :
                          <Chip label={row.status} color='error' variant='outlined'/>
                        }
                        
                      </TableCell>
                      <TableCell align='center'>{row.start_date_time}</TableCell>
                      <TableCell align='center'>{row.end_date_time}</TableCell>

                      {/* <TableCell sx={{ width: 180 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LinearProgress variant="determinate" value={row.progress} sx={{ flexGrow: 1 }} />
                          <Typography variant="caption">{row.progress}%</Typography>
                        </Box>
                      </TableCell> */}
                      {/* <TableCell align="right">
                        <IconButton size="small"><MoreVert /></IconButton>
                      </TableCell> */}
                    </TableRow>
                  ))}
              </TableBody>
            </MuiTable>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={tableItem.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </>
  )
}