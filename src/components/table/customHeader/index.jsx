import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  Popover,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  Button,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import React, { useState } from 'react';
import { BsPinAngle } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { LuArrowRightLeft, LuArrowUp, LuArrowDown } from 'react-icons/lu';
import DateRangeFilter from '../../datePicker/index.jsx';
import StaticInput from '../../input/index.jsx';
import { operators } from '../../../pages/utils/constant/index.jsx';

const CustomHeader = (props) => {
  const {
    enableSorting,
    enablePin,
    setSort,
    column,
    api,
    comparison,
    search,
    filterOptions,
    enableDateFilter
  } = props;

  const [sort, setSortState] = useState(column.getSort());
  const [anchorElPin, setAnchorElPin] = useState(null);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [searchText, setSearchText] = useState('');
  const [comparisonOperator, setComparisonOperator] = useState('<');
  const [comparisonValue, setComparisonValue] = useState('');
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });
  const [appliedOption, setAppliedOption] = useState('');
  const [appliedSearchText, setAppliedSearchText] = useState('');
  const [appliedDateRange, setAppliedDateRange] = useState(null);

  React.useEffect(() => {
    const onSortChanged = () => setSortState(column.getSort());
    column.addEventListener('sortChanged', onSortChanged);
    return () => column.removeEventListener('sortChanged', onSortChanged);
  }, [column]);

  const onSortClicked = (e) => {
    if (!enableSorting) return;

    const multi = e?.shiftKey;
    if (sort === 'asc') {
      setSort('desc', multi);
    } else if (sort === 'desc') {
      setSort(null, multi);
    } else {
      setSort('asc', multi);
    }
  };

  const handlePinClick = (event) => setAnchorElPin(event.currentTarget);
  const handlePinClose = () => setAnchorElPin(null);

  const handleOperatorChange = (event, newOp) => {
    if (newOp !== null) setComparisonOperator(newOp);
  };

  const handleComparisonValueChange = (event) => {
    setComparisonValue(event.target.value);
  };

  const handleApplyComparison = () => {
    setAppliedOption(comparisonOperator);
    setAppliedSearchText(comparisonValue);
    handleFilterClose();
  };

  const handlePin = (side) => {
    api.setColumnPinned(column.getColId(), side);
    console.log({ ID: column.getColId() });

    if (side) {
      localStorage.setItem(`${column.getColId()}_pinned`, side);
    } else {
      localStorage.removeItem(`${column.getColId()}_pinned`);
    }

    handlePinClose();
  };

  const handleFilterClick = (event) => setAnchorElFilter(event.currentTarget);
  const handleFilterClose = () => setAnchorElFilter(null);

  const handleOptionChange = (event) => setSelectedOption(event.target.value);
  const handleSearchChange = (event) => setSearchText(event.target.value);

  const handleClearFilter = () => {
    setSelectedOption('');
    setSearchText('');
    setDateRange({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    });
    setAppliedOption('');
    setAppliedSearchText('');
    setAppliedDateRange(null);
  };

  const handleApplyFilter = () => {
    setAppliedOption(selectedOption);
    setAppliedSearchText(searchText);
    setAppliedDateRange(dateRange);
    handleFilterClose();
  };

  const isFiltered = Boolean(appliedSearchText || appliedOption) || Boolean(appliedDateRange);

  return (
    <>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        gap: 0.5,
        p: 0.5
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{ cursor: 'pointer' }}
            paddingRight={0.5}
            onClick={onSortClicked}
            fontWeight="500"
            fontSize="12px"
            color="#535E63"
          >
            {column.getColDef().headerName}
          </Typography>

          {enableSorting && (
            <Tooltip title="Sort">
              <IconButton
                size="small"
                onClick={onSortClicked}
                color={sort ? 'primary' : 'default'}
              >
                {sort === 'asc' && <LuArrowUp fontSize="0.9rem" />}
                {sort === 'desc' && <LuArrowDown fontSize="0.9rem" />}
                {sort == null && (
                  <LuArrowRightLeft
                    style={{ opacity: 0.4, transform: 'rotate(90deg)' }}
                    fontSize="0.9rem"
                  />
                )}
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {enablePin ? null : (
            <Tooltip title="Pin column">
              <IconButton size="small" onClick={handlePinClick}>
                <BsPinAngle
                  fontSize="0.9rem"
                  color={column.isPinned() ? 'blue' : 'inherit'}
                />
              </IconButton>
            </Tooltip>
          )}

          {!isFiltered ? (
            <Tooltip title="Filter column">
              <IconButton size="small" onClick={handleFilterClick}>
                <FiFilter fontSize="0.9rem" />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Clear filter">
              <IconButton size="small" onClick={handleClearFilter}>
                <IoClose fontSize="0.9rem" />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>

      <Popover
        open={Boolean(anchorElFilter)}
        anchorEl={anchorElFilter}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <Box sx={{
          p: 2,
          width: enableDateFilter ? 'fit-content' : 320,
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}>
          {comparison ? (
            <Box display="flex" flexDirection="column" gap={'8px'}>
              <ToggleButtonGroup
                value={comparisonOperator}
                exclusive
                onChange={handleOperatorChange}
                size="small"
                fullWidth
                sx={{
                  display: 'flex',
                  gap: '6px',
                  alignItems: 'center'
                }}
              >
                {operators.map((op) => (
                  <ToggleButton
                    key={op.value}
                    value={op.value}
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      border: '1px solid #ECEFF1 !important',
                      borderRadius: '4px !important',
                      padding: '0px',
                      color: '#9c9aa5',
                      '&.Mui-selected': {
                        border: '1px solid #3370FF !important',
                        backgroundColor: '#fff !important',
                        color: '#3370FF',
                      },
                      '&.Mui-selected:hover': {
                        backgroundColor: '#fff !important',
                        color: '#3370FF',
                      },
                      '&.Mui-selected:active': {
                        backgroundColor: '#fff !important',
                        color: '#3370FF',
                      },
                      '&.Mui-selected:focus': {
                        backgroundColor: '#fff !important',
                        color: '#3370FF',
                      },
                      '&.Mui-selected:disabled': {
                        backgroundColor: '#fff !important',
                        color: '#3370FF',
                      },
                      '&:hover': {
                        backgroundColor: '#fff !important',
                        border: '1px solid #3370FF !important',
                        color: '#3370FF',
                      },
                    }}
                  >
                    {op.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>

              <StaticInput
                size="small"
                type="number"
                placeholder="Enter value"
                value={comparisonValue}
                onChange={handleComparisonValueChange}
                fullWidth
                sx={{
                  '& input::-webkit-outer-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0
                  },
                  '& input::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0
                  }
                }}
              />

              <Button
                variant="contained"
                size="small"
                onClick={handleApplyComparison}
              >
                Apply Now
              </Button>
            </Box>
          ) : (
            <>
              {!search && filterOptions?.length > 0 ? (
                <Select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  displayEmpty
                  fullWidth
                  size="small"
                >
                  <MenuItem value="">All</MenuItem>
                  {filterOptions.map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </Select>
              ) : (
                <StaticInput
                  size="small"
                  placeholder="Search..."
                  value={searchText}
                  onChange={handleSearchChange}
                  fullWidth
                />
              )}

              {enableDateFilter ? (
                <DateRangeFilter
                  range={dateRange}
                  onChange={(ranges) => setDateRange(ranges.selection)}
                  onApply={(r) => {
                    setAppliedDateRange(r);
                    handleApplyFilter();
                  }}
                  onCancel={handleFilterClose}
                />
              ) : (
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleApplyFilter}
                >
                  Apply
                </Button>
              )}
            </>
          )}
        </Box>
      </Popover>
    </>
  );
};

export default CustomHeader;
