function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-US', options);
}


const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export { formatDate,capitalize };
