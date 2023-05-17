const initialWagonState = {
  supplies: 100,//rifornimenti
  distance: 0,  //km
  days: 0,       //giorni
  cash: 200
};

const gameReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather': {
      state.supplies += 15;
      state.days += 1; 
      return state;
    }
    case 'travel': {
      if ((state.supplies - (action.payload * 20)) < 0) {
        return state;
      }
      state.supplies -= (action.payload * 20);
      state.distance += (action.payload * 10);
      state.days += action.payload;
      return state;
    }
    case 'tippedWagon': {
      state.supplies -= 30;
      state.days += 1;
      return state;
    }
    case 'sell': {
      if (state.supplies < 20) {
        return state;
      }
      state.supplies -= 20;
      state.cash += 5;
      return state;
    }
    case 'buy': {
      if (state.cash < 15) {
        return state;
      }
      state.supplies += 25;
      state.cash -= 15;
      return state;
    }
    case 'theft': {
      state.cash /= 2;
      return state;
    }
    default: return state;
  }
};

//stato iniziale
let wagon = gameReducer(undefined, {});

console.log('---Stato iniziale---')
console.log(
  `Giorno ${wagon.days} 
  distanza percorsa: ${wagon.distance} km
  provviste restanti: ${wagon.supplies} pezzi
  denaro restante: ${wagon.cash} \$\n\n`
);

//1 giorno di viaggio
wagon = gameReducer(wagon, {type: 'travel', payload: 1});

console.log('---viaggio di 1 giorno---')
console.log(
  `Giorno ${wagon.days} 
  distanza percorsa: ${wagon.distance} km
  provviste restanti: ${wagon.supplies} pezzi
  denaro restante: ${wagon.cash} \$\n\n`
);

//2 giorno raccogliamo provviste
wagon = gameReducer(wagon, {type: 'gather'});

console.log('---Raccogliamo provviste---')
console.log(
  `Giorno ${wagon.days} 
  distanza percorsa: ${wagon.distance} km
  provviste restanti: ${wagon.supplies} pezzi
  denaro restante: ${wagon.cash} \$\n\n`
);

//3 giorno guadiamo un fiume impetuoso
wagon = gameReducer(wagon, {type: 'tippedWagon'});

console.log('---Guadiamo un fiume impetuoso---')
console.log(
  `Giorno ${wagon.days} 
  distanza percorsa: ${wagon.distance} km
  provviste restanti: ${wagon.supplies} pezzi
  denaro restante: ${wagon.cash} \$\n\n`
);

//4 giorno si viaggia per 3 giorni
wagon = gameReducer(wagon, {type: 'travel', payload: 3});

console.log('---viaggio di 3 giorni---')
console.log(
  `Giorno ${wagon.days} 
  distanza percorsa: ${wagon.distance} km
  provviste restanti: ${wagon.supplies} pezzi
  denaro restante: ${wagon.cash} \$\n\n`
);

//7 giorno proviamo a viaggiare
wagon = gameReducer(wagon, {type: 'travel', payload: 1});

console.log('---viaggio di 1 giorno---')
console.log(
  `Giorno ${wagon.days} 
  distanza percorsa: ${wagon.distance} km
  provviste restanti: ${wagon.supplies} pezzi
  denaro restante: ${wagon.cash} \$\n\n`
);

//7 giorno ancora, raccogliamo risorse
wagon = gameReducer(wagon, {type: 'gather'});

console.log('---Raccogliamo provviste---')
console.log(
  `Giorno ${wagon.days} 
  distanza percorsa: ${wagon.distance} km
  provviste restanti: ${wagon.supplies} pezzi
  denaro restante: ${wagon.cash} \$\n\n`
);

//8 giorno ancora, raccogliamo risorse
wagon = gameReducer(wagon, {type: 'gather'});

console.log('---Raccogliamo provviste---')
console.log(
  `Giorno ${wagon.days} 
  distanza percorsa: ${wagon.distance} km
  provviste restanti: ${wagon.supplies} pezzi
  denaro restante: ${wagon.cash} \$\n\n`
);

//9 giorno vendiamo risorse
wagon = gameReducer(wagon, {type: 'sell'});

console.log('---Vendiamo provviste---')
console.log(
  `Giorno ${wagon.days} 
  distanza percorsa: ${wagon.distance} km
  provviste restanti: ${wagon.supplies} pezzi
  denaro restante: ${wagon.cash} \$\n\n`
);

//8 giorno ancora, compriamo provviste
wagon = gameReducer(wagon, {type: 'buy'});

console.log('---Compriamo provviste---')
console.log(
  `Giorno ${wagon.days} 
  distanza percorsa: ${wagon.distance} km
  provviste restanti: ${wagon.supplies} pezzi
  denaro restante: ${wagon.cash} \$\n\n`
);

//8 giorno ancora, veniamo attaccati dai ladri
wagon = gameReducer(wagon, {type: 'theft'});

console.log('---I ladri ci derubano---')
console.log(
  `Giorno ${wagon.days} 
  distanza percorsa: ${wagon.distance} km
  provviste restanti: ${wagon.supplies} pezzi
  denaro restante: ${wagon.cash} \$\n\n`
);
