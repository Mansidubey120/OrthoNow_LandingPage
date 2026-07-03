# Task 1 - GTM Event Schema

## OrthoNow - GTM Event Tracking Plan

This document defines the Google Tag Manager (GTM) event tracking strategy for the OrthoNow healthcare website. The goal is to track all important user interactions, measure patient engagement, analyze the booking funnel, and improve marketing performance using Google Analytics 4 (GA4) and Google Ads.

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
| blog_scroll_depth | Scroll Trigger (75%) | blog_title, scroll_percentage, page_url | Engagement Report |