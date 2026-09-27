export default function Cover({ onOpen }) {
  return (
    <div className="cover">
      <div className="cover__frame">
        <span className="cover__ornament" aria-hidden="true">
          <svg viewBox="0 0 120 24" width="120" height="24">
            <path
              d="M0 12 H45 M75 12 H120 M60 4 L66 12 L60 20 L54 12 Z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </span>

        <h1 className="cover__title">Nashrah Irshad</h1>
        <p className="cover__subtitle">Frontend Developer Portfolio</p>
        <p className="cover__tag">BS Software Engineering Student</p>

        <span className="cover__ornament" aria-hidden="true">
          <svg viewBox="0 0 120 24" width="120" height="24">
            <path
              d="M0 12 H45 M75 12 H120 M60 4 L66 12 L60 20 L54 12 Z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </span>

        <button className="cover__open" onClick={onOpen}>
          Open the book
        </button>
      </div>
    </div>
  )
}
