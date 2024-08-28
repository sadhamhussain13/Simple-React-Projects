# QR Code Generator

This React application allows users to generate and download QR codes based on user input data and size. The app leverages the [QR Code Generator API](https://goqr.me/api/) to create QR codes dynamically.

## Features

- Generates a QR code based on the provided data (e.g., a URL).
- Allows users to specify the size of the QR code.
- Provides an option to download the generated QR code as an image file.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/qr-code-generator.git

2. Navigate to the project directory:
   ```bash
   cd QR Code Generator
   
3. Install the dependencies:
   ```bash
   npm install

4. Running the App:
   To start the development server, run:
   ```bash
   npm start

## Usage
- Enter the data (e.g., a URL) in the input field to generate the QR code.
- Specify the desired size for the QR code.
- Click "Generate QR Code" to create the QR code.
- The QR code will be displayed on the screen.
- Click "Download QR Code" to save the QR code as a .png file.

## Code Overview
* QrCode.js: The main component handles the QR code generation and download functionality.
* QrCode.css: Contains the styling for the QrCode component.

## API
This project uses the QR Code Generator API to generate QR codes.
