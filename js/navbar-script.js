// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle the navbar scroll behavior
    function handleNavbarScrollBehavior() {
        // Select the navbar element
        var navbar = document.querySelector('.navbar');

        // Initialize variable to store the previous scroll position
        var prevScrollPos = window.scrollY;

        // Function to update navbar visibility based on scroll direction
        function updateNavbarVisibility() {
            // Get the current scroll position
            var currentScrollPos = window.scrollY;

            // Compare previous and current scroll positions to determine scroll direction
            if (prevScrollPos < currentScrollPos) {
                // Scrolling down: Hide the navbar by moving it above the viewport
                navbar.style.top = "-" + navbar.offsetHeight + "px";
            } else {
                // Scrolling up: Show the navbar by resetting its top position to 0
                navbar.style.top = "0";
            }

            // Update previous scroll position to current position for the next comparison
            prevScrollPos = currentScrollPos;
        }

        // Add event listener to handle scroll events and call updateNavbarVisibility() function
        window.addEventListener('scroll', updateNavbarVisibility);
    }

    // Call the function to initialize scroll behavior handling
    handleNavbarScrollBehavior();
});
