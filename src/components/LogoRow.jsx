import { stackLogos } from "../data.js";

export default function LogoRow() {
  return (
    <ul className="logo-row" aria-label="Technology stack">
      {stackLogos.map((logo, index) => (
        <li
          key={logo.label}
          className={`logo-item${logo.invert ? " invert" : ""}`}
          style={{ "--delay": `${80 + index * 70}ms` }}
          data-reveal
        >
          <img src={`./logos/${logo.file}`} alt="" />
          <span>{logo.label}</span>
        </li>
      ))}
    </ul>
  );
}
