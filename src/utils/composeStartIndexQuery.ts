function composeStartIndexQuery(page: string) {
  let startIndex = Number(page);

  if (startIndex === 0) return '0';

  return String(startIndex - 1);
}

export default composeStartIndexQuery;
