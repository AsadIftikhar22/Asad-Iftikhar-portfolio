import { projects, repos, profileLinks } from "../data.js";
import LogoRow from "../components/LogoRow.jsx";

export default function Work() {
  return (
    <div className="stack-page">
      <header className="page-head" data-reveal>
        <p className="eyebrow">Selected</p>
        <h1>Work</h1>
        <p className="lede">
          Projects from LinkedIn and CV — live sites, GitHub, and articles only when the URL is real.
        </p>
      </header>

      <LogoRow />

      <div className="work-grid">
        {projects.map((p) => (
          <article key={`${p.name}-${p.year}`} className="work-card" data-reveal>
            <div className="work-top">
              <h2>{p.name}</h2>
              <span>{p.year}</span>
            </div>
            <p className="company">{p.company}</p>
            <p>{p.blurb}</p>
            <small>{p.stack}</small>
            <div className="work-links">
              {p.href ? (
                <a href={p.href} target="_blank" rel="noreferrer">
                  Live site
                </a>
              ) : null}
              {p.repo ? (
                <a href={p.repo} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : null}
              {p.article ? (
                <a href={p.article} target="_blank" rel="noreferrer">
                  Article
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <section className="certs-block" data-reveal>
        <h2>GitHub</h2>
        <p className="lede">
          Public profile:{" "}
          <a href={profileLinks.github} target="_blank" rel="noreferrer">
            github.com/AsadIftikhar22
          </a>
        </p>
        <ul>
          {repos.map((r) => (
            <li key={r.href}>
              <a href={r.href} target="_blank" rel="noreferrer">
                <strong>{r.name}</strong>
              </a>
              <span>{r.note}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
