
## Question 1

How would you architect this integration end-to-end? What connects to what, in what order, and what technology sits at each step? Be specific - name the actual tools/methods (HubSpot Forms API vs. native embed vs. Zapier vs. Make vs. direct API call - pick one and justify it).

## Answer 1

I would use a direct API integration between the landing page, backend, HubSpot CRM, Karix WhatsApp Business API, Google Tag Manager (GTM), and Google Ads. I prefer this approach over Zapier or Make because it provides better performance, lower latency, greater control over error handling, and is more suitable for a production healthcare application.

When a patient submits the consultation form, the frontend first fires the GTM event consultation_form_submitted, which is sent to Google Analytics 4 (GA4). The same event is configured as a conversion and imported into Google Ads so campaigns can optimize for successful consultation requests.

At the same time, the form data (Name, Phone, and Clinic Preference) is securely sent to a backend API. The backend validates the input and then checks HubSpot CRM for an existing contact using the phone number. Since HubSpot's default deduplication works on email rather than phone, I would implement a custom phone-number lookup. If a contact with the same phone number already exists, the record is updated; otherwise, a new contact is created.

The backend then stores the following details in HubSpot:

Name
Phone
Clinic Preference
Source = Google Ads – Consultation Landing Page
Lead Status = New Enquiry

After HubSpot successfully creates or updates the contact, the backend immediately calls the Karix WhatsApp Business API to send a confirmation message to the patient. This sequence ensures that CRM data is successfully recorded before patient communication is triggered.

This architecture provides reliable data capture, prevents duplicate contacts, supports accurate Google Ads conversion tracking, and ensures patients receive a timely confirmation message while keeping all systems synchronized.

## Question 2

What is the single biggest failure point in this setup, and how would you build a fallback for it?

## Answer 2

The biggest failure point in this integration is duplicate contact creation in HubSpot. By default, HubSpot identifies duplicate contacts using email addresses, but the consultation form only collects the patient's name and phone number. If the same patient submits the form multiple times or enters a different name with the same phone number, HubSpot may create duplicate records instead of updating the existing contact.

To prevent this, I would implement a phone-number lookup in the backend before creating a contact. When a form is submitted, the backend first searches HubSpot for an existing contact with the same phone number using the HubSpot CRM API. If a matching contact is found, the existing record is updated with the latest information. If no match exists, a new contact is created. This ensures that each patient has a single, accurate record in the CRM.

As a fallback, if the HubSpot API is temporarily unavailable due to network issues or downtime, the form submission should be stored in a temporary database or message queue. The system can then automatically retry sending the data to HubSpot until the contact is successfully created or updated. All failures should be logged, and alerts should notify the development team if retries continue to fail, ensuring that no patient enquiry is lost.

## Question 3

The WhatsApp message must fire within 2 minutes. What could break this SLA and how would you monitor it?

## Answer 3

To ensure the WhatsApp confirmation message is delivered within 2 minutes, the message should be triggered immediately after the contact is successfully created or updated in HubSpot. The backend will send the request to the Karix WhatsApp Business API, which is responsible for delivering the confirmation message to the patient.

Several factors could break this Service Level Agreement (SLA), including HubSpot API delays, Karix API downtime, network connectivity issues, backend server failures, high traffic causing request queues, or invalid phone numbers entered by users. Any of these issues could delay or prevent the WhatsApp message from being sent on time.

To monitor the SLA, I would log the timestamp when the form is submitted and compare it with the timestamp when the WhatsApp API confirms that the message has been sent. The backend should maintain detailed logs of every API request and response. If message delivery exceeds two minutes or an API request fails, the system should automatically retry the request using exponential backoff. In addition, monitoring tools and alerts should notify the development team of repeated failures or unusual delays so that issues can be investigated and resolved quickly. This approach helps ensure reliable message delivery while meeting the required 2-minute SLA.

