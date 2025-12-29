
export interface Lottery {
  id: string;
  name: string;
  jackpot: number;
  drawDate: string;
  ticketPrice: number;
  participants: number;
  status: 'active' | 'drawn' | 'upcoming';
  image: string;
}

export interface Ticket {
  id: string;
  lotteryId: string;
  numbers: number[];
  purchaseDate: string;
  isWinner: boolean;
  prizeAmount?: number;
}

export interface User {
  id: string;
  email: string;
  balance: number;
  name: string;
}

export interface PredictionResult {
  luckyNumbers: number[];
  reasoning: string;
  luckScore: number;
}
