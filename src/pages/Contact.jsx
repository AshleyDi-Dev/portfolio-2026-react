import { useRef, useState } from 'react'
import Seo from '../components/Seo.jsx'

import { RESUME } from '../data/site.js'
const EMAIL = 'ashleydi.dev@gmail.com'
const FORMSPREE = 'https://formspree.io/f/mreajdpn'

export default function Contact() {
  const [emailBtnText, setEmailBtnText] = useState('Prefer email? Click to copy')
  const [submitText, setSubmitText] = useState('Send It →')
  const [toast, setToast] = useState('')
  const [toastShow, setToastShow] = useState(false)
  const formRef = useRef(null)

  const showToast = (msg) => {
    setToast(msg)
    setToastShow(true)
    setTimeout(() => setToastShow(false), 3000)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setEmailBtnText('Copied!')
      showToast('Email copied to clipboard')
      setTimeout(() => setEmailBtnText('Prefer email? Click to copy'), 2500)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    const data = new FormData(form)
    try {
      const response = await fetch(FORMSPREE, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        form.reset()
        setSubmitText('Sent ✓')
        setTimeout(() => setSubmitText('Send It →'), 3000)
        showToast('Message sent — talk soon!')
      } else {
        showToast('Something went wrong — try emailing directly.')
      }
    } catch {
      showToast('Something went wrong — try emailing directly.')
    }
  }

  return (
    <div className="page-contact">
      <Seo
        title="Contact | Ashley DiBuduo"
        description="Get in touch for project management, product, or digital collaboration opportunities. Let’s build thoughtful, user-focused experiences."
        url="https://ashleydibuduo.ca/contact"
        ogDescription="Get in touch regarding product, project management, or collaboration opportunities."
        imageAlt="Contact Ashley DiBuduo"
        twitterDescription="Reach out for product, project management, or collaboration opportunities."
      />

      <div className="contact-page">
        {/* LEFT */}
        <div className="contact-left">
          <div>
            <div className="page-label">Get In Touch</div>
            <h1>Let's<br /><span>talk.</span></h1>
            <p className="availability">
              I'm based in <strong>Vancouver, BC</strong> — open to remote roles across Canada and hybrid opportunities in the Greater Vancouver Area. I'm actively looking for product roles, APM programs, and select freelance collaborations.
            </p>
          </div>

          <div>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/ashleydibuduo/" className="contact-link-item" target="new">
                <div className="link-left">
                  <div className="link-icon">in</div>
                  <div>
                    <div className="link-label">LinkedIn</div>
                    <div className="link-sublabel">Connect with me</div>
                  </div>
                </div>
                <span className="link-arrow">→</span>
              </a>
              <a href="https://github.com/AshleyDi-Dev" className="contact-link-item" target="new">
                <div className="link-left">
                  <div className="link-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                  </div>
                  <div>
                    <div className="link-label">GitHub</div>
                    <div className="link-sublabel">See what I'm building</div>
                  </div>
                </div>
                <span className="link-arrow">→</span>
              </a>
              <a href={RESUME} className="contact-link-item" download>
                <div className="link-left">
                  <div className="link-icon">↓</div>
                  <div>
                    <div className="link-label">Resume / CV</div>
                    <div className="link-sublabel">Download PDF</div>
                  </div>
                </div>
                <span className="link-arrow">→</span>
              </a>
            </div>

            <button className="email-copy-btn" onClick={copyEmail}>
              <span>✉</span>
              <span>{emailBtnText}</span>
            </button>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="contact-right">
          <div className="form-label-section">Send a Message</div>
          <form className="contact-form" ref={formRef} action={FORMSPREE} method="POST" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="type">What's this about?</label>
              <select name="type" id="type" defaultValue="">
                <option value="" disabled>Select an option</option>
                <option>Co-op / Internship Opportunity</option>
                <option>Freelance Project</option>
                <option>Collaboration</option>
                <option>Just saying hi</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" placeholder="Tell me what you're working on..."></textarea>
            </div>
            <div className="form-submit">
              <span className="form-note">I'll get back to you within 1–2 days.</span>
              <button type="submit" className="btn-primary">{submitText}</button>
            </div>
          </form>
        </div>
      </div>

      {/* TOAST */}
      <div className={`toast${toastShow ? ' show' : ''}`}>{toast}</div>
    </div>
  )
}
