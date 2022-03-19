import React from 'react';
import Square from "./Square.tsx";
import { useGameProps } from '~/pages/tictactoe/types/Props.types.ts';

const Game = (props: useGameProps) => {
  const { board, handleClick } = props;
  const styles = {
    board: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      width: "300px"
    }
  };
  return (
    <div style={styles.board}>
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
export default Game;