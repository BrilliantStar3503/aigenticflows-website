"use client";

import { useState, type FormEvent } from "react";
import { Check, CheckCircle2 } from "lucide-react";

const BENEFITS = [
  "Personalized demo",
  "Workflow consultation",
  "Migration advice",
  "Pricing guidance",
];

const INDUSTRIES = [
  "Insurance Agency",
  "Financial Advisory",
  "Real Estate",
  "Accounting",
  "Healthcare",
  "Consulting",
  "Professional Services",
  "Other",
];

const COMPANY_SIZES = ["1–10 employees", "11–50 employees", "51–200 employees", "200+ employees"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClassName =
  "h-11 rounded-xl border border-neutral-200 bg-white px-3.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-red focus:ring-2 focus:ring-brand-red/15";

export function ContactForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industry: INDUSTRIES[0],
    companySize: COMPANY_SIZES[0],
    message: "",
  });
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    values.firstName.trim().length > 0 &&
    values.lastName.trim().length > 0 &&
    EMAIL_PATTERN.test(values.email) &&
    values.company.trim().length > 0;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTouched(true);
    if (isValid) setSubmitted(true);
  };

  const setField = (field: keyof typeof values, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  return (
    <section id="contact-form" className="mx-auto max-w-[1600px] scroll-mt-20 px-4 sm:px-6 py-20 lg:px-14">
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <span className="text-[10.5px] font-bold uppercase tracking-wider text-brand-red">
            Request a consultation
          </span>
          <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-tight text-neutral-900">
            Speak with our team
          </h2>
          <p className="mt-3.5 text-[14.5px] leading-relaxed text-neutral-600">
            Tell us a bit about your business and we&apos;ll follow up with a
            plan tailored to how your team actually works.
          </p>

          <ul className="mt-7 space-y-3">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2.5 text-[13.5px] text-neutral-700">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-pink">
                  <Check size={11} className="text-brand-red" strokeWidth={3} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-100 bg-white p-8 shadow-[0_4px_24px_rgba(17,17,17,0.03)]">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-pink">
                <CheckCircle2 size={26} className="text-brand-red" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">Request received</h3>
              <p className="mt-1.5 max-w-[320px] text-[13.5px] leading-relaxed text-neutral-600">
                Someone from our team will reach out within one business day.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-first-name" className="text-[12.5px] font-medium text-neutral-700">
                    First name
                  </label>
                  <input
                    id="contact-first-name"
                    value={values.firstName}
                    onChange={(event) => setField("firstName", event.target.value)}
                    className={inputClassName}
                  />
                  {touched && values.firstName.trim().length === 0 && (
                    <span className="text-[11px] font-medium text-red-500">Required</span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-last-name" className="text-[12.5px] font-medium text-neutral-700">
                    Last name
                  </label>
                  <input
                    id="contact-last-name"
                    value={values.lastName}
                    onChange={(event) => setField("lastName", event.target.value)}
                    className={inputClassName}
                  />
                  {touched && values.lastName.trim().length === 0 && (
                    <span className="text-[11px] font-medium text-red-500">Required</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-[12.5px] font-medium text-neutral-700">
                  Business email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={(event) => setField("email", event.target.value)}
                  className={inputClassName}
                />
                {touched && !EMAIL_PATTERN.test(values.email) && (
                  <span className="text-[11px] font-medium text-red-500">Enter a valid email address</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-company" className="text-[12.5px] font-medium text-neutral-700">
                  Company
                </label>
                <input
                  id="contact-company"
                  value={values.company}
                  onChange={(event) => setField("company", event.target.value)}
                  className={inputClassName}
                />
                {touched && values.company.trim().length === 0 && (
                  <span className="text-[11px] font-medium text-red-500">Required</span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-industry" className="text-[12.5px] font-medium text-neutral-700">
                    Industry
                  </label>
                  <select
                    id="contact-industry"
                    value={values.industry}
                    onChange={(event) => setField("industry", event.target.value)}
                    className={`${inputClassName} appearance-none`}
                  >
                    {INDUSTRIES.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-company-size" className="text-[12.5px] font-medium text-neutral-700">
                    Company size
                  </label>
                  <select
                    id="contact-company-size"
                    value={values.companySize}
                    onChange={(event) => setField("companySize", event.target.value)}
                    className={`${inputClassName} appearance-none`}
                  >
                    {COMPANY_SIZES.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-[12.5px] font-medium text-neutral-700">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us about your business and what you're looking for…"
                  value={values.message}
                  onChange={(event) => setField("message", event.target.value)}
                  className="resize-none rounded-xl border border-neutral-200 bg-white px-3.5 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-red focus:ring-2 focus:ring-brand-red/15"
                />
              </div>

              <button
                type="submit"
                className="mt-1 h-11 w-full rounded-xl bg-brand-gold text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all hover:bg-brand-gold-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2"
              >
                Request Consultation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
