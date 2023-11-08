const initialHero: any = {
  heroes: [],
};

const rootHero = (state: any = initialHero, action: any) => {
  switch (action.type) {
    case "addTitle":
      console.log(action.payload);
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default rootHero;
