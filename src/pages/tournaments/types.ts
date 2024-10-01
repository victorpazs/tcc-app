export interface ITournament {
  _id: string;
  name: string;
  logo?: string;
  endDate: Date;
  startDate: Date;
}

export type FilterTournaments = {
  limit?: number;
};
