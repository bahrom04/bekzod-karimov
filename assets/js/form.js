// Capture form submission
document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Extract form field values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    // Construct the message content
    var text = "Name: " + name + "\n" +
               "Email: " + email + "\n" +
               "Subject: " + subject + "\n" +
               "Message: " + message;
    
    // Send the message using the Telegram Bot API
    var apiUrl = "https://api.telegram.org/bot{6669191552:AAHknKSIT2kMeog39Qx7eS2RijzBhStvwDQ}/sendMessage"; // Replace {YOUR_API_TOKEN} with your actual API token
    var chatId = "{1107759940}"; // Replace {CHAT_ID} with the recipient's chat ID or username
    var requestData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text
      })
    };
    
    fetch(apiUrl, requestData)
      .then(function(response) {
        if (response.ok) {
          console.log("Message sent successfully!");
          // Perform any further actions, such as showing a success message or redirecting to a thank you page
        } else {
          console.error("Failed to send message.");
          // Handle the error or display an error message
        }
      })
      .catch(function(error) {
        console.error("An error occurred:", error);
        // Handle the error or display an error message
      });
  });
  