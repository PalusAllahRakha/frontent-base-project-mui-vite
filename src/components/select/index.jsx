import { Box, Typography } from '@mui/material';
import React from 'react';

import { SelectWrapper } from './style.jsx';

const CustomSelect = ({
  label,
  options,
  placeholder = 'Select...',
  isMulti = false,
  isClearable = true,
  isSearchable = true,
  onChange,
  value,
  menuPlacement = 'top',
  borderLess = false,
  ...rest
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {label && (
        <Typography fontSize={14} lineHeight={'20px'} fontWeight={500}>
          {label}
        </Typography>
      )}
      <SelectWrapper
        menuPlacement={menuPlacement}
        options={options}
        placeholder={placeholder}
        isMulti={isMulti}
        isClearable={isClearable}
        isSearchable={isSearchable}
        onChange={onChange}
        value={value}
        borderLess={borderLess}
        size="small"
        {...rest}
      />
    </Box>
  );
};

export default CustomSelect;
