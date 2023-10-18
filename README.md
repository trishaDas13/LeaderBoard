# LeaderBoard
Hoisting Link: https://trishadas13.github.io/LeaderBoard/?authuser=0

<h2>🟡HTML code explanation: </h2>

1.	Leaderboard Title: The code starts with an h1 element displaying "LeaderBoard," indicating that it's a leaderboard interface.
2.	Form for Adding Participants: There is a form element that allows users to add participants to the leaderboard. Inside the form, there are several input elements for entering the first name, last name, country name, and obtained score of a participant. The "Add" button with the class "addCard" is used to submit this participant's information.
3.	Error Message: Following the form, there is a p element with the class "error" which serves as an error message. It displays "All fields are required" and is hidden by default. It becomes visible if the user attempts to submit the form with empty fields.
4.	Card Container: This <div> with the class "card-container" contains the individual participant cards. Each card is displayed as a separate <div> element with the class "card."
5.	Participant Cards: Each participant card contains two main sections:
•	Content Section: This section displays the participant's name, date (which is currently empty), country name, and their obtained score.
•	Buttons Section: In this section, there are three buttons for each participant card:
•	An "X" button, which allows the removal of the participant from the leaderboard.
•	A "+5" button, which increases the participant's score by 5.
•	A "-5" button, which decreases the participant's score by 5.
7.	Participant Information: The example code includes three sample participant cards with different names, but they all belong to India and have an initial score of 85.
<hr>
<h2>🟡CSS code explanation: </h2>
1.	Font Import: It imports the "Dosis" font from Google Fonts and applies it to the entire page.

2.	Universal Reset: The universal selector * is used to reset margin, padding, and set the box-sizing property to border-box for all HTML elements, ensuring consistent spacing and sizing.

3.	Body Styles: The body element takes up the full width and a minimum of the viewport height. It uses a background image with center positioning and cover background size. The content is centered using display: flex and some spacing.

4.	Heading Styles: The h1 element has a margin-top, and its color is set to a shade of brown.

5.	Form Styles: The form element is displayed as a flex container with some spacing between its children.

6.	Input Styles: The input fields are styled with padding, font size, color, and other properties. They have a bottom border that changes color on focus.

7.	Add Card Button: The "Add Card" button has a blue background color, border, border-radius, and some other styling. It also has a hover effect that brightens the color and slight upward movement when clicked.

8.	Card Container Styles: The .card class represents a card container. It's styled with specific width, padding, border-radius, margin, and background color. It also has a box shadow for a subtle shadow effect.

9.	Content Styles: The content within each card (.card .content) is displayed as a flex container with specific width and font size. A z-index is used to control the stacking order.

10.	Buttons Styles: The buttons inside the card have padding, border-radius, no border, an outline, and a cursor pointer. When focused, they have a background color.
11.	Error Styles: The error messages (.error) are initially set to display: none and styled with font weight and color.
12.	Date Styles: The .date class is used to style date elements with a specific font size.
<hr>
<h2>🟡JS code explanation: </h2>
1.	It selects several elements on the web page and stores them in variables:
•	form: Represents the form element for submitting information.
•	cardContain: Represents a container for displaying the cards.
•	date: Represents an element where the current date and time will be displayed.
•	error: Represents an element for displaying an error message.
•	It also selects and stores various button elements for performing actions on the cards.


2.	It defines a function activate that adds event listeners to the action buttons within each card. The buttons have various functionalities such as deletion and score adjustments.

3.	Inside the acivateButtons function, it determines which button was clicked and performs the corresponding action. If the "❌" button is clicked, it removes the card. If the "+5" button is clicked, it increases the score by 5 and adds a scaling animation. If the "-5" button is clicked, it decreases the score by 5 and adds a scaling animation.

4.	It defines a function sorting to sort the cards based on their scores in descending order.

5.	Inside the sorting function, it sorts the cards by comparing the score values and reappends them to the container in sorted order.

6.	It adds an event listener to the form for the "submit" event.

7.	Inside the form's submit event listener, it retrieves the values entered by the user in the form fields (first name, last name, country, and number).

8.	It checks for empty fields and displays an error message if any field is empty.


9.	It gets the current date and time and formats it as "Month Year: Hour:Minute:Second."

10.	It creates a new card element with the user-entered information, including the name, date, country, and number. It also includes the action buttons within the card.

11.	It appends the newly created card to the card container.

12.	It calls the activate and sorting functions to set up event listeners for the buttons and sort the cards.
<hr>
<h2>🟡Summary: </h2>
In summary, this code allows users to submit information, which is then displayed as cards on the web page. Users can interact with the cards using action buttons, and the cards are sorted based on their scores. Additionally, the current date and time are displayed on the page.
<hr>
<h2>🟡UI </h2>

![image](https://github.com/trishaDas13/LeaderBoard/assets/126088849/c578d09a-1f2e-42b6-906c-b0f85077924e)
