import React from 'react';
import { PaceContextProvider } from './pace-context-provider';
import { Output } from './output';
import { Distance } from './distance';
import { Time } from './time';
import { Submit } from './submit';

export const Pace = () => {
  return (
    <PaceContextProvider>
      <div
        style={{
          width: '50vw',
          backgroundColor: 'hsla(232, 30%, 15%, 1.0)',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          alignItems: 'center',
        }}
      >
        <Time />
        <Distance />
        <Output />
        <Submit />
      </div>
    </PaceContextProvider>
  );
};
