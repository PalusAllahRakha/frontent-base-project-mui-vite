import Select from 'react-select';
import styled from 'styled-components';

export const SelectWrapper = styled(Select)`
  span.css-1u9des2-indicatorSeparator {
    display: none;
}
.css-13cymwt-control {
  cursor: pointer;
  border:${({ borderLess }) => borderLess ? 'none' : '1px solid #ECEFF1'};
  outline:none;
}
.css-hlgwow {
    padding-right: ${({ borderLess }) => borderLess ? '0px' : '8px'};
}
`;
