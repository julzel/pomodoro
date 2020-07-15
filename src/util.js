export const saveToLocalStorage = (nameId, value) => {
  typeof value === 'object'  ?
    localStorage.setItem(nameId, JSON.stringify(value)) :
    localStorage.setItem(nameId, value);
};

export const getFromLocalStorage = nameId => JSON.parse(localStorage.getItem(nameId));