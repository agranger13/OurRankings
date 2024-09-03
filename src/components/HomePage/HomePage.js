import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import './HomePage.css';
import PlayerQRCode from '../Paring/PlayerQRCode';
import { Button, Typography } from '@mui/material';
import QRCodeScanner from '../Paring/QRCodeScanner';

function HomePage() {
  const [userId, setUserId] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const storedName = localStorage.getItem('playerName');
        if (storedName) {
          setName(storedName);
          setUserId(auth.currentUser.uid)
        } else {
          navigate('/');
        }
      } else {
        navigate('/');
      }
    });

    return unsubscribe;
  }, [navigate]);

  return (
    <div className="container">
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h4">Bienvenue, {name}</Typography>
        {userId && (
          <>
            <Typography variant="h6">Voici votre QR code :</Typography>
            <PlayerQRCode playerId={userId} />
          </>
        )}
        <Button
        variant="contained"
        color="primary"
        onClick={() => setScanning(true)}
      >
        Scanner le QR Code d'un autre joueur
      </Button>

      {scanning && (
        <div style={{ marginTop: '20px' }}>
          <QRCodeScanner userId={userId}/>
        </div>
      )}
      </div>
    </div>
  );
}

export default HomePage;
