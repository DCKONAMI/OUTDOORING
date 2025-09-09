document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");
  const messageBox = document.getElementById("wishMessage");

  // Replace with your WhatsApp number (without +)
  const phoneNumber = "233245244087";

  sendBtn.addEventListener("click", () => {
    const message = messageBox.value.trim();
    if (message === "") {
      alert("Please write a message before sending!");
      return;
    }

    // Encode and open WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  });
});
