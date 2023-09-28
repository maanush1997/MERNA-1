/**
 * @param {String} - accept timestamp
 * @returns {String} - Returns formatted date
 */

export function formatDate(timeStamp) {
  const date = new Date(parseInt(timeStamp));
  return date.toLocaleDateString();
}
