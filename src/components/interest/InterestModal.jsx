import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  MISSISSAUGA_HIGH_SCHOOLS,
  SCHOOL_OTHER,
} from "../../data/mississauga_schools";
import styles from "./Interest.module.css";

const FRASER = "John Fraser SS";
const INSTAGRAM_URL = "https://www.instagram.com/fraser.hacks/";
const CS_CLUB_URL = "https://cs.fraserhacks.dev";

const GRADES = ["9", "10", "11", "12", "Other"];

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

function Field({ label, htmlFor, error, errorMessage = "required", children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
        <span className={styles.required}> *</span>
        {error && <span className={styles.errorText}> {errorMessage}</span>}
      </label>
      {children}
    </div>
  );
}

function SelectField({ id, value, onChange, options, placeholder, error }) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${styles.input} ${styles.select} ${error ? styles.invalid : ""}`}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export function InterestModal({ onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    grade: "",
    school: "",
    otherSchool: "",
  });
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [status, setStatus] = useState("idle");
  const firstFieldRef = useRef(null);

  const update = (name, value) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const schoolValue =
    form.school === SCHOOL_OTHER ? form.otherSchool.trim() : form.school;

  const errors = {
    fullName: !form.fullName.trim(),
    email: !isEmail(form.email),
    grade: !form.grade,
    school: !schoolValue,
  };
  const isValid = !Object.values(errors).some(Boolean);
  const showError = (name) => submitAttempted && errors[name];

  useEffect(() => {
    firstFieldRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (!isValid || status === "submitting") return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          grade: form.grade,
          school: schoolValue,
        }),
      });
      if (!response.ok) throw new Error(`status ${response.status}`);
      setStatus("success");
    } catch (err) {
      console.error("interest signup failed", err);
      setStatus("error");
    }
  };

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="interest-title"
    >
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className={styles.close}
        >
          &times;
        </button>

        {status === "success" ? (
          <div className={styles.success}>
            <h2 id="interest-title" className={styles.title}>
              You're on the list!
            </h2>
            <p className={styles.subtitle}>
              We'll email you at{" "}
              <span className={styles.highlight}>{form.email.trim()}</span>{" "}
              when FraserHacks 2027 details go live.
            </p>
            {schoolValue === FRASER && (
              <p className={styles.subtitle}>
                Since you're at Fraser, check out the{" "}
                <a
                  className={styles.link}
                  href={CS_CLUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  John Fraser CS Club
                </a>
                !
              </p>
            )}
            <p className={styles.subtitle}>
              Follow{" "}
              <a
                className={styles.link}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                @fraser.hacks
              </a>{" "}
              on Instagram for updates.
            </p>
            <button type="button" onClick={onClose} className={styles.submit}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h2 id="interest-title" className={styles.title}>
              FraserHacks 2027
            </h2>
            <p className={styles.subtitle}>
              Coming <span className={styles.highlight}>March 2027</span>. Drop
              your info and we'll reach out first when registration opens.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <Field
                label="Full name"
                htmlFor="interest-full-name"
                error={showError("fullName")}
              >
                <input
                  id="interest-full-name"
                  ref={firstFieldRef}
                  className={`${styles.input} ${showError("fullName") ? styles.invalid : ""}`}
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  placeholder="John Doe"
                  maxLength={120}
                  autoComplete="name"
                />
              </Field>
              <Field
                label="Email"
                htmlFor="interest-email"
                error={showError("email")}
                errorMessage={
                  form.email.trim() ? "enter a valid email" : "required"
                }
              >
                <input
                  id="interest-email"
                  type="email"
                  className={`${styles.input} ${showError("email") ? styles.invalid : ""}`}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@example.com"
                  maxLength={200}
                  autoComplete="email"
                />
              </Field>
              <Field
                label="Grade"
                htmlFor="interest-grade"
                error={showError("grade")}
              >
                <SelectField
                  id="interest-grade"
                  value={form.grade}
                  onChange={(v) => update("grade", v)}
                  options={GRADES}
                  placeholder="Select your grade"
                  error={showError("grade")}
                />
              </Field>
              <Field
                label="School"
                htmlFor="interest-school"
                error={showError("school")}
              >
                <SelectField
                  id="interest-school"
                  value={form.school}
                  onChange={(v) => update("school", v)}
                  options={MISSISSAUGA_HIGH_SCHOOLS}
                  placeholder="Select your school"
                  error={showError("school")}
                />
                {form.school === SCHOOL_OTHER && (
                  <input
                    className={`${styles.input} ${styles.otherSchool} ${showError("school") ? styles.invalid : ""}`}
                    value={form.otherSchool}
                    onChange={(e) => update("otherSchool", e.target.value)}
                    placeholder="Please specify school name"
                    aria-label="School name (other)"
                    maxLength={120}
                  />
                )}
              </Field>

              {status === "error" && (
                <p className={styles.errorBox}>
                  We couldn't save that right now. Please try again in a moment.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className={styles.submit}
              >
                {status === "submitting" ? "Sending..." : "Count me in"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
