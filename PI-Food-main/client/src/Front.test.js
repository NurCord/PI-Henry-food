import * as data from '../db.json';

import {
  ALL_RECIPES,
  ALL_RECIPES_BY_ID
} from "./redux/actions/variables"

import root from "./redux/reducers/Reducer";

describe("Reducer", () => {
  const state = {
    recipes: [],
    recipe: {},
  }

  it("Debería retornar el estado inicial si no se pasa un type válido", () => {
    expect(root(undefined, [])).toEqual({recipes: [], recipe: {},});
  });

  it('Debería guardar en nuestro state las recipes obtenidas de nuestro llamado al back cuando action type es "ALL_RECIPES"', () => {
    const result = root(state, {
      type: ALL_RECIPES,
      payload: data.recipes,
    });

    expect(result).not.toEqual(state);
    expect(result).toEqual({
      recipes: data.recipes,
      recipe: {},
    });
  });

  it('Debería guardar en nuestro state la recipe obtenida de nuestro llamado al back cuando action type es "ALL_RECIPES_BY_ID"', () => {
    const result = root(state, {
      type: ALL_RECIPES_BY_ID,
      payload: data.recipes[0],
    });
    
    expect(result).not.toEqual(state);
    expect(result).toEqual({
      recipes: [],
      recipe: data.recipes[0],
    });
  });
});
