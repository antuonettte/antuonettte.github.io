import React, { useState } from 'react';
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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    business: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to your backend / form service (e.g. Formspree, EmailJS, etc.)
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className="section">
        <div className="section-label">// contact</div>
        <h2>
          Let's build<br />
          something.
        </h2>

        <div className={styles.grid}>
          {/* ── LEFT: info ── */}
          <div className={styles.info}>
            <h3>Get a free consultation</h3>
            <p>
              Tell me about your project and I'll get back to you within 24 hours
              with thoughts, questions, and a rough scope.
            </p>

            <div className={styles.detail}>
              <div className={styles.detailIcon}>@</div>
              {/* TODO: replace with your actual email */}
              <span>hello@turnertech.co</span>
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
              <div className={styles.price}>$800</div>
              <div className={styles.priceSub}>5-page business website</div>
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✦</div>
                <h3>Message received.</h3>
                <p>Thanks for reaching out — I'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>First name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Jane"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@yourbusiness.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Business name</label>
                  <input
                    type="text"
                    name="business"
                    placeholder="Smith Consulting"
                    value={form.business}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Project type</label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                  >
                    <option value="">Select one...</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Tell me about your project</label>
                  <textarea
                    name="message"
                    placeholder="What does your business do? What problem are you trying to solve? Any timeline or budget in mind?"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Inquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
