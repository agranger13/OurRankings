import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import './HomePage.css';

function HomePage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const storedName = localStorage.getItem('playerName');
        if (storedName) {
          setName(storedName);
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
      <h1>Bonjour, {name} !</h1>
      <p>Bienvenue dans votre ligue de tennis.</p>
    </div>
  );
}

export default HomePage;
