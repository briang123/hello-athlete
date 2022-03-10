import React from 'react';
import { calculatePace, fake5kRaceResults } from 'athlete-calculations';
import { RaceResult } from './race-result';
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
        boxSizing: 'border-box',
        height: '100vh',
        width: '100vw',
        overflow: 'scroll',
        // color: 'hsla(219, 95%, 76%, 1.0)',
        // backgroundColor: 'hsla(209, 100%, 9%, 1.0)',
        display: 'flex',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: '1.3rem',
        padding: 20,
        margin: 0,
        gap: 20,
      }}
    >
      {p.processResults(fakeResults).map(({ bib, name, results, pace }) => (
        <RaceResult bib={bib} name={name} results={results} pace={pace} />
      ))}
    </div>
  );
};

export default Results;
