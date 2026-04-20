# User Profile React App

### Student: Victoria Salomon

## Overview
This project demonstrates how to manage nested state in React using the useState hook, the spread operator, and functional updates. The application allows users to update nested address information inside a user profile object while maintaining immutability.

## Features
- Manage a nested userProfile state object
- Update nested address fields (street, city, country)
- Immutable updates using the spread operator
- Real-time UI updates
- Handles partial and empty inputs gracefully

## Technologies Used
- React
- JavaScript (ES6+)
- CSS

## How to Run the Project

1. Clone the repository:
git clone https://github.com/PaulinaS123/profile-app.git

2. Navigate into the project folder:
cd profile-app

3. Install dependencies:
npm install

4. Run the application:
npm start

5. Open in your browser:
http://localhost:3000

## Project Structure
src/
 ├── App.jsx
 ├── UserProfile.jsx
 ├── index.js
 └── App.css

## Key Concept: Nested State Update

The app updates nested state immutably using:

setUserProfile((prevProfile) => ({
  ...prevProfile,
  address: {
    ...prevProfile.address,
    street: newStreet,
    city: newCity,
    country: newCountry
  }
}));

## Test Cases

### Normal Cases
1. Update street only  
   Expected: Only the street updates, other fields remain unchanged

2. Update city and country  
   Expected: Both fields update correctly

3. Update all fields  
   Expected: Entire address updates

### Edge Cases
1. Empty input fields  
   Expected: Existing values remain unchanged

2. Partial updates  
   Expected: Only entered fields update

3. Long string input  
   Expected: App updates without errors

## Demonstration
A video demonstration shows:
- Application functionality
- Normal test cases
- Edge cases

## Notes
- Uses functional updates to ensure correct state handling
- Spread operator is applied at multiple levels for immutability
