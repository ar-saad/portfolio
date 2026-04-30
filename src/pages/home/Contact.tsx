import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Twitter,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion, type Variants } from "motion/react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xjglbllp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          _replyto: formState.email,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative isolate overflow-hidden py-24" id="contact">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.1),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.1),transparent_35%)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-[1200px] w-full mx-auto px-6"
      >
        {/* Header section */}
        <div className="text-center mb-20">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 bg-white/5 backdrop-blur text-sm font-medium mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-linear-to-r from-green-500 to-teal-500 animate-pulse" />
            Contact Me
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-semibold title-font leading-tight"
          >
            Let's Build Something Together
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hi? I'm always open to
            new opportunities and interesting conversations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col">
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-8"
            >
              Contact Information
            </motion.h3>
            <div className="space-y-6 flex-1">
              {[
                {
                  icon: Mail,
                  label: "Email Me",
                  value: "arsaad.dev@gmail.com",
                  href: "mailto:arsaad.dev@gmail.com",
                  color: "green",
                },
                {
                  icon: Phone,
                  label: "Call Me",
                  value: "+880 1749-855360",
                  href: "tel:+8801749855360",
                  color: "teal",
                },
                {
                  icon: Twitter,
                  label: "Follow Me",
                  value: "@arsaad_dev",
                  href: "https://twitter.com/arsaad_dev",
                  color: "blue",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Rajshahi, Bangladesh",
                  href: null,
                  color: "orange",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="group flex items-center gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 contact-card-hover"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-500 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`text-lg font-semibold hover:text-${item.color}-500 transition-colors`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex flex-col">
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-8"
            >
              Send a Message
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="flex-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col"
            >
              {status === "success" ? (
                <div className="flex-1 flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-semibold">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-8 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex-1 flex flex-col space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">
                        Your Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 placeholder:text-gray-500 focus:bg-white/10 focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all outline-hidden"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">
                        Your Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 placeholder:text-gray-500 focus:bg-white/10 focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all outline-hidden"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">
                      Subject
                    </label>
                    <input
                      required
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 placeholder:text-gray-500 focus:bg-white/10 focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all outline-hidden"
                    />
                  </div>
                  <div className="space-y-2 flex-1 flex flex-col">
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me more about your project..."
                      className="flex-1 w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 placeholder:text-gray-500 focus:bg-white/10 focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all outline-hidden resize-none min-h-[150px]"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                      <AlertCircle className="w-4 h-4" />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-green-500 to-teal-500 text-white font-bold hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
