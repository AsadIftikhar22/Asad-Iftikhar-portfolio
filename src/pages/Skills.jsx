import { skillGroups, certifications, testing } from "../data.js";
import LogoRow from "../components/LogoRow.jsx";

export default function Skills() {
  return (
    <div className="stack-page">
      <header className="page-head" data-reveal>
        <p className="eyebrow">Stack</p>
        <h1>Skills</h1>
        <p className="lede">
          CMS first, with fintech microservices, .NET APIs, React, and Next.js in the same stack.
        </p>
      </header>

      <LogoRow />

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
    </div>
  );
}
