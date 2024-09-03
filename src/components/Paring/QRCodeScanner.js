import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const QRCodeScanner = (userId) => {
  const [setScannedPlayerId] = useState('');
  const handleScan = (data) => {
    console.log("handle")
    if (data) {
      setScannedPlayerId(data);
      try {
        addDoc(collection(db, 'matches'), {
          player1: userId,
          player2: data, // Assuming `data` is the scanned user's UID
          status: "pending",
          createdAt: new Date(),
          startedAt: null,
        });
        console.log('Match started with:', data);
      } catch (error) {
        console.error('Error starting match:', error);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <Scanner
      onDecode={handleScan}
      onError={handleError}
      style={{ width: '100%' }}
    />
  );
};

export default QRCodeScanner;