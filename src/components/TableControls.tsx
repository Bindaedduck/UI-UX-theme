import { Box, TextField, InputAdornment, Select, Typography, MenuItem } from '@mui/material';
import { Search, Sort, Close } from '@mui/icons-material';
import { theme } from '.././theme';

export default function TableControls() {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {/* 검색 */}
          <TextField
            size="small"
            placeholder="REQ ID"
            sx={{ minWidth: 280 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Close fontSize="small" />
                  </InputAdornment>
                )
              }
            }}
          />

          <TextField
            size="small"
            placeholder="FILE NAME"
            sx={{ minWidth: 280 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Close fontSize="small" />
                  </InputAdornment>
                )
              }
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" color="text.disabled" sx={{ letterSpacing: '0.07em'}}>
            <b>FILTER:</b>
          </Typography>
          
          {/* 필터 */}
          <Select value={0} size="small" sx={{ minWidth: 140 }}>
            <MenuItem value={0}>IDP TYPE</MenuItem>
            <MenuItem value={10}>ur</MenuItem>
            <MenuItem value={20}>br</MenuItem>
            <MenuItem value={30}>lb</MenuItem>
            <MenuItem value={40}>da</MenuItem>
            <MenuItem value={50}>jv</MenuItem>
          </Select>

          <Select value={0}  size="small" sx={{mr: 1, minWidth: 140} }>
            <MenuItem value={0}>STATUS</MenuItem>
            <MenuItem value={10}>success</MenuItem>
            <MenuItem value={20}>pending</MenuItem>
            <MenuItem value={20}>error</MenuItem>
          </Select>

          {/* 정렬 */}
          <Box sx={{ display: 'flex', borderLeft: `1px solid ${theme.palette.grey[200]}`, alignItems: 'center'}}>
            <Sort sx={{ml: 3, mr: 2, color: 'text.disabled'}}></Sort>
            <Typography variant='body2' color='text.disabled' sx={{ letterSpacing: '0.05em'}}>
            <b>Sort by</b>
            </Typography>
          </Box>
        </Box>
      </Box>
    )
}