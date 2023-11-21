import { persistentStore } from './services/persistentStore';

/**
 * @param {string} key
 * @param {null} startValue
 */

export const pokemonChosen = persistentStore('pokemonChosen', null);
