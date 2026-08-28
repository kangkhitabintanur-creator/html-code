let currentSelectedBouquet = "";

// Function to open Modal with image and dynamic details
function openDetails(title, price, flowerCount, typesArray, imagePath) {
    currentSelectedBouquet = title;
    
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = "PRICE: " + price;
    document.getElementById('modalCount').innerText = "TOTAL FLOWERS: " + flowerCount;
    document.getElementById('modalImg').src = imagePath;

    const typesList = document.getElementById('modalTypes');
    typesList.innerHTML = '';
    
    typesArray.forEach(type => {
        const li = document.createElement('li');
        li.innerText = type;
        typesList.appendChild(li);
    });

    document.getElementById('detailsModal').style.display = 'flex';
}

// Function to close modal
function closeDetails() {
    document.getElementById('detailsModal').style.display = 'none';
}

// Auto select flower for booking form when clicked "Order Now" from modal
function selectForBooking() {
    closeDetails();
    const bookingInput = document.getElementById('selectedFlower');
    bookingInput.value = currentSelectedBouquet;
    
    // Smooth scroll to booking form
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// Form Submission Alert Handling
function handleOrderSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('custName').value;
    const flower = document.getElementById('selectedFlower').value || "Bouquet Choice";
    
    alert(`ধন্যবাদ ${name}! \nআপনার "${flower}" বুকিং রিকোয়েস্টটি Flower Garden (রংপুর শাখা)-এ নিবন্ধিত হয়েছে। আমরা শীঘ্রই যোগাযোগের মাধ্যমে কাস্টমাইজেশন নিশ্চিত করবো।`);
    
    document.getElementById('bookingForm').reset();
}

// Close Modal when clicking outside container
window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target === modal) {
        closeDetails();
    }
}