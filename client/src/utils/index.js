export function stringCut(string) {
  let cutString = string

  if (cutString.length > 22) {
    cutString = cutString.slice(0, 20) + '...'
  }

  return cutString
}

export const transformToVNCurrency = (number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
