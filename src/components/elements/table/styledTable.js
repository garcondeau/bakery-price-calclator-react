import styled from 'styled-components';

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTableHeader = styled.div`
  font-weight: 600;
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid rgba(0,0,0,0.2);
`;

export const StyledTableBody = styled.div``;

export const StyledTableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  
  &:nth-child(2n) {
    background: rgba(0, 0, 0, 0.05);
  }
  
  &.price {
    background: #0f0f0f;
    color: #ffffff;
  }
`;

export const StyledTableCell = styled.div`
  padding: 10px 15px;
`;