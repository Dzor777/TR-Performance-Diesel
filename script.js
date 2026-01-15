document.addEventListener('DOMContentLoaded', () => {
    // Select the elements
    const callBtn = document.getElementById('call-btn');
    const emailBtn = document.getElementById('email-btn');

    // Add click event for Phone
    if (callBtn) {
        callBtn.addEventListener('click', () => {
            window.location.href = 'tel:3252051040';
        });
    }

    // Add click event for Email
    if (emailBtn) {
        emailBtn.addEventListener('click', () => {
            window.location.href = 'mailto:trperformancediesel@gmail.com';
        });
    }

    // Add click event for Visit
    const visitBtn = document.getElementById('visit-btn');
    if (visitBtn) {
        visitBtn.addEventListener('click', () => {
            // Opens in native map app on mobile, or Google Maps website on desktop
            const address = "750 US HWY 190, San Saba, TX 76877";
            const encodedAddress = encodeURIComponent(address);
            window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
        });
    }
});
