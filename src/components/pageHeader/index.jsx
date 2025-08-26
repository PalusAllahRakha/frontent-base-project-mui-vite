import React, { useContext } from 'react';
import { Box, Select, MenuItem, Typography, Button } from '@mui/material';
import { FiUpload } from 'react-icons/fi';
import { useLocation } from 'react-router';
import { headerSelectOptions } from '../../pages/utils/constant';
import { GridContext } from '../../hooks/work-sheet-page-filter/work-sheet-page-select';

const PageHeader = () => {
  const { selectedOption, setSelectedOption } = useContext(GridContext);
  const location = useLocation();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const pageTitle = location.pathname === '/' ? 'Worksheet' : 'Search Terms';

  return (
    <Box padding='12px 24px' display='flex' alignItems='center' borderBottom='1px solid #E2E8F0' justifyContent='space-between'>
      <Typography fontSize={20} fontWeight={700} lineHeight={'28px'} color='#1A1919'>{pageTitle}</Typography>
      {location.pathname === '/' && <Select
        value={selectedOption}
        onChange={handleOptionChange}
        displayEmpty
        size="small"
        sx={{ minWidth: 150 }}
        renderValue={(selected) => {
          if (selected === '') {
            return <em>All</em>;
          }
          return selected;
        }}
      >
        {headerSelectOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>}
      {location.pathname === '/search-terms' && <Button variant="contained" startIcon={<FiUpload />}>Upload Search Terms File</Button>}
    </Box >
  );
};

export default PageHeader;
