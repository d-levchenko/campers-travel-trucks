const floatFormatter = (input: string, length = 2) =>
  parseFloat(input).toFixed(length);

export default floatFormatter;
