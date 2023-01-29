import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 900px;
  height: ${props => props.content ? "calc(100vh - 60px)" : "100%"};
  margin: 0 auto;
  padding: ${props => props.content ? "60px 30px 0" : "0"};
  display: flex;
  
  @media screen and (max-width: 992px) {
    max-width: 90%;
  }
`;