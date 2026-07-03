# 🏥 OrthoNow – Orthopaedic Clinic Landing Page

## 📌 Project Overview

This project was developed as part of the **Namoza Developer Assignment**.

OrthoNow is a responsive landing page designed for an orthopaedic clinic to increase consultation bookings and improve lead tracking using **Google Tag Manager (GTM)** and **Google Analytics 4 (GA4)**.

The website focuses on providing a clean user experience while tracking important patient interactions for marketing and analytics.

---

# 🚀 Features

- Responsive Landing Page
- Modern Hero Section
- Sticky Navigation Bar
- Book Consultation Form
- Thank You Message after Form Submission
- Call Now Button
- WhatsApp Button
- Download Patient Guide
- Why Choose OrthoNow Section
- Our Specialities
- Meet Our Expert Doctors
- FAQ Section
- Clinic Locations
- Emergency Contact Banner
- Professional Footer

---

# 📊 Event Tracking (GTM)

The following events are implemented for Google Tag Manager.

- consultation_form_submitted
- call_now_click
- whatsapp_click
- patient_guide_download
- clinic_location_view
- consultation_step_1
- consultation_step_2
- consultation_step_3
- blog_read

All important user interactions are pushed into the **dataLayer** for analytics.

Example:

```javascript
window.dataLayer.push({
  event: "consultation_form_submitted",
  patient_name: document.getElementById("name").value,
  patient_phone: document.getElementById("phone").value
});
```

---

# 📈 Funnel Tracking

Booking Journey

Landing Page

↓

Consultation Step 1

↓

Consultation Step 2

↓

Consultation Step 3

↓

Consultation Submitted

This enables funnel analysis in **GA4 Funnel Exploration** to identify user drop-offs.

---

# 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Google Tag Manager
- Google Analytics 4

---

# 📂 Project Structure

```
OrthoNow/
│
├── index.html
├── style.css
├── script.js
├── patient-guide.pdf
├── README.md
├── pagespeed.png
└── images/
```

---

# 📱 Responsive Design

The landing page is fully responsive and works across:

- Desktop
- Tablet
- Mobile Devices

---

# 📞 Lead Generation Features

- Consultation Booking Form
- Call Now CTA
- WhatsApp CTA
- Patient Guide Download

---

# 📊 Google Ads Conversion

Primary Conversion Event

```
consultation_form_submitted
```

This event represents a successful consultation request and is used as the primary conversion for campaign optimization.

---

# 🎥 Loom Demonstration

The demo includes:

- GTM Event Schema
- Landing Page Walkthrough
- Live dataLayer Event Demo
- Integration Architecture Explanation

---

# 👩‍💻 Developed By

**Mansi Dubey**

B.Tech CSE (Artificial Intelligence & Machine Learning)

---

## Thank You
```
Thank you for reviewing this assignment.
```