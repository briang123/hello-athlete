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
          />
        ))}
    </Table>
  );
};

export default Results;