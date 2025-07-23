// analytics.js
// This file contains the Google Analytics setup and helper functions.
// All GA-related code is consolidated here for easy management.

// GA_MEASUREMENT_ID: Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID.
// This ID is crucial for sending data to your GA property.
const GA_MEASUREMENT_ID = 'G-WCH9V9SND7'; // IMPORTANT: Replace with your GA4 Measurement ID
// G-WCH9V9SND7 is the example ID 

// Google Analytics Tag (gtag.js) setup.
// This script loads the gtag.js library and initializes it with your Measurement ID.
// It's a standard snippet provided by Google for web analytics.
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',GA_MEASUREMENT_ID);

// Initialize dataLayer and define the gtag function.
// The dataLayer is an array that temporarily stores information to be passed to GA.
// gtag is the function used to send data to Google Analytics.
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// GA: Configure gtag.js.
// This command sends initial page view data and sets up the GA property.
// It's typically the first GA command executed on a page.
gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID);

// Helper function to send custom events to Google Analytics.
// This function simplifies sending custom events by encapsulating the gtag('event') call.
// eventName: A string representing the name of the event (e.g., 'button_click', 'form_submission').
// eventParams: An object containing additional parameters for the event (e.g., { category: 'engagement', label: 'CTA' }).
function sendCustomEvent(eventName, eventParams = {}) {
    gtag('event', eventName, eventParams);
    console.log(`GA Event Sent: ${eventName}`, eventParams); // Log to console for debugging
}

