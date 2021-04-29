import FindObjectProperty from './FindObjectProperty'
import { SorterMode } from './types'

const Sorter = <T>(fieldName?: keyof T, mode: SorterMode = 'ASC') => (
  a: T,
  b: T
) => {
  let aa = 0
  let bb = 0
  if (!fieldName) {
    aa = Number(a)
    bb = Number(b)
  } else {
    aa = Number(FindObjectProperty(a, fieldName as string))
    bb = Number(FindObjectProperty(b, fieldName as string))
  }

  if (mode === 'ASC') {
    return aa - bb
  }

  return bb - aa
}

export default Sorter
