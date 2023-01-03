document.getElementById("summarization-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var text = document.getElementById("text-input").value;
  
    // Send an AJAX request to the server with the text
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/summarize");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Display the summary in the chatbot response
        document.getElementById("chatbot-response").innerHTML = xhr.responseText;
      }
    };
    xhr.send("text=" + encodeURIComponent(text));
  });
  