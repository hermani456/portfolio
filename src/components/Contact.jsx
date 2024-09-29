"use client";
import { useRef, useState } from "react";
import Container from "./Container";
import { GiSpinningBlades } from "react-icons/gi";
import emailjs from "@emailjs/browser";
import useGsapAnimations from "@/hooks/useGsapAnimation";

const Contact = () => {
  const { containerRef, titleRef, contentRef } = useGsapAnimations();
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sentMessageStatus, setSentMessageStatus] = useState("");

  // const notify = () =>
  //   toast.success("Mensaje enviado", {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_MAIL_SERVICE,
        process.env.NEXT_PUBLIC_MAIL_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_MAIL_USER
      )
      .then(
        (result) => {
          setLoading(false);
          e.target.reset();
          setSentMessageStatus("Message sent");
          setTimeout(() => {
            setSentMessageStatus("");
          }, 5000);
        },
        (error) => {
          setLoading(false);
          e.target.reset();
          setSentMessageStatus("Error sending message");
          setTimeout(() => {
            setSentMessageStatus("");
          }, 5000);
        }
      );
  };

  return (
    <Container id="contact">
      <div className="opacity-0 mb-14 lg:mb-40" ref={containerRef}>
        <div className="text-center">
          <h2
            className="text-white text-3xl lg:text-5xl font-orbitron font-semibold neon-text-blue"
            ref={titleRef}
          >
            Contact Me
          </h2>
        </div>
        <div ref={contentRef}>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mx-auto pt-5 max-w-xl sm:pt-14"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-sec font-orbitron"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-back text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold leading-6 text-sec font-orbitron"
                >
                  Subject
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="subject"
                    id="subject"
                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-back text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-sec font-orbitron"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    required
                    type="text"
                    name="message"
                    id="message"
                    className="block w-full rounded-md border-0 px-3.5 py-2 min-h-[6rem] max-h-[10rem] bg-back text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="btn font-orbitron"
              >
                {loading ? (
                  <div className="flex justify-center items-center gap-2">
                    <div>Sending</div>
                    <GiSpinningBlades className="animate-spin" />
                  </div>
                ) : (
                  "Send"
                )}
              </button>
            </div>
            <p
              className={`min-h-10 text-center mt-5 font-exo text-pri transition-all duration-500 ${
                sentMessageStatus ? "opacity-100" : "opacity-0"
              }`}
            >
              {sentMessageStatus}
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
