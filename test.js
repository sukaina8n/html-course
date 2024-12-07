// Sample data
const sampleFlashcards = [
    {
        word: "Hallo",
        translation: "Hello",
        pronunciation: "/ˈhalo/",
        example: "Hallo, wie geht es dir? (Hello, how are you?)"
    },
    {
        word: "Danke",
        translation: "Thank you",
        pronunciation: "/ˈdaŋkə/",
        example: "Vielen Dank für deine Hilfe. (Thank you very much for your help.)"
    }
];

const courseUnits = [
    "Introduction to German",
    "Greetings and Introductions",
    "Asking and Answering Questions",
    "Numbers and Counting",
    "Telling the Time and Dates",
    "Common Phrases for Daily Life",
    "Family and Relationships",
    "Polite Expressions and Manners"
];

function showPage(pageName) {
    const pageContent = document.getElementById("page-content");

    switch (pageName) {
        case "home":
            pageContent.innerHTML = renderHomePage();
            break;
        case "profile":
            pageContent.innerHTML = renderProfilePage();
            break;
        case "help":
            pageContent.innerHTML = renderHelpPage();
            break;
        case "course":
            pageContent.innerHTML = renderCourseOutlinePage();
            break;
        default:
            pageContent.innerHTML = "";
    }

    // Add event listeners for flashcards after rendering
    addFlashcardListeners();
}

function renderHomePage() {
    return `
    <section class="welcome-section">
      <h1>Welcome to VoX</h1>
      <p>Your Interactive German Learning Journey</p>
      <div class="today-goal">
        <h2>Today's Learning Goal</h2>
        <p>Learn 3 new German words and practice basic greetings</p>
      </div>
    </section>

    <section class="flashcards-section">
      <h2>Practice Flashcards</h2>
      <div class="flashcards-container">
        ${sampleFlashcards.slice(0, 2).map(renderFlashcard).join("")}
      </div>
    </section>
  `;
}

function renderProfilePage() {
    return `
    <section class="profile-section">
      <h2>User Profile</h2>
      <div class="profile-info">
        <div>
          <strong>Username:</strong> GermanLearner2024
        </div>
        <div>
          <strong>Progress:</strong> 35% Complete
        </div>
        <div>
          <strong>Current Level:</strong> Beginner
        </div>
      </div>
    </section>
  `;
}

function renderHelpPage() {
    return `
    <section class="help-section">
      <h2>How to Use VoX</h2>
      <div class="instructions-box">
        <ol>
          <li>Select a course unit from the course outline</li>
          <li>Study flashcards to learn vocabulary</li>
          <li>Practice with interactive exercises</li>
          <li>Track your progress in the profile section</li>
        </ol>
      </div>
    </section>
  `;
}

function renderCourseOutlinePage() {
    return `
    <section class="course-section">
      <h2>Course Outline</h2>
      <div class="course-grid">
        ${courseUnits.map((unit, index) => `
          <div class="course-unit">
            <span>Unit ${index + 1}.</span> ${unit}
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderFlashcard(card) {
    return `
    <div class="flashcard">
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <h3>${card.word}</h3>
          <p>${card.pronunciation}</p>
        </div>
        <div class="flashcard-back">
          <h3>${card.translation}</h3>
          <p>${card.example}</p>
        </div>
      </div>
    </div>
  `;
}

function addFlashcardListeners() {
    const flashcards = document.querySelectorAll(".flashcard");
    flashcards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });
}

// Initial page load
document.addEventListener("DOMContentLoaded", () => {
    showPage("home");
});