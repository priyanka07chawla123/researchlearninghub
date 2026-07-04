/**
 * Research Learning Centre - Main Script
 * Handles form submissions and dynamic navigation updates.
 */

document.addEventListener("DOMContentLoaded", function () {
  
  // ==========================================
  // 1. DYNAMIC NAVIGATION HIGHLIGHTING
  // ==========================================
  // This automatically marks the current page as 'active' in the menu
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar nav a");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (currentPath === linkPath || (currentPath === "" && linkPath === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // ==========================================
  // 2. CONTACT FORM INTERACTIVITY
  // ==========================================
  const contactForm = document.querySelector(".contact-form");

  // Check if the contact form exists on the current page before running code
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      // Prevent the default browser behavior (page reload)
      event.preventDefault();

      // Extract the sender's name for a personalized message
      const nameInput = contactForm.querySelector('input[type="text"]');
      const scholarName = nameInput ? nameInput.value.trim() : "Scholar";

      // Smoothly transition the form into a success confirmation message
      contactForm.style.opacity = "0";
      
      setTimeout(() => {
        contactForm.innerHTML = `
          <div style="text-align: center; padding: 40px 20px; animation: fadeIn 0.5s ease forward;">
            <div style="font-size: 54px; margin-bottom: 20px;">✅</div>
            <h3 style="color: #002e7a; margin-bottom: 12px; font-size: 26px; font-weight: 700;">
              Submission Received!
            </h3>
            <p style="color: #6b778c; font-size: 16px; line-height: 1.6; max-width: 450px; margin: 0 auto;">
              Thank you, <strong>${scholarName}</strong>. Your research consultation request has been successfully transmitted to our academic review panel. 
            </p>
            <p style="color: #0052cc; font-size: 14px; font-weight: 600; margin-top: 20px;">
              Expect an email response within 24–48 hours.
            </p>
          </div>
        `;
        contactForm.style.opacity = "1";
      }, 300);
    });
  }
});
