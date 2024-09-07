# Password Generator

A password generator application built using React that allows users to create strong, random passwords based on customizable options such as length, uppercase, lowercase, numbers, and symbols.

## Features

- **Password Length:** Users can set the desired length of the password.
- **Customizable Options:** Include or exclude uppercase letters, lowercase letters, numbers, and symbols.
- **Password Generation:** Generates a random password based on the selected options.
- **Copy to Clipboard:** Users can copy the generated password to the clipboard.

## Preview

![Screenshot (137)](https://github.com/user-attachments/assets/a58c4174-5359-4fe1-8f3b-763df0543634)

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/password-generator.git
   
2. Navigate to the project directory:
   ```bash
   cd Password-Generator
   
3. Install the dependencies:
   ```bash
   npm install

4. Running the App:
   To start the development server, run:
   ```bash
   npm start

## Usage

1. Set the password length by adjusting the number in the input field.
2. Toggle the checkboxes to include or exclude uppercase letters, lowercase letters, numbers, and symbols.
3. Click "Generate Password" to generate a new random password.
4. The generated password will be displayed in the text box.
5. Click "Copy" to copy the password to the clipboard.

## Code Overview

- State Management: The app uses React's useState hook to manage password length, character options, and the generated password.
- Password Generation Logic: The app creates the password by randomly selecting characters from the chosen character sets.
- Clipboard Functionality: Uses the navigator.clipboard.writeText() method to copy the password to the clipboard.
