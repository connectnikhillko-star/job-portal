import "./JobDetails.css";
import { Link, useParams } from "react-router-dom";
import { MOCK_JOBS } from "../../data/mockJobs";
import { CATEGORY_LABELS } from "../../data/jobFilterOptions";

function JobDetails() {
  const { id } = useParams();

  const job = MOCK_JOBS.find((item) => item.id === id);

  if (!job) {
    return (
      <main className="job-details-page">
        <section className="job-details-empty">
          <p className="job-details-empty__eyebrow">Job Portal</p>

          <h1>Job not found</h1>

          <p>
            The job you are looking for may have been removed or is
            no longer available.
          </p>

          <Link to="/jobs" className="job-details__back-link">
            Back to jobs
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="job-details-page">
      <div className="job-details__breadcrumb">
        <Link to="/jobs">Jobs</Link>
        <span aria-hidden="true">/</span>
        <span>{job.title}</span>
      </div>

      <section className="job-details__hero">
        <div className="job-details__hero-content">
          <p className="job-details__eyebrow">
            {CATEGORY_LABELS[job.category]}
          </p>

          <h1>{job.title}</h1>

          <p className="job-details__company">{job.company}</p>

          <div className="job-details__meta">
            <span>{job.location}</span>
            <span>{job.workMode}</span>
            <span>{job.jobType}</span>
            <span>{job.experienceLevel}</span>
          </div>
        </div>

        <div className="job-details__actions">
          <button type="button" className="job-details__save">
            ♡ Save job
          </button>

          <button type="button" className="job-details__apply">
            Apply now
          </button>
        </div>
      </section>

      <div className="job-details__layout">
        <article className="job-details__content">
          <section>
            <h2>About this opportunity</h2>

            <p>{job.description}</p>

            <p>
              This role offers an opportunity to work on meaningful
              projects while developing practical skills in a
              professional environment.
            </p>
          </section>

          <section>
            <h2>Required skills</h2>

            <div className="job-details__skills">
              {job.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>

          <section>
            <h2>Role information</h2>

            <dl className="job-details__info">
              <div>
                <dt>Job type</dt>
                <dd>{job.jobType}</dd>
              </div>

              <div>
                <dt>Experience level</dt>
                <dd>{job.experienceLevel}</dd>
              </div>

              <div>
                <dt>Work mode</dt>
                <dd>{job.workMode}</dd>
              </div>

              <div>
                <dt>Location</dt>
                <dd>{job.location}</dd>
              </div>

              <div>
                <dt>Category</dt>
                <dd>{CATEGORY_LABELS[job.category]}</dd>
              </div>

              <div>
                <dt>Posted</dt>
                <dd>{job.postedAt}</dd>
              </div>
            </dl>
          </section>
        </article>

        <aside className="job-details__sidebar">
          <div className="job-details__card">
            <h2>Interested in this role?</h2>

            <p>
              Apply for this opportunity and take the next step in
              your career.
            </p>

            <button type="button" className="job-details__apply">
              Apply now
            </button>

            <Link to="/jobs" className="job-details__browse-link">
              Browse more jobs
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default JobDetails;