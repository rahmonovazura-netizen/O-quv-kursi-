document.addEventListener("DOMContentLoaded", () => {
  // --- NAVIGATSIYA VA HAMBURGER MENYU ---
  const menuBtn = document.getElementById("menuBtn");
  const navbar = document.getElementById("navbar");

  if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navbar.classList.toggle("active");
    });

    document.querySelectorAll(".navbar a").forEach((link) => {
      link.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navbar.classList.remove("active");
      });
    });
  }

  // --- AI CHAT WIDGET ---
  const aiToggleBtn = document.getElementById("ai-toggle-btn");
  const aiChatBox = document.getElementById("ai-chat-box");
  const closeChatBtn = document.getElementById("close-chat-btn");
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatMessages = document.getElementById("chat-messages");

  function toggleChat() {
    if (aiChatBox) aiChatBox.classList.toggle("chat-hidden");
  }

  if (aiToggleBtn) aiToggleBtn.addEventListener("click", toggleChat);
  if (closeChatBtn) closeChatBtn.addEventListener("click", toggleChat);

  function appendMessage(text, className) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${className}`;
    msgDiv.innerText = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function sendMessage() {
    const messageText = userInput.value.trim();
    if (!messageText) return;

    appendMessage(messageText, "user-message");
    userInput.value = "";

    const lowerText = messageText.toLowerCase();

    setTimeout(() => {
      if (
        lowerText.includes("salom") ||
        lowerText.includes("privet") ||
        lowerText.includes("assalom")
      ) {
        appendMessage(
          `Assalomu alaykum! Saytimizga xush kelibsiz.\nSizga qaysi bo'lim bo'yicha yordam kerak?\n\n1. Bosh sahifa\n2. Kurslar\n3. O'qituvchilar\n4. Qabul\n5. Bog'lanish`,
          "bot-message",
        );
      } else if (lowerText.includes("1") || lowerText.includes("bosh sahifa")) {
        appendMessage(
          "Bosh sahifada bizning o'quv markazimiz haqida umumiy ma'lumotlar joylashgan.",
          "bot-message",
        );
      } else if (lowerText.includes("2") || lowerText.includes("kurs")) {
        appendMessage(
          "Bizda Frontend, Backend va Flutter kurslari mavjud. Batafsil 'Kurslar' bo'limida ko'rishingiz mumkin.",
          "bot-message",
        );
      } else if (
        lowerText.includes("5") ||
        lowerText.includes("aloqa") ||
        lowerText.includes("bog'lanish")
      ) {
        appendMessage(
          "Biz bilan bog'lanish uchun Telegram: @Muzaffar20112011 manziliga yozishingiz mumkin.",
          "bot-message",
        );
      } else {
        appendMessage(
          "Tushundim! Menyu bo'limlaridan birini tanlang yoki aniqroq savol bering.",
          "bot-message",
        );
      }
    }, 500);
  }

  if (sendBtn) sendBtn.addEventListener("click", sendMessage);
  if (userInput) {
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendMessage();
    });
  }
});
