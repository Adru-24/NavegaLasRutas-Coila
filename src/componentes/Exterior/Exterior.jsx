import React from 'react'

const Exterior = () => {
    const tasks =['solo hojas', 'con flores', 'altas'];

  return (
    <div>
        <h1>Tipo de Plantas de exterior</h1>
        <ul>
            {TextTrackList.map((task, index)=> (
                <li key={index}>{task}</li>
            ))}
        </ul>
    </div>
  );
};

export default Exterior;