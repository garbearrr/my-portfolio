'use client';
import Image from 'next/image';
import cls from './ProjectCard.module.css';
import { ProjectRecord } from '../data/projects';

export function ProjectCard({ p }: { p: ProjectRecord }) {
  /* build CSS variables from the per-project style obj */
  const styleVars = {
    '--cardBg': p.style.cardBg,
    '--borderColour': p.style.cardBorder,
    '--dividerColour': p.style.cardBorder,
    '--tagColour': p.style.tagColour,
    '--fontFamily': p.style.font,
    '--tagFontColour': p.style.tagFontColour,
    '--linkColour': p.style.linkColour,
  } as React.CSSProperties;

  return (
    <article
      className={cls.card}
      style={{
        background: p.style.cardBg ?? 'rgba(0,0,0,0.45)',
        border: `2px solid ${p.style.cardBorder ?? 'rgba(255,255,255,0.3)'}`,
        ...styleVars,
      }}
    >
      {/* banner */}
      <Image
        src={p.image}
        alt={`${p.name} banner`}
        width={1200}
        height={300}
        className={cls.banner}
      />

      {/* thin divider */}
      <div className={cls.divider} />

      {/* circle logo */}
      <Image
        src={p.logo}
        alt={`${p.name} logo`}
        width={140}
        height={140}
        className={cls.logo}
      />

      {/* body */}
      <div className={cls.content}>
        <h2 style={{ color: 'var(--text-primary)', marginTop: 0 }}>{p.name}</h2>
        <p>{p.description}</p>

        {/* tags */}
        <div className={cls.tags}>
          {p.tags.map((t) => (
            <span key={t} className={cls.tag}>
              {t}
            </span>
          ))}
        </div>

        {/* links */}
        <div className={cls.links}>
          {p.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className={cls.linkBtn}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
