import { Code2, Smartphone, Layers, Wrench, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { toolbox } from "../data/portfolio";
const icons = [Smartphone, Code2, Layers, Wrench];
export function About() {
  return (
    <section className="section about-section" id="about">
      <Reveal className="wrap about-grid">
        <div>
          <div className="eyebrow">
            A little about me <span className="section-number">01 /</span>
          </div>
          <h2>
            Curious mind.
            <br />
            Builder’s instinct.
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I’m Atul, a 2026 Computer Science graduate from the University of
            Lucknow. I like taking an idea all the way — from a rough sketch to
            an app someone can actually use.
          </p>
          <p>
            My focus is React Native and Expo, with TypeScript keeping things
            dependable. I care about the small details: a clear interface, a
            smooth interaction, and a product that feels good in your hands.
          </p>
          <div className="about-principles">
            <span>Thoughtful interfaces</span>
            <span>Practical engineering</span>
            <span>
              Real releases <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
export function Toolbox() {
  return (
    <section id="toolbox" className="section">
      <div className="wrap">
        <div className="eyebrow">
          The toolbox <span className="section-number">03 /</span>
        </div>
        <div className="section-heading">
          <h2>
            The right tools.
            <br />A builder’s mindset.
          </h2>
          <p>Mobile at the core. A working knowledge of the whole journey.</p>
        </div>
        <div className="toolbox-grid">
          {toolbox.map((group, i) => {
            const Icon = icons[i];
            return (
              <Reveal className="toolbox-card" key={group.title}>
                <Icon size={23} />
                <h3>{group.title}</h3>
                <div className="toolbox-items">
                  {group.items.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap experience-grid">
        <div>
          <div className="eyebrow">
            The journey <span className="section-number">04 /</span>
          </div>
          <h2>
            Learning by
            <br />
            building.
          </h2>
          <p className="experience-intro">
            A foundation in computer science.
            <br />
            Experience putting it to work.
          </p>
        </div>
        <div className="timeline">
          <Reveal className="timeline-entry">
            <div className="timeline-meta">
              <span>EXPERIENCE</span>
              <span>JUN — AUG 2025</span>
            </div>
            <h3>Python Developer Intern</h3>
            <h4>BloomGenix</h4>
            <p>
              Built and maintained Python / Django backend features and REST
              endpoints. Automated recurring workflows and browser-driven
              regression tests with Playwright and Puppeteer.
            </p>
            <div className="chips">
              <span className="chip">Python</span>
              <span className="chip">Django</span>
              <span className="chip">E2E testing</span>
            </div>
          </Reveal>
          <Reveal className="timeline-entry">
            <div className="timeline-meta">
              <span>EDUCATION</span>
              <span>2022 — 2026</span>
            </div>
            <h3>B.Tech, Computer Science & Engineering</h3>
            <h4>University of Lucknow</h4>
            <p>
              A foundation in software development, problem solving and computer
              science, carried into hands-on mobile projects.
            </p>
            <span className="grade">
              CGPA <b>7.51 / 10</b>
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
