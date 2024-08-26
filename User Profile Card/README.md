# User Card Component

This is a React project that displays a set of user cards. Each card shows information about a user, including their name, city, description, online status, profile picture, and skills. The project dynamically generates these cards based on user data.

## Features

- Displays user information such as name, city, description, and skills.
- Indicates whether a user is online or offline.
- Includes buttons for "Message" and "Follow" actions (though they are not functional in this demo).
- Dynamically generates user cards from an array of user data.

## Getting Started

### Preview

![Screenshot (133)](https://github.com/user-attachments/assets/0cb5445c-bfcf-4047-a2fe-3c80eb3ca67b)

### Prerequisites

- Node.js and npm should be installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-card-component.git

2. Navigate to the project directory:
   ```bash
   cd advice-generator
   
3. Install the dependencies:
   ```bash
   npm install

4. Running the App:
   To start the development server, run:
   ```bash
   npm start


## Usage
- The app will display user cards based on the userData array in the code.
- Each card will show the user's name, city, description, online status, profile picture, and a list of skills.
- Online users will have an "online" badge, while others will show "offline."


## Code Overview
- userData: An array containing the details of each user, including name, city, description, online status, profile picture, and skills.
- User Component: A functional component that accepts props and renders each user's details in a card format.
- UserCard Component: Maps over the userData array to generate a list of User components.


## Customization
- You can add or modify users in the userData array to change the displayed content.
- To add more functionality, such as making the "Message" or "Follow" buttons interactive, you can implement corresponding event handlers.
