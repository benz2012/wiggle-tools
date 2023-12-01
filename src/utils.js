export const randInt = (low, high) => (
  Math.floor(Math.random() * (high - low) + low)
)

export const randSign = () => (
  Math.random() < 0.5 ? -1 : 1
)
