import React from 'react';
import { FinishedProps } from '~/pages/tictactoe/types/Props.types.ts';
const Finished = (props: FinishedProps) => {
  const { name, handleRestart } = props;
  return (
    <div>
      <h1>
        {name && `Player ${name} won the game`}
        {!name && "It's a tie "}
      </h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};
export default Finished;