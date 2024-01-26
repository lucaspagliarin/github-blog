export function formatParagraph(text?: string | null, maxLength?: number) {
  if (text && maxLength && text.length > maxLength) {
    text = text.substr(0, maxLength) + '...'
  }

  return text
}
