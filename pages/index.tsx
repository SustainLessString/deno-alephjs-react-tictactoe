import React from 'react';

import Game from "~/pages/tictactoe/Game.tsx";
import Start from "~/pages/tictactoe/Start.tsx";
import Finished from "~/pages/tictactoe/Finished.tsx";
import useTickTackToe from "~/pages/tictactoe/hooks/useTicTacToe.ts";

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