const TextToUrlSlug = (text: string): string => {
  const extChars = 'áäâàãåčçḉĉćďéěëèêẽĕȇğíìîĩïıňñóöòôõøðřŕšşťúůũüùûýÿžþÞĐđßÆa'
  const replChars = 'aaaaaacccccdeeeeeeeegiiiiiinnooooooorrsstuuuuuuyyzbBDdBAa'

  if (!text) {
    return ''
  }
  let str = text.toLowerCase().replace(/ /g, '-')

  for (let i = 0; i < extChars.length; ++i) {
    str = str.replace(new RegExp(extChars[i], 'g'), replChars[i])
  }
  return str.replace(/[^\w]+/g, '-')
}

export default TextToUrlSlug
