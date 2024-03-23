import React from 'react';
import './App.css'
import { useState } from 'react';
import Bracket from './components/Bracket';
import BracketRight from './components/BracketRight';
import Header from './components/Header';
import Footer from './components/Footer'
import OverallChampionSelector from './components/OverallChampionSelector';
import html2canvas from 'html2canvas';

const App = () => {
  const initialTeams1 = [
    { id: 1, name: 'Connecticut', seed: 1 },
    { id: 2, name: 'Stetson', seed: 16 },
    { id: 3, name: 'FAU', seed: 8 },
    { id: 4, name: 'Northwestern', seed: 9 },
    { id: 5, name: 'San Diego State', seed: 5 },
    { id: 6, name: 'UAB', seed: 12 },
    { id: 7, name: 'Auburn', seed: 4 },
    { id: 8, name: 'Yale', seed: 13 },
    { id: 9, name: 'BYU', seed: 6 },
    { id: 10, name: 'Duquesne', seed: 11 },
    { id: 11, name: 'Illinois', seed: 3 },
    { id: 12, name: 'Morehead State', seed: 14 },
    { id: 13, name: 'Washington State', seed: 7 },
    { id: 14, name: 'Drake', seed: 10 },
    { id: 15, name: 'Iowa State', seed: 2 },
    { id: 16, name: 'South Dakota State', seed: 15 },
  ];
  
  const initialTeams2 = [
    { id: 17, name: 'Houston', seed: 1 },
    { id: 18, name: 'Longwood', seed: 16 },
    { id: 19, name: 'Nebraska', seed: 8 },
    { id: 20, name: 'Texas A&M', seed: 9 },
    { id: 21, name: 'Wisconsin', seed: 5 },
    { id: 22, name: 'James Madison', seed: 12 },
    { id: 23, name: 'Duke', seed: 4 },
    { id: 24, name: 'Vermont', seed: 13 },
    { id: 25, name: 'Texas Tech', seed: 6 },
    { id: 26, name: 'NC State', seed: 11 },
    { id: 27, name: 'Kentucky', seed: 3 },
    { id: 28, name: 'Oakland', seed: 14 },
    { id: 29, name: 'Florida', seed: 7 },
    { id: 30, name: 'Colorado', seed: 10 },
    { id: 31, name: 'Marquette', seed: 2 },
    { id: 32, name: 'Western Kentucky', seed: 15 },
  ];
  
  const initialTeams3 = [
    { id: 33, name: 'North Carolina', seed: 1 },
    { id: 34, name: 'Wagner', seed: 16 },
    { id: 35, name: 'Mississippi State', seed: 8 },
    { id: 36, name: 'Michigan State', seed: 9 },
    { id: 37, name: 'Saint Mary\'s', seed: 5 },
    { id: 38, name: 'Grand Canyon', seed: 12 },
    { id: 39, name: 'Alabama', seed: 4 },
    { id: 40, name: 'Charleston', seed: 13 },
    { id: 41, name: 'Clemson', seed: 6 },
    { id: 42, name: 'New Mexico', seed: 11 },
    { id: 43, name: 'Baylor', seed: 3 },
    { id: 44, name: 'Colgate', seed: 14 },
    { id: 45, name: 'Dayton', seed: 7 },
    { id: 46, name: 'Nevada', seed: 10 },
    { id: 47, name: 'Arizona', seed: 2 },
    { id: 48, name: 'Long Beach State', seed: 15 },
  ];
  
  const initialTeams4 = [
    { id: 49, name: 'Purdue', seed: 1 },
    { id: 50, name: 'Grambling State', seed: 16 },
    { id: 51, name: 'Utah State', seed: 8 },
    { id: 52, name: 'TCU', seed: 9 },
    { id: 53, name: 'Gonzaga', seed: 5 },
    { id: 54, name: 'McNeese', seed: 12 },
    { id: 55, name: 'Kansas', seed: 4 },
    { id: 56, name: 'Samford', seed: 13 },
    { id: 57, name: 'South Carolina', seed: 6 },
    { id: 58, name: 'Oregon', seed: 11 },
    { id: 59, name: 'Creighton', seed: 3 },
    { id: 60, name: 'Akron', seed: 14 },
    { id: 61, name: 'Texas', seed: 7 },
    { id: 62, name: 'Colorado State', seed: 10 },
    { id: 63, name: 'Tennessee', seed: 2 },
    { id: 64, name: 'Saint Peter\'s', seed: 15 }
  ];

  const [regionalChampions, setRegionalChampions] = useState({
    EAST: null,
    SOUTH: null,
    WEST: null,
    NORTH: null
  });

  const handleChampionSelection = (region, champion) => {
    setRegionalChampions(prev => ({ ...prev, [region]: champion }));
  };
  
  const displayAndDownloadScreenshot = () => {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      // Convert the canvas to a data URL
      const imageUrl = canvas.toDataURL("image/png", 1.0);
      
      // Display the image
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      document.body.appendChild(imageElement); // Append the image to the body or a specific element
  
      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.download = 'screenshot.png';
      downloadLink.href = imageUrl;
      downloadLink.textContent = 'Download Screenshot';
      document.body.appendChild(downloadLink); // Append the link to the body or a specific element
    }).catch(error => {
      console.error("Error capturing screenshot:", error);
    });
  };
  
  
  
  
  return (
    <div>
    <div id="capture">
      <Header/>
    <div className="bracket-layout">
      <div className="bracket-container">
        <Bracket initialTeams={initialTeams1} region={'EAST'} onChampionSelected={handleChampionSelection} />
        <BracketRight initialTeams={initialTeams2} region={'SOUTH'} onChampionSelected={handleChampionSelection}/>
        <Bracket initialTeams={initialTeams3} region={'WEST'} onChampionSelected={handleChampionSelection} />
        <BracketRight initialTeams={initialTeams4} region={'NORTH'} onChampionSelected={handleChampionSelection} />
      </div>
      <OverallChampionSelector champions={regionalChampions} />
    </div>
    </div>
    <div className="button-container">
      <button onClick={displayAndDownloadScreenshot}>Download as Screenshot</button>
    </div>
    <Footer/>
  </div>
  );
};


export default App;
