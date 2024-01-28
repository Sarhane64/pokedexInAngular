interface stat {
  name: string | null;
  url: string | null;
}

export interface baseStat {
  base_stat: number | null;
  effort: number | null;
  stat: stat;
}
