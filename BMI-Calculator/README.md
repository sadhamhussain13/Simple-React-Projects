# BMI Calculator

A simple Body Mass Index (BMI) calculator built using React. The application allows users to input their height and weight to calculate their BMI and determine their health status.

## Features

- **BMI Calculation:** Users can input their height (in cm) and weight (in kg) to calculate their BMI.
- **BMI Status:** The app provides a health status based on the calculated BMI value (Underweight, Normal, Overweight, Obese).
- **Validation:** Ensures that the inputs for height and weight are numeric values.
- **Clear Functionality:** Users can clear the inputs and reset the result.

## Preview

![Screenshot (134)](https://github.com/user-attachments/assets/57f8b261-fe65-4abf-a1f7-aa75e581f119)

## Installation

### Prerequisites

- Node.js and npm should be installed on your system.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bmi-calculator.git

2. **Navigate to the project directory:**
   ```bash
   cd BMI-Calculator
   
3. **Install the dependencies:**
   ```bash
   npm install

4. **Running the App:**
   To start the development server, run the following:
   ```bash
   npm start

## Usage
- Enter your height in centimeters.
- Enter your weight in kilograms.
- Click the "Calculate" button to compute your BMI.
- The application will display your BMI and the corresponding health status.
- To reset the form, click the "Clear" button.

## Code Overview
- BMI Calculation Logic: The BMI is calculated using the formula BMI = weight (kg) / (height (m) * height (m)).
- Validation: The app checks that the user inputs are valid numbers before calculating.
- Component Structure: The app is structured with React components for input handling, BMI calculation, and result display.

## Customization
- You can modify the calculation logic or health status ranges to suit different standards or requirements.
- Additional features can be implemented, such as unit conversion (e.g., cm to inches, kg to lbs).
