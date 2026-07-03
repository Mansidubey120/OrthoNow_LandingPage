# Task 1 - GTM Event Schema

## OrthoNow - GTM Event Tracking Plan

This document defines the Google Tag Manager (GTM) event tracking strategy for the OrthoNow healthcare website. The purpose of this tracking plan is to monitor important user interactions, measure patient engagement, analyze the booking funnel, and improve marketing performance using Google Analytics 4 (GA4) and Google Ads.


## GTM Event Schema

| Event Name | Trigger Type | Key Parameters (Minimum 3) | GA4 Report / Audience |
|------------|--------------|----------------------------|-----------------------|
| call_button_clicked | Click Trigger | button_location, page_name, phone_number | Engagement Report |
| whatsapp_clicked | Click Trigger | page_name, button_position, clinic_location | Engagement Report |
| consultation_form_started | Form Interaction | page_name, form_name, timestamp | Funnel Exploration |
| booking_step_complete | Custom Event (dataLayer Push) | step_number, step_name, clinic_location | Funnel Exploration |
| consultation_form_submitted | Form Submit | patient_name, phone_number, clinic_location | Conversions Report |
| patient_guide_downloaded | Download Click | patient_name, phone_number, guide_name | Events Report |
| clinic_page_view | Page View | clinic_location, city, page_url | Pages & Screens Report |
| blog_article_scroll | Scroll Trigger (75%) | blog_title, scroll_percentage, page_url | Engagement Report |

## Booking Funnel Tracking

The OrthoNow consultation booking form consists of three steps. Each step will send a custom dataLayer event to Google Tag Manager (GTM). These events will be captured by GTM and forwarded to Google Analytics 4 (GA4). This allows the marketing team to measure user progress through the booking process and identify where users abandon the form.

Using GA4 Funnel Exploration, we can analyze the number of users who complete each step and calculate the drop-off rate between steps.

### Step 1 – Select Clinic Location & Specialty

**User Action:**
- Select preferred clinic
- Select orthopaedic specialty

**GTM Trigger:**
Custom Event Trigger

**Event Fired:**
booking_step_complete

**Purpose:**
Tracks users who begin the consultation booking process.

### Step 2 – Enter Patient Details

**User Action:**
- Enter patient name
- Enter phone number
- Select preferred consultation date

**GTM Trigger:**
Custom Event Trigger

**Event Fired:**
booking_step_complete

**Purpose:**
Tracks users who complete their personal information before confirming the booking.

### Step 3 – Confirm Booking

**User Action:**
- Click "Book Consultation"

GTM Trigger:
Custom Event Trigger (Triggered after successful form submission)

**Event Fired:**
booking_step_complete

**Purpose:**
Tracks successful consultation bookings and acts as the final conversion step.

## dataLayer Push for Booking Form

The OrthoNow booking form is a multi-step form. Google Tag Manager (GTM) cannot automatically detect which booking step a user has completed. Therefore, the front-end developer will push a custom event into the dataLayer whenever a user successfully completes each booking step.

GTM listens for these custom events and forwards them to Google Analytics 4 (GA4). These events are then used to build a Funnel Exploration report and measure drop-off between booking steps.

The following dataLayer.push() examples demonstrate the events that the front-end application will send to Google Tag Manager after each successful booking step. GTM captures these events and forwards them to Google Analytics 4 (GA4) for funnel analysis.

### Step 1 – Clinic Location & Specialty Selected

```javascript
window.dataLayer.push({
  event: "booking_step_complete",
  step_number: 1,
  step_name: "location_specialty_selected",
  clinic_location: "{{clinic_location}}",
  specialty: "{{specialty}}"
});
```

### Step 2 – Patient Details Entered

```javascript
window.dataLayer.push({
  event: "booking_step_complete",
  step_number: 2,
  step_name: "patient_details_entered",
  patient_name: "{{patient_name}}",
  phone_number: "{{phone_number}}",
  preferred_date: "{{preferred_date}}"
});
```
### Step 3 – Booking Confirmed

```javascript
window.dataLayer.push({
  event: "booking_step_complete",
  step_number: 3,
  step_name: "booking_confirmed",
  booking_status: "Confirmed",
  clinic_location: "{{clinic_location}}"
});
```
## Google Ads Conversion Selection

### Selected Conversion Event

**Event Name:**
consultation_form_submitted

### Justification

The `consultation_form_submitted` event has been selected as the primary Google Ads conversion because it represents a completed consultation request from a potential patient.

Unlike button clicks or page views, a successfully submitted consultation form indicates strong user intent and is the most valuable action on the website.

Tracking this event as a conversion enables the marketing team to:
- Measure the number of qualified consultation leads.
- Optimize Google Ads campaigns for high-quality conversions.
- Calculate conversion rate and cost per lead (CPL).
- Improve return on advertising spend (ROAS).
- Analyze campaign performance and make data-driven marketing decisions.

## Conclusion

This GTM event tracking plan provides a structured approach to measuring important user interactions on the OrthoNow website. By implementing custom events through the dataLayer, integrating them with Google Tag Manager, and analyzing them in Google Analytics 4, the marketing team can monitor the booking funnel, identify user drop-offs, measure conversions, and optimize advertising campaigns effectively.

This tracking plan ensures accurate event collection, reliable conversion measurement, and actionable insights for business and marketing teams.