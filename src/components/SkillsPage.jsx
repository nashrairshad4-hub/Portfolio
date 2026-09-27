import skills from '../data/skills.js'

export default function SkillsPage() {
  return (
    <div className="page-content">
      <h3 className="page-content__heading">Skills</h3>
      <p className="page-content__lead">A shelf of the tools I reach for most often.</p>

      <div className="skill-shelf">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-card__name">{skill.name}</span>
            <span className="skill-card__note">{skill.note}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
