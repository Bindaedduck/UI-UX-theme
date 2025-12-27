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
            placeholder="프로젝트 검색"
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
            placeholder="마감일 검색"
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
          <Select value={10} size="small"
            >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>

          <Select sx={{mr: 1}}
            value={10} 
            size="small">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
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