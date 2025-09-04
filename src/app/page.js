"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
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
  Users,
  Award,
  Target,
  Eye,
  Building,
  Wrench,
  ClipboardList,
  Lightbulb,
  Star,
  Quote,
  Calendar,
  ArrowRight,
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

  // Build the SVG background as an encoded data URL — NO backticks anywhere.
  const gridSvg =
    '<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#ffffff" fill-opacity="1"><path d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/></g></g></svg>';
  const gridDataUrl =
    "url('data:image/svg+xml," + encodeURIComponent(gridSvg) + "')";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open + close on ESC
  useEffect(() => {
    if (mobileOpen || modalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setModalOpen(false);
      }
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, modalOpen]);

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
    setMobileOpen(false);
  };

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
  const closeModal = () => setModalOpen(false);
  const nextImage = () =>
    setCurrentImageIndex((p) => (p + 1) % project.images.length);
  const previousImage = () =>
    setCurrentImageIndex(
      (p) => (p - 1 + project.images.length) % project.images.length
    );

  // Data for new sections
  const services = [
    {
      icon: Building,
      title: "Architectural Design",
      description:
        "Innovative and sustainable design solutions tailored to your vision and needs.",
    },
    {
      icon: Wrench,
      title: "Construction Management",
      description:
        "End-to-end project management ensuring quality, timeline, and budget adherence.",
    },
    {
      icon: ClipboardList,
      title: "Project Consulting",
      description:
        "Expert guidance and strategic planning for complex architectural projects.",
    },
    {
      icon: Lightbulb,
      title: "Design Innovation",
      description:
        "Cutting-edge design solutions using the latest technology and sustainable practices.",
    },
  ];

  const teamMembers = [
    {
      name: "Samer Osta",
      role: "Founder & Lead Architect",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description:
        "With over 15 years of experience in architectural design and project management.",
    },
    {
      name: "Sarah Mitchell",
      role: "Senior Project Manager",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face",
      description:
        "Specializes in large-scale commercial and residential project coordination.",
    },
    {
      name: "Ahmed Hassan",
      role: "Design Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description:
        "Expert in sustainable design and innovative architectural solutions.",
    },
  ];

  const testimonials = [
    {
      quote:
        "BLDTECH transformed our vision into reality. Their attention to detail and innovative approach exceeded our expectations.",
      author: "Maria Rodriguez",
      company: "Luxury Homes LLC",
      rating: 5,
    },
    {
      quote:
        "Professional, reliable, and creative. The team at BLDTECH delivered our project on time and within budget.",
      author: "James Thompson",
      company: "Commercial Developments",
      rating: 5,
    },
    {
      quote:
        "Outstanding architectural solutions. Their design process is collaborative and results-driven.",
      author: "Nadia Al-Mahmoud",
      company: "Resort Properties",
      rating: 5,
    },
  ];

  const clients = [
    "Luxury Homes LLC",
    "Commercial Developments",
    "Resort Properties",
    "Urban Planning Corp",
    "Green Building Initiative",
    "Modern Living Spaces",
  ];

  const blogPosts = [
    {
      title: "Sustainable Architecture: The Future of Building Design",
      excerpt:
        "Exploring eco-friendly design principles and their impact on modern construction.",
      date: "2024-08-15",
      author: "Samer Osta",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    },
    {
      title: "Maximizing Small Spaces: Design Tips for Urban Living",
      excerpt:
        "Creative solutions for making the most of limited space in city environments.",
      date: "2024-08-01",
      author: "Sarah Mitchell",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
    {
      title: "The Art of Pool Design: Creating Aquatic Masterpieces",
      excerpt:
        "Behind the scenes of our premium pool collection and design philosophy.",
      date: "2024-07-20",
      author: "Ahmed Hassan",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
    },
  ];

  // CSS moved to a plain string (no template literals), then injected.
  const styles = [
    "@keyframes fade-in-up {",
    "  from { opacity: 0; transform: translateY(40px); }",
    "  to { opacity: 1; transform: translateY(0); }",
    "}",
    "@keyframes pulse-slow {",
    "  0%, 100% { opacity: 0.7; }",
    "  50% { opacity: 0.9; }",
    "}",
    "@keyframes float {",
    "  0%, 100% { transform: translateY(0); }",
    "  50% { transform: translateY(-10px); }",
    "}",
    ".animate-fade-in-up { animation: fade-in-up 1s ease-out; }",
    ".animate-fade-in-up-delay { animation: fade-in-up 1s ease-out 0.2s both; }",
    ".animate-fade-in-up-delay-2 { animation: fade-in-up 1s ease-out 0.4s both; }",
    ".animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }",
    ".animate-float { animation: float 6s ease-in-out infinite; }",
    ":global(html) { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }",
  ].join("\n");

  return (
    <>
      {/* Critical mobile meta + safe area support */}
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
      </Head>

      <div className="font-sans text-gray-900 m-0 p-0 overflow-x-hidden">
        {/* Navigation */}
        <nav
          className={
            "fixed top-2 left-1/2 -translate-x-1/2 z-50 px-4 md:px-8 py-3 md:py-4 w-[92%] md:w-[90%] max-w-5xl transition-all duration-300 rounded-xl " +
            (isScrolled
              ? "backdrop-blur-md bg-black/10 shadow-lg"
              : "bg-transparent")
          }
          style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
        >
          <div className="flex justify-between items-center w-full">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
              aria-label="Go to top"
            >
              <div
                className={
                  "text-2xl font-bold uppercase tracking-wider transition-colors duration-300 " +
                  (isScrolled ? "text-blue-600" : "text-white")
                }
              >
                <Image
                  src={Logo}
                  alt="BLDTECH"
                  width={120}
                  height={34}
                  priority
                />
              </div>
            </button>

            {/* Desktop links */}
            <ul className="hidden md:flex space-x-8 list-none m-0 p-0">
              {[
                "Home",
                "About",
                "Services",
                // "Team",
                // "Projects",
                // "Blog",
                // "Contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      scrollToSection(
                        item.toLowerCase() === "home"
                          ? "hero"
                          : item.toLowerCase()
                      )
                    }
                    className={
                      "font-medium transition-colors duration-300 bg-transparent border-none cursor-pointer text-base " +
                      (isScrolled
                        ? "text-white/80 hover:text-blue-400"
                        : "text-white/90 hover:text-white")
                    }
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile burger */}
            <button
              className={
                "md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md focus:outline-none transition-colors duration-300 " +
                (isScrolled ? "text-gray-100" : "text-white")
              }
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Menu />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={
            "fixed inset-0 z-[60] md:hidden transition-all duration-200 ease-out " +
            (mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none")
          }
          aria-hidden={!mobileOpen}
        >
          <div
            className={
              "absolute inset-0 bg-black/60 backdrop-blur-lg transition-all duration-300 " +
              (mobileOpen ? "opacity-100 scale-100" : "opacity-0 scale-95")
            }
            style={{ WebkitBackdropFilter: "blur(16px)" }}
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative h-full flex items-center justify-center">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl font-light hover:text-blue-300 transition-colors duration-300 focus:outline-none"
              aria-label="Close menu"
            >
              <X />
            </button>
            <nav>
              <ul className="space-y-8 text-center">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Team",
                  "Projects",
                  "Blog",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        scrollToSection(
                          item.toLowerCase() === "home"
                            ? "hero"
                            : item.toLowerCase()
                        )
                      }
                      className="text-white text-2xl font-light bg-transparent border-none cursor-pointer hover:text-blue-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300/50 rounded-lg px-6 py-3 hover:scale-105"
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
          className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-[100dvh] md:min-h-screen md:bg-fixed bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&crop=center')",
            paddingBottom: "max(2rem, env(safe-area-inset-bottom))",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 via-transparent to-gray-900/70 animate-pulse-slow" />
          <div className="relative max-w-4xl px-8 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight animate-fade-in-up">
              Architects with a different approach
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto animate-fade-in-up-delay">
              We design through our conceptual ethos that the greatest solutions
              shine through. Enjoy your life now.
            </p>
            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white/10 border-2 border-white/30 rounded-full text-white font-medium text-base sm:text-lg transition-all duration-500 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm animate-fade-in-up-delay-2 hover:border-white/50 cursor-pointer"
            >
              Discover Our Story
              <ChevronDown size={20} className="animate-bounce" />
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={28} color="white" className="opacity-70" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 tracking-tight">
                  About BLDTECH
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Founded on the principle that exceptional design transforms
                  lives, BLDTECH is a leading architectural firm specializing in
                  innovative solutions for residential, commercial, and luxury
                  projects.
                </p>
                <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                  Our team combines decades of experience with cutting-edge
                  technology and sustainable practices to create spaces that not
                  only inspire but also respect our environment and community.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <Target
                      className="text-blue-600 mt-1 animate-float"
                      size={24}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Our Mission
                      </h3>
                      <p className="text-gray-600">
                        To create exceptional architectural solutions that
                        enhance lives and communities through innovative design
                        and sustainable practices.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Eye
                      className="text-blue-600 mt-1 animate-float"
                      size={24}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Our Vision
                      </h3>
                      <p className="text-gray-600">
                        To be the premier architectural firm recognized for
                        transforming spaces into extraordinary experiences that
                        stand the test of time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop"
                    alt="BLDTECH Office"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </div>
                <div className="absolute -top-8 -right-8 bg-white text-gray-900 p-8 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 tracking-tight">
                Our Services
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
                Comprehensive architectural solutions from concept to completion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105"
                >
                  <div className="mb-6 p-4 bg-blue-50 rounded-xl w-fit group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon
                      size={32}
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Get Started Today
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-32 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 tracking-tight">
                Meet Our Team
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
                Passionate professionals dedicated to bringing your vision to
                life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group text-center hover:-translate-y-4 transition-all duration-500"
                >
                  <div className="relative mb-6 mx-auto w-48 h-48">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
                    />
                    <div className="absolute inset-0 rounded-full bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
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
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm">
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-lg font-light opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {project.description}
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium backdrop-blur-sm">
                        View Gallery ({project.images.length} photos)
                        <ChevronRight size={16} />
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                    1 / {project.images.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 px-8 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                What Our Clients Say
              </h2>
              <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
                Trusted by leading companies and satisfied homeowners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <Quote className="text-white/50 mb-4" size={32} />
                  <p className="text-white/90 leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-white/70 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-light mb-8">
                Trusted by Industry Leaders
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="text-white/80 text-lg font-medium hover:text-white transition-colors duration-300"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          id="process"
          className="py-32 px-8 bg-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 tracking-tight">
                Our Process
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
                From initial consultation to final delivery, we guide you
                through every step of your architectural journey
              </p>
            </div>

            <div className="relative">
              {/* Timeline line (desktop only) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600 opacity-30 hidden md:block" />

              <div className="space-y-16 md:space-y-24">
                {[
                  {
                    step: "01",
                    title: "Discovery & Consultation",
                    description:
                      "We begin with an in-depth consultation to understand your vision, needs, budget, and timeline. This foundational phase ensures every detail is captured.",
                    icon: Users,
                    position: "left",
                  },
                  {
                    step: "02",
                    title: "Design & Planning",
                    description:
                      "Our team creates detailed architectural plans, 3D renderings, and technical drawings. We collaborate closely with you to refine every aspect of the design.",
                    icon: Lightbulb,
                    position: "right",
                  },
                  {
                    step: "03",
                    title: "Approval & Permits",
                    description:
                      "We handle all necessary permits, approvals, and regulatory requirements, ensuring your project meets all local building codes and standards.",
                    icon: ClipboardList,
                    position: "left",
                  },
                  {
                    step: "04",
                    title: "Construction Management",
                    description:
                      "Our experienced project managers oversee every aspect of construction, maintaining quality standards while keeping your project on schedule and within budget.",
                    icon: Building,
                    position: "right",
                  },
                  {
                    step: "05",
                    title: "Quality Assurance & Delivery",
                    description:
                      "Before handover, we conduct thorough quality inspections and provide comprehensive documentation, ensuring everything exceeds your expectations.",
                    icon: Award,
                    position: "left",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center ${
                      item.position === "right" ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 text-center md:text-left ${
                        item.position === "right"
                          ? "md:text-right md:pr-16"
                          : "md:pl-16"
                      }`}
                    >
                      <div className="group">
                        {/* Step number (always visible on mobile, side on desktop) */}
                        <div className="mb-4 md:mb-0 flex justify-center md:justify-start md:hidden">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                            {item.step}
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                          {item.description}
                        </p>

                        <div className="mt-6 p-6 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300 inline-block">
                          <item.icon
                            size={32}
                            className="text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="text-sm text-gray-500 font-medium">
                            Step {item.step} of 05
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step number desktop (side circle) */}
                    <div className="hidden md:block">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-700 transition-all duration-300 group-hover:scale-110">
                        {item.step}
                      </div>
                    </div>

                    {/* Timeline dot (desktop only) */}
                    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 mx-8 md:mx-0">
                      <div className="hidden md:block w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-20">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  {
                    " Every great project begins with a conversation. Let's discuss how we can bring your architectural vision to life."
                  }
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/96103524144?text=Hello,%20I%20would%20like%20to%20schedule%20a%20consultation%20please!",
                      "_blank"
                    )
                  }
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium"
                >
                  Schedule a Consultation
                  <Calendar size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            style={{ WebkitBackdropFilter: "blur(6px)" }}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-[110] text-white hover:text-gray-300 transition-colors duration-300 p-2 rounded-full bg-black/50 hover:bg-black/70"
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>
            <button
              onClick={previousImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-[110] text-white hover:text-gray-300 transition-all duration-300 p-3 rounded-full bg-black/50 hover:bg-black/70 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-[110] text-white hover:text-gray-300 transition-all duration-300 p-3 rounded-full bg-black/50 hover:bg-black/70 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-8">
              <Image
                src={project.images[currentImageIndex]}
                alt={project.title + " - Image " + (currentImageIndex + 1)}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
              <h3 className="text-2xl font-light mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-center gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={
                      "w-2 h-2 rounded-full transition-all duration-300 " +
                      (index === currentImageIndex
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/75")
                    }
                    aria-label={"Go to image " + (index + 1)}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {currentImageIndex + 1} / {project.images.length}
              </p>
            </div>
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
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{ backgroundImage: gridDataUrl }}
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
                    <div className="text-gray-300">
                      Al Mina, Tripoli, Lebanon
                    </div>
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
                    rows={7}
                    className="w-full p-4 border border-white/20 rounded-lg bg-white/10 text-white text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none placeholder-gray-400 hover:bg-white/15"
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
                {
                  icon: Facebook,
                  label: "Facebook",
                  color: "hover:bg-blue-600",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  color: "hover:bg-blue-700",
                },
                { icon: Twitter, label: "Twitter", color: "hover:bg-sky-500" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={
                    "flex items-center justify-center w-14 h-14 bg-white/10 rounded-full text-white transition-all duration-300 " +
                    social.color +
                    " hover:-translate-y-2 hover:shadow-lg cursor-pointer border border-white/20 hover:border-white/40"
                  }
                  title={social.label}
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="mb-6">
                  <Image
                    src={Logo}
                    alt="BLDTECH"
                    width={150}
                    height={42}
                    className=""
                  />
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                  BLDTECH is a leading architectural firm specializing in
                  innovative design solutions for residential, commercial, and
                  luxury projects. We transform visions into reality through
                  exceptional design and craftsmanship.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, color: "hover:text-pink-400" },
                    { icon: Facebook, color: "hover:text-blue-400" },
                    { icon: Linkedin, color: "hover:text-blue-400" },
                    { icon: Twitter, color: "hover:text-sky-400" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={
                        "text-gray-400 transition-colors duration-300 " +
                        social.color
                      }
                      aria-label="Social media link"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {[
                    "About",
                    "Services",
                    "Team",
                    "Projects",
                    "Process",
                    "Contact",
                  ].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-gray-400 hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer text-left"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4 text-gray-400">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="text-blue-400 mt-0.5 flex-shrink-0"
                    />
                    <div className="text-sm">
                      1st Floor, Al Nabatieh road,
                      <br />
                      North Nabatieh Factory
                      <br />
                      Al Mina, Tripoli, Lebanon
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-blue-400 flex-shrink-0" />
                    <span className="text-sm">+961 03/524/144</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-blue-400 flex-shrink-0" />
                    <span className="text-sm">samerosta@bldtech.biz</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 BLDTECH. All rights reserved.
              </p>
              {/* <div className="flex gap-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div> */}
            </div>
          </div>
        </footer>

        {/* Custom Styles */}
        <style jsx>{styles}</style>
      </div>
    </>
  );
}
