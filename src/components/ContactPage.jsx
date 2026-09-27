export default function ContactPage() {
  return (
    <div className="page-content">
      <h3 className="page-content__heading">Let's Work Together</h3>
      <p className="page-content__lead">
        I'm open to frontend roles, freelance builds, and collaborations worth losing an evening
        to.
      </p>

      <div className="contact-card">
        <span className="contact-card__name">Nashrah Irshad</span>
        <span className="contact-card__role">Frontend Developer</span>

        <div className="contact-card__links">
          <a
            className="contact-card__link"
            href="https://www.linkedin.com/in/nashrah-irshad-070859373/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            className="contact-card__link"
            href="https://github.com/nashrairshad4-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <p className="page-content__closing">— The End —</p>
    </div>
  )
}
