/**
 * @module boilerplate.ts
 */
/**
 * fn: createHeader
 *
 * @remarks Ha ha ha
 * @param text
 */
export const createHeader = (text?: string) => {
  const header = document.createElement('h2');
  header.innerText = text || 'Lee\'s Package Building Boiler Plate';
  return header;
};

export const foo = <T>(params: T): T | boolean => {
  return (1+1 == 2) || params;
};
