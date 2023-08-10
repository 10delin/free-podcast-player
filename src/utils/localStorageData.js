export const getLocalStorageItem = (key, defaultValue = null) => {
  const storedValue = JSON.parse(localStorage.getItem(key));
  return storedValue !== null ? storedValue : defaultValue;
};

export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
