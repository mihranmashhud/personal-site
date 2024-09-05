export function* range(start: number, stop: number, step = 1) {
  for (let i = start; i < stop; i += step) {
    yield i;
  }
}
