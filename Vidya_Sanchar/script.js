document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const book = document.getElementById('book').value;
    const description = document.getElementById('description').value;
    
    console.log(`Donor: ${name}, Email: ${email}, Book: ${book}, Description: ${description}`);
    
    alert('Thank you for your donation! We will pick up the books shortly from your address!');
    
    // Clear the form
    document.getElementById('donationForm').reset();
});
