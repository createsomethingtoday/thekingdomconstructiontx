import Link from "next/link";

const activeJobs = [
  { name: "Arlington interior repaint", phase: "Surface prep", eta: "Feb 18" },
  { name: "Mansfield cabinet refinishing", phase: "Topcoat cure", eta: "Feb 20" },
  { name: "Grand Prairie handyman ticket", phase: "Scope review", eta: "Feb 22" },
];

export default function Home() {
  return (
    <main className="portal-shell">
      <section className="portal-hero">
        <p className="portal-eyebrow">Webflow Cloud Client Portal</p>
        <h1 className="portal-title">Live project visibility for Kingdom Construction clients</h1>
        <p className="portal-copy">
          This Cloud app route is the client-facing layer for estimate intake, status updates, and post-project handoff notes.
        </p>
        <div className="portal-actions">
          <Link className="portal-button portal-button-primary" href="/client/estimates">
            Open Estimate Queue
          </Link>
          <a className="portal-button portal-button-secondary" href="tel:+18175550147">
            Call Dispatch
          </a>
        </div>
      </section>

      <section className="portal-metrics">
        <article className="portal-metric-card">
          <p className="portal-metric-label">Pending estimates</p>
          <p className="portal-metric-value">07</p>
        </article>
        <article className="portal-metric-card">
          <p className="portal-metric-label">Active projects</p>
          <p className="portal-metric-value">12</p>
        </article>
        <article className="portal-metric-card">
          <p className="portal-metric-label">Avg. response time</p>
          <p className="portal-metric-value">2.1 hrs</p>
        </article>
      </section>

      <section className="portal-board">
        <header className="portal-board-header">
          <h2>Current jobs</h2>
          <Link href="/client/projects">View full board</Link>
        </header>
        <ul className="portal-job-list">
          {activeJobs.map((job) => (
            <li className="portal-job-item" key={job.name}>
              <p className="portal-job-name">{job.name}</p>
              <p className="portal-job-meta">Phase: {job.phase}</p>
              <p className="portal-job-meta">ETA: {job.eta}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
