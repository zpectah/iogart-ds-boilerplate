const capitalize = (input: string) => input.replace(/^\w/, (c) => c.toUpperCase());

const classNamesFromList = (list: (string | false | undefined)[]) =>
  [...list].join(' ').replaceAll('  ', ' ').replace(/\s+$/g, '');

export { capitalize, classNamesFromList };
