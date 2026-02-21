
import React, { useState } from 'react';
import AcudesPeixes from './AcudesPeixes';
import CeramicaTijolos from './CeramicaTijolos';

function App() {
  const [painel, setPainel] = useState('acudes');
  return (
    <div>
      <h1>Painel de Contabilidade Mensal</h1>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li>
            <button onClick={() => setPainel('acudes')}>Açudes de Peixes</button>
          </li>
          <li>
            <button onClick={() => setPainel('ceramica')}>Cerâmica / Fábrica de Tijolos</button>
          </li>
        </ul>
      </nav>
      <div style={{ marginTop: '2rem' }}>
        {painel === 'acudes' ? <AcudesPeixes /> : <CeramicaTijolos />}
      </div>
    </div>
  );
}

export default App;
