import Reveal from "./Reveal";

export function SecHead({ num, eyebrow, title, lede }) {
  return (
    <Reveal className="idx-head">
      <span className="idx-num">{num}</span>
      <div className="idx-head-body">
        <span className="tag">{eyebrow}</span>
        <h2 style={{ marginTop: 16 }}>{title}</h2>
        <p className="lede">{lede}</p>
      </div>
    </Reveal>
  );
}

export function GhostHead({ num, eyebrow, title, lede, dark }) {
  return (
    <Reveal className={`idx-head${dark ? " idx-head-dark" : ""}`}>
      <span className="idx-num">{num}</span>
      <div className="idx-head-body">
        <span className="tag">{eyebrow}</span>
        <h2 style={{ marginTop: 16 }}>{title}</h2>
        <p className="lede">{lede}</p>
      </div>
    </Reveal>
  );
}
