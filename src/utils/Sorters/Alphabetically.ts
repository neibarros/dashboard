import FindObjectProperty from './FindObjectProperty'
import TextToUrlSlug from './TextToUrlSlug'
import { SorterMode } from './types'

const Sorter = <T>(fieldName?: keyof T, mode: SorterMode = 'ASC') => (
  a: T,
  b: T
) => {
  let aa = ''
  let bb = ''
  if (!fieldName) {
    aa = String(a)
    bb = String(b)
  } else {
    aa = String(FindObjectProperty(a, fieldName as string)) || ''
    bb = String(FindObjectProperty(b, fieldName as string)) || ''
  }

  if (mode === 'ASC') {
    return TextToUrlSlug(aa).toLocaleLowerCase() <
      TextToUrlSlug(bb).toLocaleLowerCase()
      ? -1
      : 1
  }

  return TextToUrlSlug(aa).toLocaleLowerCase() <
    TextToUrlSlug(bb).toLocaleLowerCase()
    ? 1
    : -1
}

export default Sorter
