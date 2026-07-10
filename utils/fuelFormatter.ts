const formatFuelConsumption = (input: string) => {
  if (!input) return '';
  const regex = /^(\d+(?:\.\d+)?)\s*([a-zA-Z]+)\s*\/\s*(\d+\s*[a-zA-Z]+)$/i;
  const match = input.trim().match(regex);

  if (match) {
    const [_, value, unit1, unit2] = match;
    return `${value} ${unit1} / ${unit2}`;
  }

  return input;
};

export default formatFuelConsumption;
