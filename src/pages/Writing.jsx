import { articles, profileLinks } from "../data.js";

export default function Writing() {
  return (
    <div className="stack-page">
      <header className="page-head" data-reveal>
        <p className="eyebrow">Medium</p>
        <h1>Writing</h1>
        <p className="lede">
          Confirmed articles from{" "}
          <a href={profileLinks.medium} target="_blank" rel="noreferrer">
            asadiftikhar539.medium.com
          </a>
          . Optimizely XHtmlString series plus .NET notes.
        </p>
      </header>

      <div className="article-list">
        {articles.map((a) => (
          <a key={a.href} className="article-card lift" href={a.href} target="_blank" rel="noreferrer" data-reveal>
            <small>{a.date}</small>
            <h2>{a.title}</h2>
            <span>Read on Medium →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
