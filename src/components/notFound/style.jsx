import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: calc(100vh - 124px);
grid-row-gap: 24px;
img{
  width:100%;
  max-width: 35%;
}
`;
export const Header = styled.div`
padding: 16px;
background-color: #fff;
border-bottom: 1px solid #ccc;
display: flex;
align-items: center;
justify-content: center;
img{
  max-width: 120px;
}
`;
