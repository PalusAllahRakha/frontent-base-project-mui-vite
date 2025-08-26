// DateRangeFilter.jsx
import { Box, Button } from '@mui/material';
import React from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangeFilter = ({
  range,
  onChange,
  showPreview = false,
  showSelectionPreview = true,
  moveRangeOnFirstSelection = false,
  minDate,
  maxDate,
  color = '#3f51b5',
  onApply,
  onCancel
}) => {
  return (
    <Box>
      <DateRangePicker
        ranges={[range]}
        onChange={onChange}
        showPreview={showPreview}
        showSelectionPreview={showSelectionPreview}
        moveRangeOnFirstSelection={moveRangeOnFirstSelection}
        minDate={minDate}
        maxDate={maxDate}
        rangeColors={[color]}
        editableDateInputs={true}
      />

      <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
        {onCancel && (
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        )}
        {onApply && (
          <Button variant="contained" onClick={() => onApply(range)}>
            Apply
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default DateRangeFilter;
