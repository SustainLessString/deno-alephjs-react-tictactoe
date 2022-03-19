export interface FinishedProps {
  name: string | null;
  handleRestart(): void;
}

export interface GameProps {
  board: string[];
  handleClick(index: number): void;
}

export interface SquareProps {
  index: number;
  value: string;
  handleClick(index: number): void;
}

export interface StartProps {
  handleStart(players: string[]): void;
}

export interface useGameProps {
  board: string[];
  status: string;
  winner: string | null;

  handleClick: (index: number) => void;
  handleRestart: () => void;
  handleStart: (players: string[]) => void;
}