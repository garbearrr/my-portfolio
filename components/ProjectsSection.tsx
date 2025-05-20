'use client';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  return (
    <section style={{ paddingBottom: '12vh', marginTop: '8vh' }}>
      {projects.map((p) => (
        <ProjectCard key={p.id} p={p} />
      ))}
    </section>
  );
}
