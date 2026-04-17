# Technical Documentation

## 1. Project Overview
This project is a responsive personal portfolio website built using semantic HTML5, CSS3 for styling, and vanilla JavaScript for interactivity. It serves as a foundation for a professional portfolio, showcasing academic projects and providing a contact method.

## 2. File Structure
- **index.html:** The main entry point containing the semantic structure (Header, Nav, Sections, Footer).
- **css/styles.css:** Contains all styling rules, variables, and media queries for responsiveness.
- **js/script.js:** Handles client-side logic and event listeners.
- **assets/images/:** Stores static image assets (profile pictures, project thumbnails).
- **docs/:** Contains project documentation and AI usage reports.

## 3. Technical Implementation

### HTML5
- Used semantic tags (`<nav>`, `<section>`, `<footer>`) to improve accessibility and SEO.
- The `id` attributes (`#about`, `#projects`, `#contact`) are used for internal anchor navigation.

### CSS3 & Responsive Design
- **Layout:** Utilized **CSS Grid** for the Projects section to create a clean, card-based layout.
- **Flexbox:** Used for the Navigation bar to align the logo and menu items horizontally.
- **Responsiveness:** Implemented a Mobile-First approach. A media query (`@media (min-width: 768px)`) is used to switch the project grid from 1 column (mobile) to 2 columns (desktop).

### JavaScript
- **Event Listeners:** attached a `submit` event listener to the contact form.
- **Interactivity:** Prevents the default form submission (page reload) and displays a custom alert message to provide immediate user feedback.


### JavaScript Logic & Interaction
* **Dynamic Content:** A greeting function utilizes the `Date()` object to determine the user's local hour and injects a time-sensitive greeting into the DOM.
* **Event Listeners:** Implemented `addEventListener` on the theme toggle button and the contact form to handle user interactions without reloading the page.
* **Form Validation:** Client-side validation checks for empty or invalid inputs and provides immediate feedback through the `#form-feedback` container.

## 4. Data Handling & Persistence
* **Web Storage API:** The application uses `localStorage` to save the user's theme preference (`light` or `dark`).
* **Persistence Logic:** On page load, the script checks for a saved theme key. If found, it applies the theme immediately to ensure the user's preference persists across browser sessions.

## 5. User Feedback & Error Handling
* **Visual Cues:** When the contact form is submitted, the standard alert is replaced by a green success message or a red error message to improve UX.
* **Fallback States:** If no theme is saved, the application defaults to the system's preferred color scheme.

## 6. Installation & Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/suleiman-MBS/202272600-mohammed-alzaid-assignment2.git](https://github.com/suleiman-MBS/202272600-mohammed-alzaid-assignment2.git)
2. Navigate to the project root.
3.  Open `index.html` in a browser. No build steps or server requirements are needed.

---
*Technical Documentation Version 2.0 - Developed by Mohammed Alzaid*
