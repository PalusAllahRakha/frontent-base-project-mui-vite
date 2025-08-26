import React from 'react';
import { Box, Select, MenuItem, Typography, Button } from '@mui/material';
import { FiUpload } from 'react-icons/fi';
import { useLocation } from 'react-router';
import { headerSelectOptions } from '../../pages/utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedOption } from '../../features/work-sheet/grid-selection';
import { openModal } from '../../features/search-terms/file-upload';

const PageHeader = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.grid.selectedOption);


  const handleOptionChange = (event) => {
    dispatch(setSelectedOption(event.target.value));
  };
  const openHandleFileUploadModal = () => {
    dispatch(openModal());
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
        sx={{ minWidth: 150, fontSize: 14, fontWeight: 400, color: '#222323' }}
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
      {location.pathname === '/search-terms' && <Button onClick={openHandleFileUploadModal} variant="contained" startIcon={<FiUpload />}>Upload Search Terms File</Button>}
    </Box >
  );
};

export default PageHeader;
