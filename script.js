// typed js

const typed = new Typed ('.change-content',{
    strings: ['Empathy','Iterative Process','Divergent and Convergent thinking'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
    event.preventDefault();
  
      // can add your logic here to process the form submission
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const challenge = form.elements.challenge.value;
    const consent = form.elements.consent.checked;

      // Example: You can send this data to a server using AJAX or fetch API
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Challenge:", challenge);
    console.log("Consent:", consent);

      // You can also display a success message or perform other actions
    alert("Form submitted successfully!");
    form.reset();
    });
});


// upcoming events 

document.addEventListener('DOMContentLoaded', function() {
    const eventDate = new Date('2023-09-15');
    const eventLocation = 'Event Hall';
  
    let registeredCount = 0; // Initialize the counter
  
    const updateRegisteredCount = () => {
        document.getElementById('registered-count').textContent = registeredCount;
    };
  
    updateRegisteredCount(); // Initial update
  
    document.getElementById('event-date').textContent = eventDate.toDateString();
    document.getElementById('event-location').textContent = eventLocation;
  
    document.getElementById('register-btn').addEventListener('click', function() {
        // Simulate registration (you can replace this with actual registration logic)
        registeredCount++;
        updateRegisteredCount();
  
        alert('You have been registered for the event!');
    });
  });
  


// upcoming events end

