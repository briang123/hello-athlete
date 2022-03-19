import React from 'react';
import { PaceContextProvider } from './pace-context-provider';
import { Answer } from './answer';
import { Output } from './output';
import { Distance } from './distance';
import { Time } from './time';
import { Submit } from './submit';
import { theme } from './../../theme.styles';
export const Pace = ({title}) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <PaceContextProvider>
      <div
        // autoComplete="off"
        style={{
          width: '50vw',
          backgroundColor: theme.colors.black1,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          alignItems: 'center',
        }}
      >
        <Answer />
        <Time />
        <Distance />
        <Output />
        <Submit />
      </div>
    </PaceContextProvider>
  );
};
