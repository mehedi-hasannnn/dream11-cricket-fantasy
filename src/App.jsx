import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import Selected from './components/Selected/Selected';
import { useState } from 'react';

function App() {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState([]); 
  const maxPlayers = 6;

  // Toggle view between Available and Selected
  const handleToggle = (view) => {
    setIsSelected(view === 'selected');
  };

  // Add a player to the selected list
  const handlePlayerSelect = (player) => {
    if (selectedPlayers.length < maxPlayers) {
      setSelectedPlayers((prev) => [...prev, player]);
    } else {
      alert("You can only select up to 6 players!");
    }
  };

  // Remove a player from the selected list
  const handleRemovePlayer = (playerId) => {
    setSelectedPlayers(prev => prev.filter(player => player.player_id !== playerId));
  };

  return (
    <>
      <Header />
      <div>
        <div className="flex justify-between mt-5 mb-4">
          <h3 className="font-bold text-2xl">Available Players</h3>
          <div className="flex gap-4 mr-3 border rounded-lg">
            <button 
              className="font-bold" 
              onClick={() => handleToggle('available')}
            >
              Available
            </button>
            <button 
              className="font-bold" 
              onClick={() => handleToggle('selected')}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>

        {/* Conditionally render either the Players or Selected component */}
        {isSelected 
          ? <Selected players={selectedPlayers} onRemovePlayer={handleRemovePlayer} /> 
          : <Players onPlayerSelect={handlePlayerSelect} selectedPlayers={selectedPlayers} />}
      </div>
      <Footer />
    </>
  );
}

export default App;
