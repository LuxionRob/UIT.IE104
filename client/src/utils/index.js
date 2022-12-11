export function stringCut(string) {
  let cutString = string
  if (cutString.length > 15 && window.innerWidth < 1024) {
    cutString = cutString.slice(0, 13) + '...'
  } else if (cutString.length > 22 && window.innerWidth < 1624) {
    cutString = cutString.slice(0, 20) + '...'
  } else {
    cutString = cutString.slice(0, 28) + '...'
  }

  return cutString
}

export const transformToVNCurrency = (number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)

export const imageWidthResponsive = (type) => {
  const portWidth = window.innerWidth
  if (type === 'avatar') {
    if (portWidth > 1023) {
      return 65
    }
    if (portWidth <= 1023) {
      return 55
    }
    if (portWidth <= 639) {
      return 45
    }
  } else if (type === 'product') {
    if (portWidth > 1023) {
      return 300
    }
    if (portWidth <= 1023) {
      return 200
    }
    if (portWidth <= 639) {
      return 150
    }
  }
}
