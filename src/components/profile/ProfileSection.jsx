import { site } from '../../data/siteContent.js'

function ProfileSection() {
  const { profile } = site

  return (
    <section id="profile" className="profile-section" aria-labelledby="profile-heading">
      <div className="profile-photo">
        <img src={profile.image} alt={profile.imageAlt} />
      </div>
      <div className="profile-intro">
        <p className="eyebrow">{profile.eyebrow}</p>
        <h2 id="profile-heading">
          {profile.name} <span>{profile.romanizedName}</span>
        </h2>
        <p className="profile-lede">{profile.lead}</p>
        <p>{profile.description}</p>
        <div className="profile-meta">
          <div>
            <h3>TECH STACK</h3>
            <ul>{profile.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          </div>
          <div>
            <h3>CERTIFICATION</h3>
            <p>{profile.certification}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection
