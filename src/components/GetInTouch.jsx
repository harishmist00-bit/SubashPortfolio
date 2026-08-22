import React, { useEffect, useRef, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import reachImg from "../assets/reach.png";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [sendError, setSendError] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});

  // =========================
  // EMAILJS CONFIGURATION
  // =========================
  const SERVICE_ID = "service_i7u4xoc";
  const TEMPLATE_ID = "template_unqefb9";
  const PUBLIC_KEY = "XnWGQmHRG5974ertG";

  // =========================
  // SCROLL ANIMATION
  // =========================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // =========================
  // HANDLE INPUT CHANGES
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name - only letters and spaces
    if (name === "name") {
      const onlyLetters = value.replace(/[^a-zA-Z\s]/g, "");

      setFormData((prev) => ({
        ...prev,
        name: onlyLetters,
      }));

      if (errors.name) {
        setErrors((prev) => ({
          ...prev,
          name: "",
        }));
      }

      return;
    }

    // Mobile - only numbers and maximum 10 digits
    if (name === "mobile") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        mobile: onlyNumbers,
      }));

      if (errors.mobile) {
        setErrors((prev) => ({
          ...prev,
          mobile: "",
        }));
      }

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // =========================
  // FORM SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setSendError("");

    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 letters.";
    }

    // Mobile validation
    if (!formData.mobile) {
      newErrors.mobile = "Please enter your mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    // Comment validation
    if (!formData.comment.trim()) {
      newErrors.comment = "Please enter your message.";
    }

    setErrors(newErrors);

    // Stop if validation fails
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      setIsSending(true);

      // Data sent to EmailJS template
      const templateParams = {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        comment: formData.comment,
      };

      // Send email
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log("Email sent successfully:", formData);

      setSuccessMessage(
        "Message sent successfully! I'll get back to you soon."
      );

      // Clear form
      setFormData({
        name: "",
        mobile: "",
        email: "",
        comment: "",
      });

      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);

      setSendError(
        "Failed to send message. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="bg-[#FAFAFA] px-4 pt-8 pb-12 scroll-mt-24"
      id="contact"
    >
      {/* =========================
          HEADING
      ========================= */}
      <div className="mb-15 text-center">
        <h1
          className={`mb-2 text-[36px] font-medium text-slate-900 ${
            visible
              ? "animate__animated animate__fadeInUp"
              : "opacity-0"
          }`}
        >
          Get in Touch
        </h1>

        <p
          className={`mx-auto max-w-xl pb-8 text-[15px] leading-relaxed text-slate-600 ${
            visible
              ? "animate__animated animate__fadeInUp"
              : "opacity-0"
          }`}
          style={{
            animationDelay: "0.2s",
          }}
        >
          Have a project or opportunity in mind? Feel free to reach out and
          let’s connect to build something meaningful together.
        </p>
      </div>

      {/* =========================
          IMAGE + FORM
      ========================= */}
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-12 sm:px-8 lg:px-24 lg:pb-8 lg:pt-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT : IMAGE */}
          <div className="flex items-center justify-center">
            <img
              src={reachImg}
              alt="Get in touch"
              className="w-full max-w-[500px] object-contain"
            />
          </div>

          {/* RIGHT : FORM */}
          <div className="w-full max-w-[500px] justify-self-center rounded-[14px] border border-gray-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:p-7 lg:p-8">

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME + MOBILE */}
              <div className="grid gap-4 sm:grid-cols-2">

                {/* NAME */}
                <div>
                  <label className="mb-2 block text-[14px] font-medium text-[#071b41]">
                    Your Name :
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className={`h-[36px] w-full rounded-[10px] border px-3 text-[14px] text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-orange-400 ${
                      errors.name
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* MOBILE */}
                <div>
                  <label className="mb-2 block text-[14px] font-medium text-[#071b41]">
                    Mobile :
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile"
                    inputMode="numeric"
                    maxLength={10}
                    className={`h-[36px] w-full rounded-[10px] border px-3 text-[14px] text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-orange-400 ${
                      errors.mobile
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  />

                  {errors.mobile && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.mobile}
                    </p>
                  )}
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#071b41]">
                  Email :
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className={`h-[36px] w-full rounded-[10px] border px-3 text-[14px] text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-orange-400 ${
                    errors.email
                      ? "border-red-400"
                      : "border-gray-200"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-[14px] font-medium text-[#071b41]">
                  Your Comment :
                </label>

                <textarea
                  rows="4"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Message :"
                  className={`w-full resize-none rounded-[10px] border px-3 py-3 text-[14px] text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-orange-400 ${
                    errors.comment
                      ? "border-red-400"
                      : "border-gray-200"
                  }`}
                />

                {errors.comment && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.comment}
                  </p>
                )}
              </div>

              {/* SUCCESS MESSAGE */}
              {successMessage && (
                <p className="rounded-[8px] bg-green-50 px-3 py-2 text-[13px] text-green-600">
                  {successMessage}
                </p>
              )}

              {/* ERROR MESSAGE */}
              {sendError && (
                <p className="rounded-[8px] bg-red-50 px-3 py-2 text-[13px] text-red-500">
                  {sendError}
                </p>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className={`mt-1 inline-flex h-[38px] items-center gap-2 rounded-[10px] px-5 text-[14px] font-medium text-white transition duration-300 ${
                  isSending
                    ? "cursor-not-allowed bg-orange-300"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* =========================
          CONTACT CARDS
      ========================= */}
      <div className="flex flex-wrap items-center justify-center gap-[14px]">

        {/* EMAIL */}
        <a
          href="mailto:developer.subashap17@gmail.com"
          className={`flex w-[350px] flex-col items-center justify-center rounded-[11px] border border-gray-200 bg-white p-12 transition duration-300 hover:-translate-y-1 hover:shadow-md ${
            visible
              ? "animate__animated animate__zoomIn smooth-animation"
              : "opacity-0"
          }`}
          style={{
            animationDelay: "0.3s",
          }}
        >
          <FiMail size={50} className="text-black" />

          <h3 className="mt-2 text-[18px] font-medium text-black">
            Email
          </h3>

          <p className="mt-2 text-[15px] text-gray-500">
            developer.subashap17@gmail.com
          </p>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/918072854180"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex w-[350px] flex-col items-center justify-center rounded-[11px] border border-gray-200 bg-white p-12 transition duration-300 hover:-translate-y-1 hover:shadow-md ${
            visible
              ? "animate__animated animate__zoomIn smooth-animation"
              : "opacity-0"
          }`}
          style={{
            animationDelay: "0.5s",
          }}
        >
          <FaWhatsapp size={50} className="text-black" />

          <h3 className="mt-2 text-[18px] font-medium text-black">
            Whatsapp
          </h3>

          <p className="mt-2 text-[15px] text-gray-500">
            8072854180
          </p>
        </a>

        {/* PHONE */}
        <a
          href="tel:+918072854180"
          className={`flex w-[350px] flex-col items-center justify-center rounded-[11px] border border-gray-200 bg-white p-12 transition duration-300 hover:-translate-y-1 hover:shadow-md ${
            visible
              ? "animate__animated animate__zoomIn smooth-animation"
              : "opacity-0"
          }`}
          style={{
            animationDelay: "0.7s",
          }}
        >
          <FiPhone size={50} className="text-black" />

          <h3 className="mt-2 text-[18px] font-medium text-black">
            Phone
          </h3>

          <p className="mt-2 text-[15px] text-gray-500">
            +91 80728 54180
          </p>
        </a>

      </div>
    </div>
  );
};

export default GetInTouch;