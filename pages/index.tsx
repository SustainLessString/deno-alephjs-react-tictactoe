import React from 'react';

import Game from "~/components/Game.tsx";
import Start from "~/components/Start.tsx";
import Finished from "~/components/Finished.tsx";
import useTickTackToe from "~/hooks/useTicTacToe.ts";

export default () => {
  const game = useTickTackToe();
  return (
    <div className="App">
      { game.status === "created" && <Start handleStart={game.handleStart} /> }
      { game.status === "finished" && <Finished name={game.winner} handleRestart={game.handleRestart} /> }
      { game.status === "started" &&<Game board={game.board} handleClick={game.handleClick} /> }
    </div>
  );
};