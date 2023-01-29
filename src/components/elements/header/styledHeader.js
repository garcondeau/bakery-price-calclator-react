import styled from 'styled-components';
import {StyledContainer} from "../container/styledContainer";

export const StyledHeader = styled.div`
  height: 60px;
  width: 100%;
  background: #0f0f0f;
`;

export const StyledHeaderContainer = styled(StyledContainer)`
  color: #ffffff;
  font-weight: 600;
  align-items: center;
  justify-content: space-between;
`;

export const AuthorLink = styled.a`
  width: 32px;
  height: 32px;
  color: #0f0f0f;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(130deg, #f39206, #f3f006);
  border-radius: 50%;
  transition: 0.2s;
  
  
  &:hover {
    box-shadow: 0 0 15px #f39206;
    color: #5f5f5f;
  }
  
  &:after {
    content: "G";
    font-size: 20px;
    font-weight: 600;
  }
`