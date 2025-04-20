import React, { useState } from 'react';
import axios from 'axios';

function Referral() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReferral = async () => {
    try {
      const response = await axios.post('/api/referral/refer', {
        userId: 'userId', // Current user's ID
        referredUserId: email, // Friend's email or ID
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Referral failed: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Refer a Friend</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Friend's Email"
      />
      <button onClick={handleReferral}>Refer</button>
      <p>{message}</p>
    </div>
  );
}

export default Referral;
