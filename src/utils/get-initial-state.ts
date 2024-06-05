export const getInitialState = <T>(key: string, defaultValue: T): T => {
  const item = localStorage.getItem(key);

  return item ? JSON.parse(item) : defaultValue;
};
