import React from 'react';
import { HeaderRow, Cell, HighlightedCell, Row } from './results.styles';

export const Header = () => {
  return (
    <HeaderRow>
      <Cell width={`20%`}>Bib</Cell>
      <Cell width={`40%`}>Name</Cell>
      <Cell width={`20%`}>Results</Cell>
      <HighlightedCell width={`20%`}>Pace</HighlightedCell>
    </HeaderRow>
  );
};

export const RaceResult = ({ index, bib, name, results, pace }) => {
  return (
    <Row index={index}>
      <Cell width={`20%`}>{bib}</Cell>
      <Cell width={`40%`}>{name}</Cell>
      <Cell width={`20%`}>{results}</Cell>
      <HighlightedCell width={`20%`}>{pace}</HighlightedCell>
    </Row>
  );
};
