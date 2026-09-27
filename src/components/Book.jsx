import ChapterOpener from './ChapterOpener.jsx'

export default function Book({ page, chapterIndex, flipClass, onPrevEdge, onNextEdge }) {
  return (
    <div className="book">
      <div className="book__spread">
        <div className="book__page book__page--left">
          <ChapterOpener index={chapterIndex} title={page.title} blurb={page.blurb} />
          <span className="book__page-number book__page-number--left">
            {chapterIndex * 2 + 1}
          </span>
        </div>

        <div className="book__spine" aria-hidden="true" />

        <div className={'book__page book__page--right' + (flipClass ? ' ' + flipClass : '')}>
          <div className="book__page-inner">{page.content}</div>
          <span className="book__page-number book__page-number--right">
            {chapterIndex * 2 + 2}
          </span>
        </div>
      </div>

      <button
        className="book__edge book__edge--left"
        onClick={onPrevEdge}
        aria-label="Previous page"
      />
      <button
        className="book__edge book__edge--right"
        onClick={onNextEdge}
        aria-label="Next page"
      />
    </div>
  )
}
