import { MdDelete } from "react-icons/md";

const Selected = ({ players, onRemovePlayer }) => {
    return (
      <div>
        <h3 className='font-bold text-2xl mb-4'>Selected Players</h3>
        {players.length === 0 ? (
          <p>No players selected yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {players.map(player => (
              <div key={player.player_id} className="border border-gray-300 rounded-xl p-4 flex items-center gap-4">
                <img className="w-16 h-16 rounded-lg" src={player.image} alt={`${player.name}'s image`} />
                <div className="flex-1">
                  <h4 className="font-bold">{player.name}</h4>
                </div>
                <button 
                  className="bg-red-500 text-white px-3 py-1 rounded-lg"
                  onClick={() => onRemovePlayer(player.player_id)}
                >
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Selected;
  