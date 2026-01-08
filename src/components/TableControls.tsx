import { useState } from 'react';
import { Box, TextField, InputAdornment, Select, Typography, MenuItem, type SelectChangeEvent, FormControl, InputLabel } from '@mui/material';
import { 
  Close as CloseIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import type { DataProps } from '../types/ui';

export default function TableControls({searchBoxes, filterBoxes}: DataProps)  {

  const initialFilterValue:Record<string, string> = filterBoxes.reduce((acc, filterBox) =>{
    acc[filterBox.name] = '';
    return acc;
  },{} as Record<string, string>);
  
  const [filterValue, setFilterValue] = useState(initialFilterValue);

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;

    setFilterValue({
      ...initialFilterValue, //나머지 필터 값들은 초기화
      [name]: value,
    });
  };

    return (
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          {/* 검색 */}
          {searchBoxes ? searchBoxes.map((searchBox) => (
            <TextField
              key={searchBox.id}
              placeholder={searchBox.placeholder}
              size={searchBox.size}
              sx={{ minWidth: searchBox.minWidth }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <CloseIcon fontSize="small" />
                    </InputAdornment>
                  )
                }
              }}
            />
          )) : null} 
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" color="text.disabled" sx={{ letterSpacing: '0.07em'}}>
            <b>FILTER:</b>
          </Typography>
          
          {/* 필터 */}
          {filterBoxes.map((filterBox) => (
            <FormControl
              key={filterBox.name}
              size={filterBox.size}
              sx = {{ minWidth: filterBox.minWidth }}
            >
              <InputLabel id={filterBox.labelId}>{filterBox.label}</InputLabel>
              <Select
                name={filterBox.name}
                value={filterValue[filterBox.name]}
                labelId={filterBox.labelId}
                label={filterBox.label}
                onChange={handleChange}
              >
               {filterBox.menuBoxes.map((menuBox) => (
                  <MenuItem key={menuBox.value} value={menuBox.value}>{menuBox.value}</MenuItem>
               ))}
              </Select>
            </FormControl>
          ))}
        </Box>
      </Box>
    )
}