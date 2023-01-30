import styled from 'styled-components';

export const StyledTitle = styled.h1`
  margin: 30px 0 10px;
  font-size: 36px;
  color: #0f0f0f;
  line-height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  
  &:before {
    content: '';
    width: 6px;
    height: 30px;
    margin-right: 5px;
    background: linear-gradient(130deg, #f39206, #f3f006);
  }
`;