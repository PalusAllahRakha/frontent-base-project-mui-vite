import { Box, ListItemButton } from '@mui/material';
import styled from 'styled-components';

export const SidebarContainer = styled(Box).withConfig({
  shouldForwardProp: (prop) => prop !== 'collapsed'
})`
  width: ${(props) => (props.collapsed ? '80px' : '280px')};
  height: 100vh;
  background-color: #ffffff;
  color: #333;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eaeaea;
  transition: width 0.3s ease;
  position: relative;
`;

export const LogoContainer = styled(Box).withConfig({
  shouldForwardProp: (prop) => prop !== 'collapsed'
})`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.collapsed ? 'center' : 'space-between')};
  padding:5.2px 16px;

  img {
    max-width: ${(props) => (props.collapsed ? '40px' : '120px')};
    transition: max-width 0.3s ease;
  }
`;

export const MenuSection = styled(Box)`
    margin: 16px;
    ul{
      padding: 0px;
      grid-row-gap: 8.5px;
      display: flex;
      flex-direction: column;
    }

`;

export const ActiveListItem = styled(ListItemButton)`
display: flex;
align-items: center;
grid-gap: 12px;
padding: ${(props) => (props.collapsed ? '5px 16px' : '5px 14px')} !important;
.MuiListItemIcon-root{
  min-width: auto;
  padding: 0 !important;
  svg{
    font-size: 20px;
  }
}
  &.active {
    background-color: #3370FF1A;
    color: #3370FF;
  }
  &.menu-item{
    border-radius: 4px;
  }
  &:hover {
    background-color: #eef3ff;
  }
`;

export const LogoutContainer = styled(Box)`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  margin: 0 16px;
  & > div{
    display: flex;
    align-items: center;
    grid-gap: 12px;
    .MuiListItemIcon-root{
      min-width: auto;
      padding: 0 !important;
      svg{
        font-size: 20px;
    }
  }
}
`;
