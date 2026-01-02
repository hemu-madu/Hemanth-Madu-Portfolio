function getSeasonThemeId(date) {
  const month = date.getMonth();
  if (month === 11 || month === 0 || month === 1) {
    return "winter";
  }
  if (month === 2 || month === 3) {
    return "spring";
  }
  if (month === 4 || month === 5) {
    return "summer";
  }
  if (month === 6 || month === 7 || month === 8) {
    return "monsoon";
  }
  if (month === 9 || month === 10) {
    return "autumn";
  }
  return "winter";
}
export {
  getSeasonThemeId
};
