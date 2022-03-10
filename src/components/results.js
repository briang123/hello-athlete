import React from 'react'
import { calculatePace, fake5kRaceResults } from 'athlete-calculations';

export const Results = () => {
  function fakeData() {
    return {
      fetch: () => fake5kRaceResults,
    };
  }

  function pace() {
    return {
      processResults: (data) =>
        data.map((resultItem) => {
          const { distance, units, hours, minutes, seconds } = resultItem;
          return {
            ...resultItem,
            pace: calculatePace({
              distance: { traveled: distance, units },
              time: {
                hours,
                minutes,
                seconds,
                units,
              },
              format: '%M:%SS',
            }).pace.formatted,
          };
        }),
    };
  }

  const faker = fakeData();
  const fakeResults = faker.fetch();
  const p = pace();

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        color: 'hsla(219, 95%, 76%, 1.0)',
        backgroundColor: 'hsla(209, 100%, 9%, 1.0)',
        display: 'flex',
        alignContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: '1.3rem',
        padding: 20,
        margin: 0,
        gap: 40,
      }}
    >
      {p.processResults(fakeResults).map((result) => (
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
            gap: '20px',
            padding: 0,
          }}
          key={result.bib}
        >
          <div>{result.bib}</div>
          <div>{result.name}</div>
          <div>{result.results}</div>
          <div>{result.pace}</div>
        </div>
      ))}
    </div>
  );
};

export default Results;