/*
 * Filter and category options for job listings.
 *
 * `value` is the stable identifier stored on each job (and, later, in
 * MongoDB / the API). `label` is only for display. Keeping both here means
 * the UI never hard-codes strings like "Full Time" in more than one place.
 */

export const FILTER_GROUPS = [
  {
    key: "jobType",
    legend: "Job type",
    options: [
      { value: "full-time", label: "Full Time" },
      { value: "part-time", label: "Part Time" },
      { value: "internship", label: "Internship" },
      { value: "contract", label: "Contract" },
    ],
  },
  {
    key: "experienceLevel",
    legend: "Experience level",
    options: [
      { value: "fresher", label: "Fresher" },
      { value: "entry-level", label: "Entry Level" },
      { value: "mid-level", label: "Mid Level" },
      { value: "senior-level", label: "Senior Level" },
    ],
  },
  {
    key: "workMode",
    legend: "Work mode",
    options: [
      { value: "on-site", label: "On-site" },
      { value: "hybrid", label: "Hybrid" },
      { value: "remote", label: "Remote" },
    ],
  },
];

/* Category ids match the links on the Home page: /jobs?category=<id> */
export const CATEGORIES = [
  { value: "software-development", label: "Software Development" },
  { value: "web-development", label: "Web Development" },
  { value: "data-analytics", label: "Data & Analytics" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "content-writing", label: "Content Writing" },
  { value: "customer-support", label: "Customer Support" },
  { value: "finance-accounting", label: "Finance & Accounting" },
];

/* Lookup maps: value -> label */
export const OPTION_LABELS = Object.fromEntries(
  FILTER_GROUPS.flatMap((group) => group.options.map((option) => [option.value, option.label]))
);

export const CATEGORY_LABELS = Object.fromEntries(
  CATEGORIES.map((category) => [category.value, category.label])
);