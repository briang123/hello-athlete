import React from 'react';
import { PaceContextProvider } from './pace-context-provider';
import { Output } from './output';
import { Distance } from './distance';
import { Time } from './time';
import { Submit } from './submit';

export const Pace = () => {
  return (
    <PaceContextProvider>
      <>
        <Time />
        <Distance />
        <Output />
        <Submit />
      </>
    </PaceContextProvider>
  );
};
