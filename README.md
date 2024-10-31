# Projects Overview

## Project 1: Users Data Dashboard 
This React application fetches user data from an API and displays it in a responsive card-based layout. The app includes search and sorting functionalities to enhance user experience and an interactive modal view for detailed information.

### Live Demo
- [Users Data Dashboard](https://verisyn-labs-oa-q1.vercel.app/)

### Features:
<ul>
  <li>
Retrieves a list of users from (https://jsonplaceholder.typicode.com/users).
  </li>
  <li>
 Responsive design for desktop and mobile users
  </li>
  <li>
 Allows users to filter by name or username.
  </li>
  <li>
Sorts user list by name or username.
  </li>
  <li>
On hovering over a user card, a "View Details" button appears.
  </li>
  <li>
 Clicking "View Details" opens a modal with additional user information, including address, phone number, and website.
  </li>
</ul>


### Tech Stack and Dependencies:

- **React**: Frontend library for building the UI.
- **Material-UI**: Provides a set of accessible, customizable, and responsive UI components.
- **Axios**: For making API requests.
- **Framer Motion**: Adds animations to the user cards and modal transitions.
- **dotenv**: Manages environment variables.

### Installation
To run this project locally, follow these steps:
1. Clone the repository:  
   `git clone https://github.com/gowthamv210/verisyn-labs-OA.git -b q1`  
   `cd verisyn-labs-OA`

2. Install dependencies:  
   `npm install`

3. Start the development server:  
   `npm start`

### Deployment
The frontend is deployed on Vercel, providing continuous integration and automatic deployments on every push to the main branch.

