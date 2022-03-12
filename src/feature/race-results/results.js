import React from 'react';
import { calculatePace, fake5kRaceResults } from 'athlete-calculations';
import { RaceResult, Header } from './race-result';
import { Table } from './results.styles';

export const Results = () => {
  function fakeData() {
    return {
      fetch: () => fake5kRaceResults,
    };
  }

  function pace() {
    return {
      paceColor: (pace, colors) => {
        const minute = pace.charAt(0);
        return colors[minute];
      },
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

  const paceColorMapping = {
    6: `var(--success)`,
    7: `var(--warning)`,
    8: `var(--danger)`,
    9: `var(--pink)`,
  };

  return (
    <Table>
      <Header />
      {p
        .processResults(fakeResults)
        .map(({ bib, name, results, pace }, index) => (
          <RaceResult
            key={bib}
            index={index}
            bib={bib}
            name={name}
            results={results}
            pace={pace}
            paceColor={p.paceColor(pace, paceColorMapping)}
          />
        ))}
    </Table>
  );
};

export default Results;
