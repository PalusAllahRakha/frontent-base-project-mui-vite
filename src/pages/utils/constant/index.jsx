import React from 'react';
import { IoGridOutline } from 'react-icons/io5';
import { LiaFileSignatureSolid } from 'react-icons/lia';

import CustomHeader from '../../../components/table/customHeader/index.jsx';

export const menuItems = [
  { label: 'Worksheet', path: '/', icon: <IoGridOutline /> },
  { label: 'Search Terms', path: '/search-terms', icon: <LiaFileSignatureSolid /> }
];

export const WorksheetRowData = [
  {
    id: 1,
    name: 'Go Forward or Obsolete',
    Category: 'Category',
    Style: 'Style',
    ASIN: 'ASIN',
    TeamName: 'Team Name',
    DIM: 'DIM',
    ColorCode: 'Color Code',
    IMAGES: 'IMAGES',
    AMZLINK: 'AMZLINK',
    AMZVCINV: 'AMZVCINV',
    OTSQOH: 'OTSQOH',
    QOHQTY: 'QOHQTY',
    WIPQTY: 'WIPQTY',
    DFYTDUnitSold: 'DFYTDUnitSold',
    OpenQTY: 'OpenQTY',
    WTDUnitsSold: 'WTDUnitsSold',
    YTDUnitsSold: 'YTDUnitsSold',
    YOYGrowthUnits2024to2025: 'YOYGrowthUnits2024to2025',
    UnitsSold2024: 'UnitsSold2024',
    YOYGrowthUnits: 'YOYGrowthUnits',
    UnitsSold: 'UnitsSold',
    UnitsSold2023: 'UnitsSold2023',
    UnitsSold2022: 'UnitsSold2022',
    MTDCanceledUnits: 'MTDCanceledUnits',
    AmazonCost: 'AmazonCost',
    LastDatePOsReceived: 'LastDatePOsReceived'
  },
  {
    id: 2,
    name: 'Go Forward or Obsolete',
    Category: 'Category',
    Style: 'Style',
    ASIN: 'ASIN',
    TeamName: 'Team Name',
    DIM: 'DIM',
    ColorCode: 'Color Code',
    IMAGES: 'IMAGES',
    AMZLINK: 'AMZLINK',
    AMZVCINV: 'AMZVCINV',
    OTSQOH: 'OTSQOH',
    QOHQTY: 'QOHQTY',
    WIPQTY: 'WIPQTY',
    DFYTDUnitSold: 'DFYTDUnitSold',
    OpenQTY: 'OpenQTY',
    WTDUnitsSold: 'WTDUnitsSold',
    YTDUnitsSold: 'YTDUnitsSold',
    YOYGrowthUnits2024to2025: 'YOYGrowthUnits2024to2025',
    UnitsSold2024: 'UnitsSold2024',
    YOYGrowthUnits: 'YOYGrowthUnits',
    UnitsSold: 'UnitsSold',
    UnitsSold2023: 'UnitsSold2023',
    UnitsSold2022: 'UnitsSold2022',
    MTDCanceledUnits: 'MTDCanceledUnits',
    AmazonCost: 'AmazonCost',
    LastDatePOsReceived: 'LastDatePOsReceived'
  },
  {
    id: 3,
    name: 'Go Forward or Obsolete',
    Category: 'Category',
    Style: 'Style',
    ASIN: 'ASIN',
    TeamName: 'Team Name',
    DIM: 'DIM',
    ColorCode: 'Color Code',
    IMAGES: 'IMAGES',
    AMZLINK: 'AMZLINK',
    AMZVCINV: 'AMZVCINV',
    OTSQOH: 'OTSQOH',
    QOHQTY: 'QOHQTY',
    WIPQTY: 'WIPQTY',
    DFYTDUnitSold: 'DFYTDUnitSold',
    OpenQTY: 'OpenQTY',
    WTDUnitsSold: 'WTDUnitsSold',
    YTDUnitsSold: 'YTDUnitsSold',
    YOYGrowthUnits2024to2025: 'YOYGrowthUnits2024to2025',
    UnitsSold2024: 'UnitsSold2024',
    YOYGrowthUnits: 'YOYGrowthUnits',
    UnitsSold: 'UnitsSold',
    UnitsSold2023: 'UnitsSold2023',
    UnitsSold2022: 'UnitsSold2022',
    MTDCanceledUnits: 'MTDCanceledUnits',
    AmazonCost: 'AmazonCost',
    LastDatePOsReceived: 'LastDatePOsReceived'
  }
];

export const WorksheetColumnDefinitions = [
  {
    colId: 'goForward',
    headerName: 'Go Forward or Obsolete',
    pinned: localStorage.getItem('goForward_pinned'),
    headerComponent: CustomHeader,
    field: 'name',
    sortable: true,
    minWidth: 280,
    filter: false,
    headerComponentParams: {
      filterOptions: ['Go Forward or Obsolete', 'Jane', 'Michael']
    }
  },
  {
    colId: 'category',
    headerName: 'Category',
    pinned: localStorage.getItem('category_pinned'),
    headerComponent: CustomHeader,
    field: 'Category',
    sortable: true,
    minWidth: 200,
    filter: true,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'style',
    headerName: 'Style',
    pinned: localStorage.getItem('style_pinned'),
    field: 'Style',
    sortable: true,
    minWidth: 190,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'asin',
    headerName: 'ASIN',
    pinned: localStorage.getItem('asin_pinned'),
    field: 'ASIN',
    sortable: true,
    minWidth: 190,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'teamName',
    headerName: 'Team Name',
    pinned: localStorage.getItem('teamName_pinned'),
    field: 'TeamName',
    sortable: true,
    minWidth: 210,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'dim',
    headerName: 'DIM',
    pinned: localStorage.getItem('dim_pinned'),
    field: 'DIM',
    sortable: true,
    minWidth: 190,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'colorCode',
    headerName: 'Color Code',
    pinned: localStorage.getItem('colorCode_pinned'),
    field: 'ColorCode',
    sortable: true,
    minWidth: 220,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'images',
    headerName: 'IMAGES',
    pinned: localStorage.getItem('images_pinned'),
    field: 'IMAGES',
    sortable: false,
    suppressMenu: true,
    minWidth: 120,
    filter: false
  },
  {
    colId: 'amzLink',
    headerName: 'AMZ LINK',
    pinned: localStorage.getItem('amzLink_pinned'),
    field: 'AMZLINK',
    sortable: true,
    minWidth: 220,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'amzVCINV',
    headerName: 'AMZ VC INV',
    pinned: localStorage.getItem('amzVCINV_pinned'),
    field: 'AMZVCINV',
    sortable: true,
    minWidth: 220,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'otsqoh',
    headerName: 'OTSQOH',
    pinned: localStorage.getItem('otsqoh_pinned'),
    field: 'OTSQOH',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'qohqty',
    headerName: 'QOHQTY',
    pinned: localStorage.getItem('qohqty_pinned'),
    field: 'QOHQTY',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'wipqty',
    headerName: 'WIP QTY',
    pinned: localStorage.getItem('wipqty_pinned'),
    field: 'WIPQTY',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'dfytdunitSold',
    headerName: 'DF YTD Unit Sold',
    pinned: localStorage.getItem('dfytdunitSold_pinned'),
    field: 'DFYTDUnitSold',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'openqty',
    headerName: 'OpenQTY',
    pinned: localStorage.getItem('openqty_pinned'),
    field: 'OpenQTY',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'wtdunitsSold',
    headerName: 'WTD UNITS SOLD',
    pinned: localStorage.getItem('wtdunitsSold_pinned'),
    field: 'WTDUnitsSold',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'ytdunitsSold',
    headerName: 'YTD UNITS SOLD',
    pinned: localStorage.getItem('ytdunitsSold_pinned'),
    field: 'YTDUnitsSold',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'yoygrowthunits2024to2025',
    headerName: 'YOY Growth % Units 2024 to 2025',
    pinned: localStorage.getItem('yoygrowthunits2024to2025_pinned'),
    field: 'YOYGrowthUnits2024to2025',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'unitsSold2024',
    headerName: '2024 UNITS SOLD',
    pinned: localStorage.getItem('unitsSold2024_pinned'),
    field: 'UnitsSold2024',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'unitsSold2023',
    headerName: '2023 UNITS SOLD',
    pinned: localStorage.getItem('unitsSold2023_pinned'),
    field: 'UnitsSold2023',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'unitsSold2022',
    headerName: '2022 UNITS SOLD',
    pinned: localStorage.getItem('unitsSold2022_pinned'),
    field: 'UnitsSold2022',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'mtdcanceledunits',
    headerName: 'MTD Canceled Units',
    pinned: localStorage.getItem('mtdcanceledunits_pinned'),
    field: 'MTDCanceledUnits',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'amazonCost',
    headerName: 'Amazon Cost',
    pinned: localStorage.getItem('amazonCost_pinned'),
    field: 'AmazonCost',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  },
  {
    colId: 'lastDatePOsReceived',
    headerName: 'Last Date PO\'s Received',
    pinned: localStorage.getItem('lastDatePOsReceived_pinned'),
    field: 'LastDatePOsReceived',
    sortable: true,
    minWidth: 280,
    filter: true,
    headerComponent: CustomHeader,
    headerComponentParams: {
      filterOptions: [],
      search: true
    }
  }
];
export const SearchTermsRowData = [
  {
    Date: '2024-01-01',
    NoOfASINs: 10,
    Status: 'Active',
    Errors: 0,
    File: 'file1'
  },
  {
    Date: '2024-02-01',
    NoOfASINs: 10,
    Status: 'Active',
    Errors: 3,
    File: 'file2'
  },
  {
    Date: '2024-03-01',
    NoOfASINs: 10,
    Status: 'Active',
    Errors: 2,
    File: 'file3'
  }
];
export const SearchTermsColumnDefinitions = [
  {
    headerName: 'Date',
    headerComponent: CustomHeader,
    field: 'Date',
    sortable: true,
    minWidth: 280,
    filter: false,
    headerComponentParams: {
      enableDateFilter: true,
      enablePin: true
    }
  },
  {
    headerName: 'No of ASINs',
    headerComponent: CustomHeader,
    field: 'NoOfASINs',
    sortable: true,
    minWidth: 280,
    filter: false,
    headerComponentParams: {
      filterOptions: [],
      search: true,
      enablePin: true
    }
  },
  {
    headerName: 'Status',
    headerComponent: CustomHeader,
    field: 'Status',
    sortable: true,
    minWidth: 280,
    filter: false,
    headerComponentParams: {
      filterOptions: ['Completed', 'Pending'],
      enablePin: true
    }
  },
  {
    headerName: 'Errors',
    headerComponent: CustomHeader,
    field: 'Errors',
    sortable: true,
    minWidth: 280,
    filter: false,
    headerComponentParams: {
      search: true,
      enablePin: true
    }
  },
  {
    headerName: 'File',
    suppressMenu: true,
    field: 'File',
    sortable: false,
    minWidth: 280,
    filter: false
  }
];

export const headerSelectOptions = [
  { value: 'AMSNBAPerSize', label: 'AMS NBA per size' },
  { value: 'AMSNNCA', label: 'AMS NCAA' },
  { value: 'AMSNNCAPerSize', label: 'AMS NCAA per size' },
  { value: 'AMSWNBA', label: 'AMS WNBA' },
  { value: 'AMSWNBAPerSize', label: 'AMS WNBA per size' },
  { value: 'AMSNFL', label: 'AMS NFL' },
  { value: 'AMSNFLPerSize', label: 'AMS NFL per size' }
];

export const defaultColDef = {
  resizable: true,
  flex: 1,
  sortable: true,
  filter: true,
  suppressMenu: true
};

export const borderlessSelectSx = {
  minWidth: 70,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  fontSize: 12
};
export const AMSNBAPerSizeRowData = [
  { id: 1, name: 'NBA Size A', Category: 'Jersey', Style: 'Slim', ASIN: 'B0001' },
  { id: 2, name: 'NBA Size B', Category: 'Shorts', Style: 'Loose', ASIN: 'B0002' },
];

export const AMSNBAPerSizeColumnDefs = [
  {
    colId: 'goForward',
    headerName: 'Go Forward or Obsolete',
    pinned: localStorage.getItem('goForward_pinned'),
    headerComponent: CustomHeader,
    field: 'name',
    sortable: true,
    minWidth: 280,
    filter: false,
  },
  {
    colId: 'category',
    headerName: 'Category',
    pinned: localStorage.getItem('category_pinned'),
    headerComponent: CustomHeader,
    field: 'Category',
    sortable: true,
    minWidth: 200,
    filter: true,
  },
  {
    colId: 'style',
    headerName: 'Style',
    pinned: localStorage.getItem('style_pinned'),
    field: 'Style',
    sortable: true,
    minWidth: 190,
    filter: true,
    headerComponent: CustomHeader,
  },
  {
    colId: 'asin',
    headerName: 'ASIN',
    pinned: localStorage.getItem('asin_pinned'),
    field: 'ASIN',
    sortable: true,
    minWidth: 190,
    filter: true,
    headerComponent: CustomHeader,
  },
];
export const AMSNNCARowData = [
  { id: 1, name: 'NCAA A', Category: 'Cap', Style: 'Snapback', ASIN: 'C1001' },
  { id: 2, name: 'NCAA B', Category: 'Hoodie', Style: 'Pullover', ASIN: 'C1002' },
];

export const AMSNNCAColumnDefs = [
  {
    colId: 'goForward',
    headerName: 'Go Forward or Obsolete',
    field: 'name',
    sortable: true,
    minWidth: 280,
    headerComponent: CustomHeader,
  },
  {
    colId: 'category',
    headerName: 'Category',
    field: 'Category',
    sortable: true,
    minWidth: 200,
    filter: true,
    headerComponent: CustomHeader,
  },
  {
    colId: 'style',
    headerName: 'Style',
    field: 'Style',
    sortable: true,
    minWidth: 190,
    filter: true,
    headerComponent: CustomHeader,
  },
  {
    colId: 'asin',
    headerName: 'ASIN',
    field: 'ASIN',
    sortable: true,
    minWidth: 190,
    filter: true,
    headerComponent: CustomHeader,
  },
  {
    colId: 'teamName',
    headerName: 'Team Name',
    field: 'TeamName',
    sortable: true,
    minWidth: 210,
    filter: true,
    headerComponent: CustomHeader,
  },
];
