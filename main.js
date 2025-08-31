function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}

const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatLog = document.getElementById("chat-log");

// Predefined offline responses
const botResponses = {
  hello: "Hey there! 👋 I'm Arghyadeep's AI assistant. How can I help you?",
  hi: "Hi! 😊 Ask me about my skills, projects, or resume!",
  skills :
    "I'm skilled in MERN stack, React, Node.js, MongoDB, Firebase, Tailwind CSS, and AI integrations.",
  projects:
    "Some of my projects are Mentor-Mentee Management System, Active Hub, Weather App, and Bhakti Yatra.",
  experiences:
    " I have experience as a Full Stack Development Intern at Zidio Development, where I worked on developing and optimizing web applications, and as a Web Development Intern at OviEdu, where I contributed to building a Mentor-Mentee Scheduling System using Firestore. Additionally, I served as a Campus Ambassador at GirlScript Summer of Code, where I promoted open-source contributions and community engagement.",
  resume:
    "You can download my resume using the 'Download Resume' button above. 📄",
  contact: "You can reach me at 📧 arghyahari2001@gmail.com or via LinkedIn.",
  default:
    "🤔 Hmm, I don't have an answer for that yet. Try asking about my skills, projects, resume, or contact info!",
};

// Append messages dynamically to the chat
function appendMessage(sender, message) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="avatar ${sender}">${sender === "bot" ? "AI" : "You"}</span>
    <div class="message">${message}</div>
  `;
  chatLog.appendChild(li);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Send message handler
function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  // Show user's message instantly
  appendMessage("user", message);
  userInput.value = "";

  // Prepare bot reply
  const lowerMsg = message.toLowerCase();
  let reply = botResponses.default;

  Object.keys(botResponses).forEach((key) => {
    if (lowerMsg.includes(key)) {
      reply = botResponses[key];
    }
  });

  // Simulate typing delay
  setTimeout(() => {
    appendMessage("bot", reply);
  }, 600);
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
