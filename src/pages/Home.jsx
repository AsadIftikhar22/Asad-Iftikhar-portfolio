import { Link } from "react-router-dom";
import {
  profile,
  stats,
  certifications,
  education,
  articles,
  profileLinks,
  experience,
  skillGroups,
  testing,
} from "../data.js";
import LogoRow from "../components/LogoRow.jsx";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <p className="eyebrow" data-reveal>
          Portfolio / Resume
        </p>
        <h1 data-reveal>
          {profile.name}
          <em> builds CMS, fintech, and microservices platforms.</em>
        </h1>
        <p className="lede" data-reveal>
          {profile.summary}
        </p>
        <div className="hero-actions">
          <Link className="btn primary" to="/work">
            View work
          </Link>
          <Link className="btn ghost" to="/writing">
            Medium articles
          </Link>
        </div>
        <p className="hero-meta">
          {profile.role} · {profile.headline}
        </p>
        <LogoRow />
      </section>

      <section className="stat-row">
        {stats.map((s) => (
          <article key={s.label} data-reveal>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </article>
        ))}
      </section>

      <section className="split" data-reveal>
        <div>
          <h2>Certified, production-owned.</h2>
          <p>
            Optimizely Certified Developer through July 2026. Recent delivery includes Salam Telecom
            on Optimizely DXP, Qiddiya, Extreme Networks on Sitecore SXA, and the ADGM
            Sitecore-to-Optimizely migration — plus fintech microservices for ADIB, NETSOL, and Keenu.
          </p>
          <p>
            Writing on{" "}
            <a href={profileLinks.medium} target="_blank" rel="noreferrer">
              Medium
            </a>{" "}
            and public samples on{" "}
            <a href={profileLinks.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
          <Link className="text-link" to="/work">
            Selected work →
          </Link>
        </div>
        <ul className="cert-list">
          {certifications.slice(0, 4).map((c) => (
            <li key={c.name}>
              <span>{c.name}</span>
              <small>
                {c.org} · {c.dates}
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-block">
        <div className="page-head" data-reveal>
          <p className="eyebrow">Career</p>
          <h2>Experience</h2>
        </div>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={`${job.company}-${job.dates}`} data-reveal>
              <div className="when">{job.dates}</div>
              <div className="job">
                <h2>{job.title}</h2>
                <p className="company">
                  {job.company}
                  <span> · {job.location}</span>
                </p>
                <div className="tags">
                  {job.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <Link className="text-link" to="/experience">
          View more →
        </Link>
      </section>

      <section className="home-block">
        <div className="page-head" data-reveal>
          <p className="eyebrow">Stack</p>
          <h2>Skills</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card" data-reveal>
              <h2>{group.title}</h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <section className="certs-block" data-reveal>
          <h2>Testing & quality</h2>
          <ul>
            {testing.map((t) => (
              <li key={t.name}>
                <strong>{t.name}</strong>
                <span>{t.detail}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="certs-block" data-reveal>
          <h2>Certifications</h2>
          <ul>
            {certifications.map((c) => (
              <li key={c.name}>
                <strong>{c.name}</strong>
                <span>
                  {c.org} · {c.dates}
                </span>
              </li>
            ))}
          </ul>
        </section>
        <Link className="text-link" to="/skills">
          View more →
        </Link>
      </section>

      <section className="writing-preview">
        <div className="page-head" data-reveal>
          <p className="eyebrow">Latest writing</p>
          <h2>From Medium</h2>
        </div>
        <div className="article-list compact">
          {articles.slice(0, 3).map((a) => (
            <a key={a.href} className="article-card" href={a.href} target="_blank" rel="noreferrer" data-reveal>
              <small>{a.date}</small>
              <h3>{a.title}</h3>
            </a>
          ))}
        </div>
        <Link className="text-link" to="/writing">
          All confirmed articles →
        </Link>
      </section>

      <section className="edu-band">
        {education.map((e) => (
          <article key={e.name} data-reveal>
            <h3>{e.name}</h3>
            <p>
              {e.school} · {e.dates}
            </p>
            {e.note ? <p className="muted">{e.note}</p> : null}
          </article>
        ))}
      </section>

      <section className="home-block">
        <div className="page-head" data-reveal>
          <p className="eyebrow">Let’s talk</p>
          <h2>Contact</h2>
        </div>
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
        <Link className="text-link" to="/contact">
          View more →
        </Link>
      </section>
    </div>
  );
}
