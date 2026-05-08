import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './Contact.module.css';

const projectTypes = [
  'New business website',
  'Redesign existing site',
  'Landing page',
  'E-commerce',
  'Ongoing maintenance',
  'Other',
];

export default function Contact() {
  const [state, handleSubmit] = useForm('xdabggad');

  return (
    <div className={styles.wrapper}>
      <div className="section">
        <div className="section-label">// contact</div>
        <h2>
          Let's build<br />
          something.
        </h2>

        <div className={styles.grid}>

          {/* ── LEFT: info panel ── */}
          <div className={styles.info}>
            <h3>Get a free consultation</h3>
            <p>
              Tell me about your project and I'll get back to you within 24 hours
              with thoughts, questions, and a rough scope.
            </p>

            <div className={styles.detail}>
              <div className={styles.detailIcon}>@</div>
              <span>antonio@turnertechsolutions.com</span>
            </div>
            <div className={styles.detail}>
              <div className={styles.detailIcon}>#</div>
              <span>Atlanta, Georgia</span>
            </div>
            <div className={styles.detail}>
              <div className={styles.detailIcon}>↻</div>
              <span>Typically responds in &lt; 24hr</span>
            </div>

            <div className={styles.pricing}>
              <div className={styles.pricingLabel}>// starting from</div>
              <div className={styles.price}>$500</div>
              <div className={styles.priceSub}>5-page business website</div>
            </div>
          </div>

          {/* ── RIGHT: form or success ── */}
          <div>
            {state.succeeded ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✦</div>
                <h3>Message received.</h3>
                <p>Thanks for reaching out — I'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First name</label>
                    <input
                      id="firstName"
                      type="text"
                      name="FirstName"
                      placeholder="Jane"
                      required
                    />
                    <ValidationError field="FirstName" prefix="First name" errors={state.errors} className={styles.fieldError} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last name</label>
                    <input
                      id="lastName"
                      type="text"
                      name="LastName"
                      placeholder="Smith"
                      required
                    />
                    <ValidationError field="LastName" prefix="Last name" errors={state.errors} className={styles.fieldError} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="Email"
                    placeholder="jane@yourbusiness.com"
                    required
                  />
                  <ValidationError field="Email" prefix="Email" errors={state.errors} className={styles.fieldError} />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="business">Business name</label>
                  <input
                    id="business"
                    type="text"
                    name="Business"
                    placeholder="Smith Consulting"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="projectType">Project type</label>
                  <select id="projectType" name="projectType">
                    <option value="">Select one...</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Tell me about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What does your business do? What problem are you trying to solve? Any timeline or budget in mind?"
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} className={styles.fieldError} />
                </div>

                {/* Top-level form error (e.g. network failure) */}
                <ValidationError errors={state.errors} className={styles.formError} />

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={state.submitting}
                >
                  {state.submitting ? 'Sending...' : 'Send Inquiry →'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
