import React from 'react';
import { PaceContextProvider } from './pace-context-provider';
import { Output } from './output';
import { Distance } from './distance';
import { Time } from './time';
import { Submit } from './submit';
import { theme } from './../../theme.styles'
export const Pace = () => {
  return (
    <PaceContextProvider>
      <div
        style={{
          width: '50vw',
          backgroundColor: theme.colors.black1,
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
