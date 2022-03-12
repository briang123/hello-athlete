import React from 'react';
import { calculatePace, fake5kRaceResults } from 'athlete-calculations';
import styled from 'styled-components';
import { RaceResult, Header } from './race-result';
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

export const Table = styled.div`
  background-color: hsla(232, 30%, 15%, 1);
  box-sizing: border-box;
  height: 100vh;
  width: 50vw;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  margin: 0 10px 30px;
  gap: 5px;
`;
