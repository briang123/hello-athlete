import React from 'react';

export const RaceResult = ({ bib, name, results, pace }) => {
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
