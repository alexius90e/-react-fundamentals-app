function getCurrentDate(): string {
  return new Date(Date.now()).toLocaleString('en', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
}

export default getCurrentDate;
