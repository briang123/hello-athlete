import React from 'react';
import { HeaderRow, Cell, HighlightedCell, Row } from './results.styles';

export const Header = () => {
  return (
    <HeaderRow>
      <Cell width={`20%`}>Bib</Cell>
      <Cell width={`40%`}>Name</Cell>
      <Cell width={`20%`}>Results</Cell>
      <Cell width={`150px`}>Pace</Cell>
    </HeaderRow>
  );
};

export const RaceResult = ({ index, bib, name, results, pace, paceColor }) => {
  return (
    <Row index={index}>
      <Cell width={`20%`}>{bib}</Cell>
      <Cell width={`40%`}>{name}</Cell>
      <Cell width={`20%`}>{results}</Cell>
      <HighlightedCell bgColor={paceColor} width={`20%`}>{pace}</HighlightedCell>
    </Row>
  );
};
