export default function Navigation({ current, total, onPrev, onNext }) {
  return (
    <nav className="navigation" aria-label="Book navigation">
      <button
        className="navigation__button"
        onClick={onPrev}
        disabled={current === 0}
        aria-label="Previous page"
      >
        ‹ Previous
      </button>

      <span className="navigation__indicator">
        {current === 0 ? 'Cover' : `Page ${current} of ${total - 1}`}
      </span>

      <button
        className="navigation__button"
        onClick={onNext}
        disabled={current === total - 1}
        aria-label="Next page"
      >
        Next ›
      </button>
    </nav>
  )
}
