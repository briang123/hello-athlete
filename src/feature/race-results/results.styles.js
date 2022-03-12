import styled, { css } from 'styled-components';
import { theme } from './../../theme.styles';

export const Table = styled.div`
  background-color: ${theme.colors.black1};
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
  gap: 5px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  gap: 10px;
  width: 95%;
  padding: 10px;
  border-radius: 15px;

  ${({ index }) => css`
    background-color: ${index % 2 ? theme.colors.black3 : theme.colors.black2};
  `}
`;

export const Cell = styled.div`
  ${theme.font.body}
  color: ${theme.colors.light};
  ${({ width }) => css`
    width: ${!!width ? `${width}` : '200px'};
  `}
`;

export const HeaderRow = styled(Row)`
  background-color: ${theme.colors.black2};

  && ${Cell} {
    ${theme.font.header}
  }
`;

export const GradientText = styled(Cell)`
  font-weight: bold;
  ${theme.gradient.color2};
`;

export const HighlightedCell = styled(Cell)`
  ${({ bgColor }) => css`
    font-weight: bold;
    border-radius: 8px;
    background-color: var(--primary);
    background-color: ${bgColor};
    width: 150px;
    padding: 4px 8px;
  `}
`;
