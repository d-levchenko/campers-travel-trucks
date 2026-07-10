const formatStringInTitleCase = (str: string) =>
  str
    .split('_')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export default formatStringInTitleCase;
