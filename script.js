// typed js

const typed = new Typed ('.change-content',{
    strings: ['Empathy','Iterative Process','Divergent and Convergent thinking'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


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




// your challange starts 

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from actually submitting

      // Get form field values
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const challenge = document.querySelector("#challenge").value;
    const consent = document.querySelector("#consent").checked;

      // Validate consent
    if (!consent) {
        alert("You must consent to share your challenge.");
        return;
    }

      // Display submitted data
    const message =
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Challenge: ${challenge}`;

    alert("Submitted data:\n\n" + message);

      // Reset the form
    form.reset();
    });
});



// your challange ends 


const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const challenge = req.body.challenge;
  const consent = req.body.consent;

  if (!consent) {
    res.status(400).send("You must consent to share your challenge.");
    return;
  }

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "YourEmailService", // e.g., "Gmail", "Outlook"
    auth: {
      user: "your@email.com",
      pass: "your-password"
    }
  });

  const mailOptions = {
    from: "your@email.com",
    to: "oumashelly004@gmail.com",
    subject: "New Challenge Submission",
    text: `Name: ${name}\nEmail: ${email}\nChallenge: ${challenge}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).send("Error sending email.");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Form data submitted and email sent!");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

