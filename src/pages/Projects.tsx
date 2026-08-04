import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <Section title="Projects">
      <ProjectCard
        title="Pomodoro Tracker"
        description="A productivity application built with Flask and Python."
      />

      <ProjectCard
        title="React Portfolio"
        description="My developer portfolio built with React and TypeScript."
      />
    </Section>
  );
}
