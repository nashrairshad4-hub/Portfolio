
const certificates = [
  {
    title: "Introduction to Generative AI",
    issuer: "Simplilearn",
    url: "simplilearn"
  },
  {
    title: "Web Development with Python",
    issuer: "TECNSOL",
    url: "web-development"
  }
]

export default function CertificatesPage() {
  return (
    <div className="page-content">
      <h3 className="page-content__heading">Certificates</h3>

      <p className="page-content__lead">
        My professional certificates and achievements.
      </p>

      {certificates.length > 0 ? (
        <div className="certificate-gallery">
          {certificates.map((cert) => (
            <a
              className="certificate-frame"
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.title}
            >
              <span className="certificate-frame__title">
                {cert.title}
              </span>

              <span className="certificate-frame__issuer">
                {cert.issuer}
              </span>
            </a>
          ))}
        </div>
      ) : (
        <div className="certificate-empty">
          <p>No certificates added yet.</p>
        </div>
      )}
    </div>
  )
}