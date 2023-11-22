const starobrnoMedium = {
  name: 'Medium',
  volume: 0.5,
  alc: 4.7,
  drunkedMe: (pieces) => pieces > 4,
  onStock: true,
  ingredients: {
    'chmel': 0.2,
    'oxidVodicity': 0.99,
    'slad': 0.5,
    'chmelName': 'Poloranný červeňák',
    // ... další položky, které jsou číselné nebo řetězcové
  },
  iGonnaPay: () => {
    const rnd = Math.random();
    if (rnd > 0.75) {
      return true;
    }
  }
};

//0 Preferuji prefix T pro typy z důvodu čitelnosti
type Pivo = {
  name: string;
  volume: number;
  alc: number;
  drunkedMe: (pieces: number) => boolean;
  onStock: boolean;
  // ingredients: Record<string, number | string>;
  ingredients: {
    [key: string]: number | string;
  };
  iGonnaPay: () => boolean | undefined;
};
