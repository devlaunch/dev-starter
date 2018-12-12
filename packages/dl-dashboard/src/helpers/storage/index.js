export const StorageType = {
  SESSION: "storage/SESSION",
  LOCAL: "storage/LOCAL"
};

/**
 * Get either localStorage or sessionStorage
 * @param type storage type
 */
export const getStorage = type => {
  if (type === StorageType.SESSION) {
    return window.sessionStorage;
  }
  return window.localStorage;
};

/**
 * Set an item into storage
 * @param type storage type
 * @param key key to set
 * @param value value to set
 */
const setItem = type => (key, value) => {
  getStorage(type).setItem(key, JSON.stringify(value));
};

/**
 * Get an item from storage
 * @param type storage type
 * @param key key to get
 * @param defaultVal value to return if key doesnt exist
 */
const getItem = type => (key, defaultVal) => {
  const val = getStorage(type).getItem(key);
  if (!val || val === "undefined") return defaultVal;
  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
};

/**
 * Remove item from storage
 * @param type storage type
 * @param key key to remove
 */
const removeItem = type => key => {
  getStorage(type).removeItem(key);
};

export const Storage = {
  session: {
    get: getItem(StorageType.SESSION),
    set: setItem(StorageType.SESSION),
    remove: removeItem(StorageType.SESSION)
  },
  local: {
    get: getItem(StorageType.LOCAL),
    set: setItem(StorageType.LOCAL),
    remove: removeItem(StorageType.LOCAL)
  }
};
