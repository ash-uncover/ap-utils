export const createIntArray = (size: number = 0) => {
  const result = []
  for (let i = 0; i < size; i++) {
    result.push(i)
  }
  return result
}

export const shuffle = <T>(array: T[] = []): T[] => {
  const source = array.slice()
  const result: T[] = []
  while (source.length) {
    const index = Math.floor(Math.random() * (source.length))
    result.push(source.splice(index, 1)[0])
  }
  return result
}

export const randomSubArray = <T>(array: T[] = [], items: number = 0): T[] => {
  const source = array.slice()
  const result: T[] = []
  for (let i = 0; i < items; i++) {
    const index = Math.floor(Math.random() * (source.length))
    result.push(source.splice(index, 1)[0])
  }
  return result
}

export const removeElement = <T>(array: T[], element: any):T[] => {
  const index = array.indexOf(element)
  const result = array.slice()
  if (index !== -1) {
    result.splice(index, 1)
  }
  return result
}
