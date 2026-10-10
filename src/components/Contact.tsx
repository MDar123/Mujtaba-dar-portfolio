import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { profile } from '../data/portfolio'

interface FormData {
  name: string
  email: string
  message: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

const MESSAGE_LIMIT = 1000
const MESSAGE_MIN = 10
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const notBlank = (label: string) => (value: string) => value.trim().length > 0 || `${label} can’t be empty.`

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onTouched' })
  const messageValue = watch('message')
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (data: FormData) => {
    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.EMAILJS_SERVICE_ID,
        import.meta.env.EMAILJS_TEMPLATE_ID,
        {
          // sent under both naming styles so either template variable set works
          name: data.name.trim(),
          email: data.email.trim(),
          from_name: data.name.trim(),
          reply_to: data.email.trim(),
          message: data.message.trim(),
        },
        import.meta.env.EMAILJS_PUBLIC_KEY,
      )
      reset()
      setStatus('success')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  const whatsapp = `https://wa.me/${profile.whatsapp.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
    profile.whatsapp.message,
  )}`

  return (
    <section id="contact" className="section contact">
      <div className="section-marker">
        <span>06 — YOUR NEXT BIG IDEA</span>
        <span>STARTS WITH A HELLO</span>
      </div>
      <h2 data-reveal>
        Let’s build
        <br />
        <em>something together.</em>
      </h2>

      <div className="contact-grid">
        <div className="contact-copy">
          <p>
            I’m always open to discussing new projects, creative ideas or opportunities to be part
            of your visions.
          </p>
          <a className="email-link" href={`mailto:${profile.email}`}>
            {profile.email} ↗
          </a>
          <a
            className="button primary whatsapp-cta"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact on WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <div className="socials">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          aria-busy={status === 'sending'}
          noValidate
        >
          <div className="form-head">
            <div>
              <span className="eyebrow">SEND A MESSAGE</span>
              <h3>
                Tell me about <em>your idea.</em>
              </h3>
            </div>
            <span className="tiny-label form-note">
              <span className="status-dot" /> REPLIES WITHIN 24–48 HOURS
            </span>
          </div>

          <fieldset className="form-fields" disabled={status === 'sending'}>
            <div className="form-row">
              <label className="field" htmlFor="name">
                <span className="field-label">Your name</span>
                <input
                  id="name"
                  autoComplete="name"
                  placeholder="How should I call you?"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  {...register('name', {
                    required: 'Please tell me your name.',
                    minLength: { value: 2, message: 'Name should be at least 2 characters.' },
                    maxLength: { value: 80, message: 'Name is too long.' },
                    validate: notBlank('Name'),
                  })}
                />
                {errors.name && (
                  <span className="field-error" id="name-error" role="alert">
                    {errors.name.message}
                  </span>
                )}
              </label>
              <label className="field" htmlFor="email">
                <span className="field-label">Email address</span>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  {...register('email', {
                    required: 'Please enter your email address.',
                    pattern: { value: EMAIL_PATTERN, message: 'Please enter a valid email address.' },
                    maxLength: { value: 120, message: 'Email address is too long.' },
                  })}
                />
                {errors.email && (
                  <span className="field-error" id="email-error" role="alert">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <label className="field" htmlFor="message">
              <span className="field-label">
                What do you have in mind?
                <small>{(messageValue ?? '').length} / {MESSAGE_LIMIT}</small>
              </span>
              <textarea
                id="message"
                rows={5}
                maxLength={MESSAGE_LIMIT}
                placeholder="An idea, a challenge, a better way of doing things…"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                {...register('message', {
                  required: 'Please write a short message.',
                  minLength: {
                    value: MESSAGE_MIN,
                    message: `Message should be at least ${MESSAGE_MIN} characters.`,
                  },
                  validate: notBlank('Message'),
                })}
              />
              {errors.message && (
                <span className="field-error" id="message-error" role="alert">
                  {errors.message.message}
                </span>
              )}
            </label>

            <div className="form-footer">
              <button
                className={'button primary submit' + (status === 'sending' ? ' is-loading' : '')}
                type="submit"
                disabled={status === 'sending'}
                aria-busy={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    Sending… <span className="spinner" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Send message <span aria-hidden="true">↗</span>
                  </>
                )}
              </button>
              <small className="form-privacy">Your details are only used to reply to you.</small>
            </div>
          </fieldset>

          <p className={'form-status ' + status} role="status">
            {status === 'success'
              ? 'Message sent. Thanks for reaching out — I’ll be in touch.'
              : status === 'error'
                ? `Your message could not be sent. Please try again or email ${profile.email}.`
                : ''}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
