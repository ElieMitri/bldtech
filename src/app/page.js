"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Logo from "../app/assets/bldtech.gif";
import img1 from "../app/assets/img1.jpg";
import img2 from "../app/assets/img2.jpg";
import img3 from "../app/assets/img3.jpg";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open + close on ESC
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // Lock body scroll when modal is open + handle ESC key
  useEffect(() => {
    if (modalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    const onKey = (e) => {
      if (e.key === "Escape") setModalOpen(false);
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, currentImageIndex]);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      console.log("Form submitted:", formData);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false); // close menu after clicking
  };

  // Project data - now as a single project with multiple images
  const project = {
    title: "Premium Pool Collection",
    description:
      "Modern precast swimming pools and luxury architectural solutions",
    images: [img1, img2, img3],
  };

  const openModal = (imageIndex = 0) => {
    setCurrentImageIndex(imageIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="font-sans text-gray-900 m-0 p-0 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 md:px-8 py-3 md:py-4 
    w-[92%] md:w-[90%] max-w-5xl transition-all duration-300 rounded-xl
    ${
      isScrolled ? "backdrop-blur-md bg-black/500 shadow-lg" : "bg-transparent"
    }`}
      >
        <div className="flex justify-between items-center w-full">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
            aria-label="Go to top"
          >
            <div
              className={`text-2xl font-bold uppercase tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-blue-600" : "text-white"
              }`}
            >
              <Image src={Logo} alt=""/>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex space-x-8 list-none m-0 p-0">
            {["Home", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() =>
                    scrollToSection(
                      item.toLowerCase() === "home"
                        ? "hero"
                        : item.toLowerCase()
                    )
                  }
                  className={`font-medium hover:text-blue-400 transition-colors duration-300 bg-transparent border-none cursor-pointer text-base ${
                    isScrolled
                      ? "text-white/60 hover:text-blue-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <button
            className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md focus:outline-none transition-colors duration-300 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <div className="relative w-6 h-4">
              {" "}
              {/* shrink height a bit */}
              {/* Top bar */}
              <span className="absolute top-0 left-0 block w-6 h-0.5 bg-current transition-all duration-300 ease-out" />
              {/* Middle bar */}
              <span className="absolute top-1.75 left-0 block w-6 h-0.5 bg-current transition-all duration-300 ease-out" />
              {/* Bottom bar */}
              <span className="absolute bottom-0 left-0 block w-6 h-0.5 bg-current transition-all duration-300 ease-out" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-10 ease-out ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Full Screen Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br  backdrop-blur-lg transition-all duration-500 ${
            mobileOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Centered Navigation Menu */}
        <div className="relative h-full flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl font-light hover:text-blue-300 transition-colors duration-300 focus:outline-none"
            aria-label="Close menu"
          >
            X
          </button>

          {/* Menu */}
          <nav>
            <ul className="space-y-12 text-center">
              {["Home", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      scrollToSection(
                        item.toLowerCase() === "home"
                          ? "hero"
                          : item.toLowerCase()
                      )
                    }
                    className="text-white text-3xl font-light bg-transparent border-none cursor-pointer hover:text-blue-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300/50 rounded-lg px-6 py-3 hover:scale-105 hover:bg-white/10"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen bg-gradient-to-br from-blue-600/90 to-gray-900/80 flex items-center justify-center text-center text-white relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&crop=center')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 via-transparent to-gray-900/70 animate-pulse-slow" />

        <div className="relative max-w-4xl px-8 z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight animate-fade-in-up">
            Architects with a different approach
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto animate-fade-in-up-delay">
            We design through our conceptual ethos that the greatest solutions
            shine through. Enjoy your life now.
          </p>
          <button
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 border-2 border-white/30 rounded-full text-white font-medium text-lg transition-all duration-500 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm animate-fade-in-up-delay-2 hover:border-white/50 cursor-pointer"
          >
            View Our Work
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={28} color="white" className="opacity-70" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 tracking-tight">
            Our Featured Project
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-20 font-light max-w-2xl mx-auto">
            Precast swimming pools and architectural solutions
          </p>

          {/* Single Project Card */}
          <div className="max-w-4xl mx-auto">
            <div
              onClick={() => openModal(0)}
              className="group bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-6 hover:shadow-[0_25px_80px_-12px_rgba(0,0,0,0.25)] cursor-pointer hover:scale-105 transform-gpu"
            >
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Project info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-lg font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {project.description}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium backdrop-blur-sm">
                      View Gallery ({project.images.length} photos)
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </div>

                {/* Image counter badge */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                  1 / {project.images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-[110] text-white hover:text-gray-300 transition-colors duration-300 p-2 rounded-full bg-black/50 hover:bg-black/70"
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>

          {/* Previous button */}
          <button
            onClick={previousImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-[110] text-white hover:text-gray-300 transition-all duration-300 p-3 rounded-full bg-black/50 hover:bg-black/70 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-[110] text-white hover:text-gray-300 transition-all duration-300 p-3 rounded-full bg-black/50 hover:bg-black/70 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Main image */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-8">
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Image info */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <h3 className="text-2xl font-light mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex justify-center gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-2">
              {currentImageIndex + 1} / {project.images.length}
            </p>
          </div>

          {/* Close on background click */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeModal}
            aria-label="Close gallery"
          />
        </div>
      )}

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 px-8 bg-gray-900 text-white text-center relative overflow-hidden"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-20 font-light max-w-2xl mx-auto">
          {"Ready to start your next project? We'd love to hear from you."}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="text-left space-y-8">
              <div className="flex items-start gap-4 group">
                <MapPin
                  size={24}
                  className="text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="group-hover:text-blue-100 transition-colors duration-300">
                  <div className="font-medium mb-1">Our Location</div>
                  <div className="text-gray-300">
                    1st Floor, Al Nabatieh road, North Nabatieh Factory
                  </div>
                  <div className="text-gray-300">Al Mina, Tripoli, Lebanon</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <Phone
                  size={24}
                  className="text-blue-400 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="group-hover:text-blue-100 transition-colors duration-300">
                  <div className="font-medium mb-1">Call Us</div>
                  <div className="text-gray-300">+961 03/524/144</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <Mail
                  size={24}
                  className="text-blue-400 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="group-hover:text-blue-100 transition-colors duration-300">
                  <div className="font-medium mb-1">Email Us</div>
                  <div className="text-gray-300">samerosta@bldtech.biz</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-6">
                <label className="block mb-3 text-sm text-gray-300 font-medium text-left">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-white/20 rounded-lg bg-white/10 text-white text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-gray-400 hover:bg-white/15"
                  placeholder="Your full name"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-3 text-sm text-gray-300 font-medium text-left">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-white/20 rounded-lg bg-white/10 text-white text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-gray-400 hover:bg-white/15"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-8">
                <label className="block mb-3 text-sm text-gray-300 font-medium text-left">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full p-4 border border-white/20 rounded-lg bg-white/10 text-white text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-vertical placeholder-gray-400 hover:bg-white/15"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 border-none rounded-lg text-white text-base font-medium cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-16">
            {[
              {
                icon: Instagram,
                label: "Instagram",
                color: "hover:bg-pink-600",
              },
              { icon: Facebook, label: "Facebook", color: "hover:bg-blue-600" },
              { icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-700" },
              { icon: Twitter, label: "Twitter", color: "hover:bg-sky-500" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center justify-center w-14 h-14 bg-white/10 rounded-full text-white transition-all duration-300 ${social.color} hover:-translate-y-2 hover:shadow-lg cursor-pointer border border-white/20 hover:border-white/40`}
                title={social.label}
                aria-label={social.label}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.9;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 1s ease-out 0.2s both;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 1s ease-out 0.4s both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </div>
  );
}
