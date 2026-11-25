import { useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/* Static content                                                             */
/* Kept outside the components so copy can later be moved to a config/API     */
/* without touching the markup.                                               */
/* -------------------------------------------------------------------------- */

const CATEGORIES = [
  { id: "software-development", label: "Software Development" },
  { id: "web-development", label: "Web Development" },
  { id: "data-analytics", label: "Data & Analytics" },
  { id: "ui-ux-design", label: "UI/UX Design" },
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "content-writing", label: "Content Writing" },
  { id: "customer-support", label: "Customer Support" },
  { id: "finance-accounting", label: "Finance & Accounting" },
];

const FEATURES = [
  {
    id: "jobs-and-internships",
    title: "Jobs and internships in one place",
    description:
      "Browse full-time roles, part-time work, and internships without switching between sites.",
  },
  {
    id: "search-and-filter",
    title: "Search that narrows fast",
    description:
      "Search by keyword and location, then filter by category to find roles that fit you.",
  },
  {
    id: "simple-applications",
    title: "Simple applications",
    description:
      "Create one profile and use it to apply, so you do not repeat the same details each time.",
  },
  {
    id: "track-progress",
    title: "Track your applications",
    description:
      "See every role you applied to and where each application stands from your dashboard.",
  },
  {
    id: "post-openings",
    title: "Built for employers too",
    description:
      "Employers can post openings, review applicants, and manage hiring from one account.",
  },
  {
    id: "secure-accounts",
    title: "Secure accounts",
    description:
      "Separate sign-in for job seekers and employers keeps your data and permissions clear.",
  },
];

const STEPS = [
  {
    id: "create-account",
    title: "Create your account",
    description: "Sign up as a job seeker or employer and complete your profile.",
  },
  {
    id: "search-roles",
    title: "Search and shortlist",
    description: "Find openings by keyword, location, or category and save the ones you like.",
  },
  {
    id: "apply",
    title: "Apply and follow up",
    description: "Send your application and track its status from your dashboard.",
  },
];

/* -------------------------------------------------------------------------- */
/* Small presentational components                                            */
/* -------------------------------------------------------------------------- */

function SectionHeading({ id, title, description }) {
  return (
    <header className="section__header">
      <h2 id={id} className="section__title">
        {title}
      </h2>
      {description && <p className="section__description">{description}</p>}
    </header>
  );
}

function JobSearchForm() {
  const navigate = useNavigate();
  const fieldId = useId();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Only builds a URL for the /jobs page. No API call is made here.
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("keyword", keyword.trim());
    if (location.trim()) params.set("location", location.trim());

    const query = params.toString();
    navigate(query ? `/jobs?${query}` : "/jobs");
  };

  return (
    <form className="job-search" role="search" aria-label="Search jobs" onSubmit={handleSubmit}>
      <div className="job-search__field">
        <label htmlFor={`${fieldId}-keyword`}>Job title or keyword</label>
        <input
          id={`${fieldId}-keyword`}
          name="keyword"
          type="text"
          placeholder="e.g. Frontend developer"
          autoComplete="off"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </div>

      <div className="job-search__field">
        <label htmlFor={`${fieldId}-location`}>Location</label>
        <input
          id={`${fieldId}-location`}
          name="location"
          type="text"
          placeholder="e.g. Lucknow or Remote"
          autoComplete="off"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>

      <button type="submit" className="button button--primary">
        Search jobs
      </button>
    </form>
  );
}

function CategoryList() {
  return (
    <ul className="category-list">
      {CATEGORIES.map((category) => (
        <li key={category.id} className="category-list__item">
          <Link to={`/jobs?category=${encodeURIComponent(category.id)}`}>{category.label}</Link>
        </li>
      ))}
    </ul>
  );
}

function FeatureCard({ title, description }) {
  return (
    <article className="feature-card">
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </article>
  );
}

function Step({ title, description }) {
  return (
    <li className="step">
      <h3 className="step__title">{title}</h3>
      <p className="step__description">{description}</p>
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/* Page sections                                                              */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__title">
        Find the job or internship that starts your next chapter
      </h1>
      <p className="hero__description">
        Search openings from employers, apply in a few steps, and keep track of every application
        in one place.
      </p>

      <div className="hero__actions">
        <Link to="/jobs" className="button button--primary">
          Find Jobs
        </Link>
        <Link to="/register" className="button button--secondary">
          Create Account
        </Link>
      </div>

      <JobSearchForm />
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="section categories" aria-labelledby="categories-title">
      <SectionHeading
        id="categories-title"
        title="Popular categories"
        description="Start with a field and see the openings available."
      />
      <CategoryList />
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="section features" aria-labelledby="features-title">
      <SectionHeading
        id="features-title"
        title="Everything you need to get hired"
        description="Tools for job seekers and employers, built around a simple hiring flow."
      />
      <div className="features__grid">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.id} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="section how-it-works" aria-labelledby="how-it-works-title">
      <SectionHeading id="how-it-works-title" title="How it works" />
      <ol className="how-it-works__steps">
        {STEPS.map((step) => (
          <Step key={step.id} title={step.title} description={step.description} />
        ))}
      </ol>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="section cta" aria-labelledby="cta-title">
      <h2 id="cta-title" className="cta__title">
        Ready to take the next step?
      </h2>
      <p className="cta__description">
        Create a free account to start applying, or browse open roles first.
      </p>
      <div className="cta__actions">
        <Link to="/register" className="button button--primary">
          Create Account
        </Link>
        <Link to="/jobs" className="button button--secondary">
          Browse Jobs
        </Link>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <main className="home">
      <HeroSection />
      <CategoriesSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FinalCtaSection />
    </main>
  );
}