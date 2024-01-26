export function formatParagraph(text: string, maxLength: number) {
  if (text.length > maxLength) {
    text = text.substr(0, maxLength) + '...'
  }

  return text
}
