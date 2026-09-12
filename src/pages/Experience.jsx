import { experience } from "../data.js";
import LogoRow from "../components/LogoRow.jsx";

export default function Experience() {
  return (
    <div className="stack-page">
      <header className="page-head" data-reveal>
        <p className="eyebrow">Career</p>
        <h1>Experience</h1>
        <p className="lede">Reverse-chronological delivery across CMS, fintech, and enterprise platforms.</p>
      </header>

      <LogoRow />

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
    </div>
  );
}
