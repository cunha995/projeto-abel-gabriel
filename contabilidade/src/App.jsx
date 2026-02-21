
import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Card, CardContent, Box } from '@mui/material';
import { Line } from 'react-chartjs-2';
import AcudesPeixes from './AcudesPeixes';
import CeramicaTijolos from './CeramicaTijolos';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function App() {
  const [painel, setPainel] = useState('acudes');
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Lucro Mensal (R$)',
        data: [1200, 1500, 1100, 1800, 1700, 2100],
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.2)',
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Lucro Mensal' },
    },
  };
  return (
    <Container maxWidth="md">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Painel de Contabilidade Mensal
          </Typography>
          <Button color="inherit" onClick={() => setPainel('acudes')}>Açudes de Peixes</Button>
          <Button color="inherit" onClick={() => setPainel('ceramica')}>Cerâmica / Fábrica de Tijolos</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Lucro Mensal
            </Typography>
            <Line data={chartData} options={chartOptions} />
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ mt: 4 }}>
        {painel === 'acudes' ? <AcudesPeixes /> : <CeramicaTijolos />}
      </Box>
    </Container>
  );
}

export default App;
