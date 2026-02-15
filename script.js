/**
 * Wisdom Show - Framer-Style Landing Page
 * Interactive behaviors: smooth scroll, FAQ accordion, mobile menu, scroll animations
 */

(function() {
  'use strict';

  // ============================================
  // SMOOTH SCROLLING FOR ANCHOR LINKS
  // ============================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Close mobile menu if open
        document.querySelector('.mobile-nav')?.classList.remove('active');
      }
    });
  });

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================

  const header = document.getElementById('header');
  let lastScroll = 0;

  function handleScroll() {
    const currentScroll = window.pageYOffset;
    header.classList.toggle('scrolled', currentScroll > 50);
    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================

  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const body = document.body;

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      const isOpen = mobileNav.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
      mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      body.style.overflow = isOpen ? 'hidden' : '';

      // Animate hamburger to X
      mobileMenuBtn.classList.toggle('open', isOpen);
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        mobileNav.classList.remove('active');
        body.style.overflow = '';
        mobileMenuBtn.classList.remove('open');
      }
    });
  }

  // ============================================
  // FAQ ACCORDION
  // ============================================

  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    if (!question) return;

    question.addEventListener('click', function() {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(other => {
        other.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================

  const revealElements = document.querySelectorAll(
    '.feature-card, .section-title, .section-subtitle, ' +
    '.testimonial-card, .about__content, .about__images, ' +
    '.dashboard-mockup, .faq__list, .cta-section__title, .cta-section__subtitle'
  );

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // ============================================
  // PARALLAX EFFECT FOR HERO SHAPES (subtle)
  // ============================================

  const heroShapes = document.querySelectorAll('.hero__shape');

  window.addEventListener('scroll', function() {
    if (window.innerWidth < 768) return;

    const scrolled = window.pageYOffset;
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 800;
    const progress = Math.min(scrolled / heroHeight, 1);

    heroShapes.forEach((shape, i) => {
      const speed = (i === 0 ? 0.3 : 0.2) * progress * 50;
      shape.style.transform = `translateY(${speed}px)`;
    });
  }, { passive: true });

  // Reset parallax on load
  window.addEventListener('load', function() {
    heroShapes.forEach(shape => {
      shape.style.transform = '';
    });
  });

})();
