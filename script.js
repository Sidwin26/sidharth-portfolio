/**
 * ============================================================================
 * MUHAMMED FAIZAL - PERSONAL PORTFOLIO JAVASCRIPT
 * Description: Interactive features, mobile navigation handler, form validation,
 *              scroll animations, and dynamic role text.
 * Suitable for: Beginners & Workshop demonstrations.
 * ============================================================================
 */

// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. DYNAMIC COPYRIGHT YEAR
  // Automatically updates the footer copyright year to the current year
  // --------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. NAVBAR SCROLL EFFECT
  // Adds a shadow and darker background when the user scrolls down the page
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('mainNavbar');
  const handleNavbarScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll(); // Initial check on load

  // --------------------------------------------------------------------------
  // 3. AUTO-CLOSE MOBILE NAVIGATION MENU
  // Automatically collapses the hamburger dropdown when a user clicks any link
  // --------------------------------------------------------------------------
  const navLinks = document.querySelectorAll('.custom-navbar .nav-link, .custom-navbar .btn');
  const navbarCollapse = document.getElementById('navbarContent');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // Check if the navbar is currently toggled open on smaller viewports
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. DYNAMIC TYPED ROLE EFFECT
  // Cycles through developer role titles for an engaging hero headline
  // --------------------------------------------------------------------------
  const typedRoleElement = document.getElementById('typed-role');
  if (typedRoleElement) {
    const roles = [
      'FLUTTER DEVELOPER',
      'MOBILE APP SPECIALIST',
      'CROSS-PLATFORM ARCHITECT',
      'DART & FIREBASE ENTHUSIAST'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenRoles = 2000;

    function typeRole() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        // Remove characters
        typedRoleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        // Add characters
        typedRoleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      // Check state transitions
      if (!isDeleting && charIndex === currentRole.length) {
        // Finished typing full title, pause before deleting
        isDeleting = true;
        setTimeout(typeRole, delayBetweenRoles);
        return;
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 400);
        return;
      }

      const nextSpeed = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(typeRole, nextSpeed);
    }

    // Start the typing effect
    typeRole();
  }

  // --------------------------------------------------------------------------
  // 5. BACK TO TOP BUTTON
  // Displays a floating button when scrolled down, and returns smoothly to top
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('btn-back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. CONTACT FORM VALIDATION & SIMULATED SUBMISSION
  // Validates user input and provides accessible feedback with workshop guidance
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const alertContainer = document.getElementById('form-alert-container');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Stop default page refresh

      // Clear existing alerts
      alertContainer.innerHTML = '';

      // Fetch input elements
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        isValid = false;
      } else {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
      }

      // Validate Email with regular expression
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.classList.add('is-invalid');
        isValid = false;
      } else {
        messageInput.classList.remove('is-invalid');
        messageInput.classList.add('is-valid');
      }

      // If validation fails, abort submission
      if (!isValid) {
        showAlert('danger', '<i class="fa-solid fa-triangle-exclamation me-2"></i> Please correct the highlighted fields before sending.');
        return;
      }

      // Show loading spinner on submit button
      const btnText = submitBtn.querySelector('.btn-text');
      const btnSpinner = submitBtn.querySelector('.btn-spinner');
      submitBtn.disabled = true;
      btnSpinner.classList.remove('d-none');
      btnText.textContent = 'Sending Message...';

      // Simulate network request (1.5 seconds)
      setTimeout(() => {
        // Reset button state
        submitBtn.disabled = false;
        btnSpinner.classList.add('d-none');
        btnText.innerHTML = '<i class="fa-solid fa-paper-plane me-2"></i> Send Message';

        // Display success banner
        showAlert('success', `
          <div class="d-flex align-items-center gap-2 mb-1">
            <i class="fa-solid fa-circle-check fs-5 text-success"></i>
            <strong>Thank you, ${escapeHtml(nameInput.value.trim())}!</strong>
          </div>
          <div>Your message was validated successfully. In a production site, connect this form to Formspree, EmailJS, or your backend API to receive emails.</div>
        `);

        // Reset form inputs & validation styling
        contactForm.reset();
        nameInput.classList.remove('is-valid');
        emailInput.classList.remove('is-valid');
        messageInput.classList.remove('is-valid');
      }, 1200);
    });

    // Helper: Show bootstrap alert in container
    function showAlert(type, messageHtml) {
      alertContainer.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show rounded-4" role="alert">
          ${messageHtml}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
    }

    // Helper: Prevent XSS in feedback text
    function escapeHtml(string) {
      const div = document.createElement('div');
      div.textContent = string;
      return div.innerHTML;
    }

    // Remove invalid states on typing
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          input.classList.remove('is-invalid');
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. ACTIVE NAV LINK HIGHLIGHT ON SCROLL (Scrollspy Helper)
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id], header[id]');
  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 180;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

});
