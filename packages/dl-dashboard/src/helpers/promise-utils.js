/**
 * Check if the passed object is a promise
 * @param value the object to check
 */
export const isPromise = value => {
  if (value !== null && typeof value === "object") {
    return value && typeof value.then === "function";
  }
  return false;
};
