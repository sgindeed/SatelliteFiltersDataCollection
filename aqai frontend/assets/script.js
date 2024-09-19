// JavaScript for menu toggle
var navLinks = document.getElementById("navLinks");

// Function to show the navigation menu
function showMenu() {
    navLinks.style.right = "0";
}

// Function to hide the navigation menu
function hideMenu() {
    navLinks.style.right = "-200px";
}

// Initialize Google Map
function initMap() {
    // The location of the specified address
    var location = { lat: 22.5726, lng: 88.3639 }; // Coordinates for Kolkata, India (replace with your desired location)

    // Create a new map centered on the specified location
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, // Adjust the zoom level as needed
        center: location,
    });

    // Add a marker at the specified location
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Flat 2B Garcha 1st Lane, Kolkata, IN 700019", // Tooltip text for the marker
    });
}
