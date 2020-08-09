const storageService = () => {
  const saveToLocalStorage = (nameId, value) => {
    typeof value === "object"
      ? localStorage.setItem(nameId, JSON.stringify(value))
      : localStorage.setItem(nameId, value);
  };
  const loadFromLocalStorage = (nameId) =>
    JSON.parse(localStorage.getItem(nameId));

  return {
    saveToLocalStorage,
    loadFromLocalStorage,
  };
};

export const StorageService = storageService();
