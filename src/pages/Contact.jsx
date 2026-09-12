import { profile, profileLinks } from "../data.js";

export default function Contact() {
  return (
    <div className="stack-page contact-page">
      <header className="page-head" data-reveal>
        <p className="eyebrow">Let’s talk</p>
        <h1>Contact</h1>
        <p className="lede">Open to Optimizely, Sitecore, fintech, .NET, headless, and microservices roles.</p>
      </header>

      <div className="contact-grid">
        <a className="contact-card lift" href={`mailto:${profile.email}`} data-reveal>
          <span>Email</span>
          <strong>{profile.email}</strong>
        </a>
        <a className="contact-card lift" href={`tel:${profile.phone.replace(/\s/g, "")}`} data-reveal>
          <span>Phone</span>
          <strong>{profile.phone}</strong>
        </a>
        <a className="contact-card lift" href={profile.linkedin} target="_blank" rel="noreferrer" data-reveal>
          <span>LinkedIn</span>
          <strong>{profile.linkedinLabel}</strong>
        </a>
        <article className="contact-card lift" data-reveal>
          <span>Location</span>
          <strong>{profile.location}</strong>
        </article>
        <a className="contact-card lift" href={profileLinks.medium} target="_blank" rel="noreferrer" data-reveal>
          <span>Medium</span>
          <strong>asadiftikhar539.medium.com</strong>
        </a>
        <a className="contact-card lift" href={profileLinks.github} target="_blank" rel="noreferrer" data-reveal>
          <span>GitHub</span>
          <strong>github.com/AsadIftikhar22</strong>
        </a>
      </div>
    </div>
  );
}
