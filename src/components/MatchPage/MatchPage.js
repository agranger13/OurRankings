import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const MatchPage = () => {
  const { matchId } = useParams();
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const matchDocRef = doc(db, 'matches', matchId);
        const matchDoc = await getDoc(matchDocRef);

        if (matchDoc.exists()) {
          setMatchData(matchDoc.data());
        } else {
          setError('Match not found.');
        }
      } catch (err) {
        console.error('Failed to fetch match data:', err);
        setError('Failed to load match data.');
      } finally {
        setLoading(false);
      }
    };

    fetchMatchData();
  }, [matchId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Match Details</h1>
      <p>Player 1: {matchData.player1}</p>
      <p>Player 2: {matchData.player2}</p>
      <p>Status: {matchData.status}</p>
      {/* Add more match details as needed */}
    </div>
  );
};

export default MatchPage;