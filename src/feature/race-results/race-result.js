import React from 'react';
import styled, { css } from 'styled-components';

export const RaceResult_OLD = ({ bib, name, results, pace }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        border: '3px solid hsla(205, 83%, 16%, 1.0)',
        borderRadius: '50%',
        height: '200px',
        width: '200px',
        gap: '10px',
        padding: 0,
      }}
      key={bib}
    >
      <div>{bib}</div>
      <div>{name}</div>
      <div>{results}</div>
      <div style={{ color: 'red' }}>{pace}</div>
      <div style={{ fontSize: '.7em', marginTop: '-5px', color: 'red' }}>
        Pace Calculated
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <HeaderRow>
      <Cell width={100}>Bib</Cell>
      <Cell width={400}>Name</Cell>
      <Cell>Results</Cell>
      <HighlightedCell width={150}>Pace</HighlightedCell>
    </HeaderRow>
  );
};

export const RaceResult = ({ index, bib, name, results, pace }) => {
  return (
    <Row index={index}>
      <Cell width={100}>{bib}</Cell>
      <Cell width={400}>{name}</Cell>
      <Cell>{results}</Cell>
      <HighlightedCell width={150}>{pace}</HighlightedCell>
    </Row>
  );
};

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
    background-color: ${index % 2 
      ? 'hsla(235, 24%, 21%, 1.0)'
      : 'hsla(235, 26%, 16%, 1.0)'};
  `}
`;

export const Cell = styled.div`
  color: hsla(231, 29%, 82%, 1);
  box-sizing: border-box;
  ${({ width }) => css`
    width: ${!!width ? `${width}px` : '200px'};
    /* border: 1px solid red; */
  `}
`;

export const HeaderRow = styled(Row)`
  background-color: hsla(235, 26%, 16%, 1);

  && ${Cell} {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export const HighlightedCell = styled(Cell)`
  color: hsla(143, 100%, 41%, 1);
`;
