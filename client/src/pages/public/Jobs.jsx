import "./Jobs.css";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  FILTER_GROUPS,
  CATEGORIES,
  CATEGORY_LABELS,
} from "../../data/jobFilterOptions";
import { MOCK_JOBS } from "../../data/mockJobs";

function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="job-card__header">
        <div>
          <h2 className="job-card__title">{job.title}</h2>
          <p className="job-card__company">{job.company}</p>
        </div>

        <button
          type="button"
          className="job-card__save"
          aria-label={`Save ${job.title}`}
        >
          ♡
        </button>
      </div>

      <div className="job-card__meta">
        <span>{job.location}</span>
        <span>{job.workMode}</span>
        <span>{job.jobType}</span>
        <span>{job.experienceLevel}</span>
      </div>

      <p className="job-card__description">{job.description}</p>

      <div className="job-card__skills">
        {job.skills.map((skill) => (
          <span key={skill} className="job-card__skill">
            {skill}
          </span>
        ))}
      </div>

      <div className="job-card__footer">
        <span className="job-card__date">
          Posted {job.postedAt}
        </span>

        <Link to={`/jobs/${job.id}`} className="job-card__details">
          View Details
        </Link>
      </div>
    </article>
  );
}

function FilterSection({ group, selectedFilters, onFilterChange }) {
  return (
    <fieldset className="filter-section">
      <legend>{group.legend}</legend>

      {group.options.map((option) => (
        <label key={option.value} className="filter-option">
          <input
            type="checkbox"
            checked={selectedFilters[group.key]?.includes(option.value) || false}
            onChange={() => onFilterChange(group.key, option.value)}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}

function Jobs() {
  const [searchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "";

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const [selectedFilters, setSelectedFilters] = useState({
    jobType: [],
    experienceLevel: [],
    workMode: [],
  });

  const [selectedCategory, setSelectedCategory] =
    useState(categoryFromUrl);

  function handleFilterChange(groupKey, value) {
    setSelectedFilters((current) => {
      const currentValues = current[groupKey];

      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...current,
        [groupKey]: updatedValues,
      };
    });
  }

  function clearFilters() {
    setKeyword("");
    setLocation("");
    setSelectedCategory("");

    setSelectedFilters({
      jobType: [],
      experienceLevel: [],
      workMode: [],
    });
  }

  const filteredJobs = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();
    const normalizedLocation = location.trim().toLowerCase();

    return MOCK_JOBS.filter((job) => {
      const matchesKeyword =
        !normalizedKeyword ||
        job.title.toLowerCase().includes(normalizedKeyword) ||
        job.company.toLowerCase().includes(normalizedKeyword) ||
        job.description.toLowerCase().includes(normalizedKeyword) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(normalizedKeyword)
        );

      const matchesLocation =
        !normalizedLocation ||
        job.location.toLowerCase().includes(normalizedLocation);

      const matchesCategory =
        !selectedCategory || job.category === selectedCategory;

      const matchesJobType =
        selectedFilters.jobType.length === 0 ||
        selectedFilters.jobType.includes(job.jobType);

      const matchesExperience =
        selectedFilters.experienceLevel.length === 0 ||
        selectedFilters.experienceLevel.includes(job.experienceLevel);

      const matchesWorkMode =
        selectedFilters.workMode.length === 0 ||
        selectedFilters.workMode.includes(job.workMode);

      return (
        matchesKeyword &&
        matchesLocation &&
        matchesCategory &&
        matchesJobType &&
        matchesExperience &&
        matchesWorkMode
      );
    });
  }, [
    keyword,
    location,
    selectedCategory,
    selectedFilters,
  ]);

  return (
    <main className="jobs-page">
      <header className="jobs-page__header">
        <div>
          <p className="jobs-page__eyebrow">Job & Internship Portal</p>

          <h1>Find your next opportunity</h1>

          <p className="jobs-page__description">
            Search jobs and internships by role, location, category,
            experience level, and work mode.
          </p>
        </div>
      </header>

      <section className="jobs-search" aria-label="Search jobs">
        <div className="jobs-search__field">
          <label htmlFor="keyword">Job title or keyword</label>

          <input
            id="keyword"
            type="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="e.g. Frontend Developer"
          />
        </div>

        <div className="jobs-search__field">
          <label htmlFor="location">Location</label>

          <input
            id="location"
            type="search"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="e.g. Lucknow or Remote"
          />
        </div>

        <button type="button" className="jobs-search__button">
          Search jobs
        </button>
      </section>

      <div className="jobs-layout">
        <aside className="jobs-filters">
          <div className="jobs-filters__header">
            <h2>Filters</h2>

            <button type="button" onClick={clearFilters}>
              Clear all
            </button>
          </div>

          <div className="filter-section">
            <h3>Category</h3>

            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              aria-label="Filter by category"
            >
              <option value="">All categories</option>

              {CATEGORIES.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {FILTER_GROUPS.map((group) => (
            <FilterSection
              key={group.key}
              group={group}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          ))}
        </aside>

        <section className="jobs-results" aria-label="Job listings">
          <div className="jobs-results__header">
            <div>
              <h2>Available opportunities</h2>

              <p>
                {filteredJobs.length}{" "}
                {filteredJobs.length === 1 ? "job" : "jobs"} found
              </p>
            </div>
          </div>

          {selectedCategory && (
            <div className="jobs-results__category">
              Showing jobs in{" "}
              <strong>
                {CATEGORY_LABELS[selectedCategory]}
              </strong>
            </div>
          )}

          {filteredJobs.length > 0 ? (
            <div className="jobs-list">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="jobs-empty">
              <h2>No jobs found</h2>

              <p>
                We could not find any opportunities matching your
                current search and filters.
              </p>

              <button type="button" onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Jobs;