export function stringCut(string) {
  let cutString = string

  if (cutString.length > 22) {
    cutString = cutString.slice(0, 20) + '...'
  }

  return cutString
}
