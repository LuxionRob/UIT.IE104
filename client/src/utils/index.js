export function stringCut(string) {
  let cutString = string
  if (cutString.length > 22 && window.innerWidth >= 1024) {
    cutString = cutString.slice(0, 20) + '...'
  }
  if (cutString.length > 15 && window.innerWidth < 1024) {
    cutString = cutString.slice(0, 13) + '...'
  }

  return cutString
}

export const transformToVNCurrency = (number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
