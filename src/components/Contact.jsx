"use client";
import { useRef, useState } from "react";
import Container from "./Container";
import { GiSpinningBlades } from "react-icons/gi";
import emailjs from "@emailjs/browser";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";
import Header from "./Header";

const Contact = () => {
  const { containerRef, titleRef, contentRef } = useRevealOnScroll();
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    // Honeypot spam check
    const botField = form.current?.bot_field?.value;
    if (botField) {
      // Silently ignore bot submission
      e.target.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully. Thank you!",
      });
      setTimeout(() => setStatus({ type: "", message: "" }), 6000);
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_MAIL_SERVICE,
        process.env.NEXT_PUBLIC_MAIL_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_MAIL_USER
      )
      .then(
        () => {
          setLoading(false);
          e.target.reset();
          setStatus({
            type: "success",
            message: "Message sent successfully. Thank you!",
          });
          setTimeout(() => {
            setStatus({ type: "", message: "" });
          }, 6000);
        },
        () => {
          setLoading(false);
          setStatus({
            type: "error",
            message: "There was an error sending your message. Please try again later.",
          });
          setTimeout(() => {
            setStatus({ type: "", message: "" });
          }, 6000);
        }
      );
  };

  return (
    <Container id="contact">
      <div className="mb-14 lg:mb-40 reveal" ref={containerRef}>
        <div className="text-center">
          <div ref={titleRef} className="reveal">
            <Header>Contact Me</Header>
            <p className="text-mocha-subtext0 mt-4 max-w-lg mx-auto font-exo">
              Have a project in mind, a question, or just want to connect? Send me a message!
            </p>
          </div>
        </div>
        <div ref={contentRef} className="reveal">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mx-auto pt-5 max-w-xl sm:pt-10"
          >
            {/* Honeypot field for bot spam prevention */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="bot_field">Do not fill this out</label>
              <input
                type="text"
                name="bot_field"
                id="bot_field"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-mocha-subtext1 font-orbitron"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Diego"
                    className="block w-full rounded-lg border border-mocha-surface1 px-4 py-3 bg-mocha-surface0/70 text-mocha-text shadow-sm placeholder:text-mocha-overlay0 focus:outline-none focus:ring-2 focus:ring-mocha-mauve focus:border-mocha-mauve sm:text-sm font-exo transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-mocha-subtext1 font-orbitron"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    className="block w-full rounded-lg border border-mocha-surface1 px-4 py-3 bg-mocha-surface0/70 text-mocha-text shadow-sm placeholder:text-mocha-overlay0 focus:outline-none focus:ring-2 focus:ring-mocha-mauve focus:border-mocha-mauve sm:text-sm font-exo transition-colors"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold leading-6 text-mocha-subtext1 font-orbitron"
                >
                  Subject
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    className="block w-full rounded-lg border border-mocha-surface1 px-4 py-3 bg-mocha-surface0/70 text-mocha-text shadow-sm placeholder:text-mocha-overlay0 focus:outline-none focus:ring-2 focus:ring-mocha-mauve focus:border-mocha-mauve sm:text-sm font-exo transition-colors"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-mocha-subtext1 font-orbitron"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    required
                    rows={4}
                    name="message"
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    className="block w-full rounded-lg border border-mocha-surface1 px-4 py-3 min-h-28 max-h-48 bg-mocha-surface0/70 text-mocha-text shadow-sm placeholder:text-mocha-overlay0 focus:outline-none focus:ring-2 focus:ring-mocha-mauve focus:border-mocha-mauve sm:text-sm font-exo transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="btn font-orbitron min-w-36"
              >
                {loading ? (
                  <div className="flex justify-center items-center gap-2">
                    <span>Sending</span>
                    <GiSpinningBlades className="animate-spin" />
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>

            <div
              role="status"
              aria-live="polite"
              className={`min-h-10 text-center mt-5 font-exo transition-all duration-300 font-medium ${
                status.message ? "opacity-100" : "opacity-0"
              } ${
                status.type === "error" ? "text-mocha-red" : "text-mocha-green"
              }`}
            >
              {status.message}
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
