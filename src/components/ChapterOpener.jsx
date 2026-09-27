const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI']

export default function ChapterOpener({ index, title, blurb }) {
  return (
    <div className="chapter-opener">
      <span className="chapter-opener__numeral">{ROMAN[index] ?? index + 1}</span>
      <h2 className="chapter-opener__title">{title}</h2>
      <span className="chapter-opener__rule" aria-hidden="true" />
      <p className="chapter-opener__blurb">{blurb}</p>
    </div>
  )
}
