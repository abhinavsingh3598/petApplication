import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Analytics from "./components/Analytics";

// declaring the dummy data which will be used and displayed on the screen
const DUMMY_DATA = [
  {
    id: "p1",
    petName: "Ron",
    ownerName: "Andrea",
    ailmentName: "Anthrax",
    registrationDate: new Date(2020, 7, 14),
  },
  {
    id: "p2",
    petName: "Rosie",
    ownerName: "Allan",
    ailmentName: "Akabane",
    registrationDate: new Date(2020, 2, 12),
  },
  {
    id: "p3",
    petName: "Rocky",
    ownerName: "Wanda",
    ailmentName: "Botulism",
    registrationDate: new Date(2020, 2, 28),
  },
  {
    id: "p4",
    petName: "Jackie",
    ownerName: "Helen",
    ailmentName: "Hydatid",
    registrationDate: new Date(2021, 5, 12),
  },

  {
    id: "p5",
    petName: "Jerry",
    ownerName: "Chris",
    ailmentName: "Hydatid",
    registrationDate: new Date(2021, 5, 12),
  },

  {
    id: "p6",
    petName: "Ian",
    ownerName: "Robert",
    ailmentName: "Hydatid",
    registrationDate: new Date(2022, 5, 12),
  },

  {
    id: "p7",
    petName: "Vodka",
    ownerName: "Honey",
    ailmentName: "Akabane",
    registrationDate: new Date(2020, 5, 12),
  },

  {
    id: "p8",
    petName: "Chichi",
    ownerName: "James",
    ailmentName: "Botulism",
    registrationDate: new Date(2021, 2, 28),
  },
  {
    id: "p9",
    petName: "Tom",
    ownerName: "ginger",
    ailmentName: "Botulism",
    registrationDate: new Date(2022, 2, 28),
  },
];

const App = () => {

  // declaring state and giving the inital value
  const [petInfo, setPetInfo] = useState(DUMMY_DATA);

// Right now I am not inserting a new data but hardcoring in the app.js file 
// that is why setPetInfo is not used anywhere because we are working on inital value of state

  return (
    <div className="App">
      {/* Here I am passing petInformation as item as array to Analytics which is a child class */}
      <Analytics item={petInfo}></Analytics>
    </div>  
  );
};

export default App;
