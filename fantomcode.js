import React, { useState, useEffect } from 'react';

function AadharVerification() {
  const [isListening, setIsListening] = useState(false);
  const [aadharNumber, setAadharNumber] = useState('');
  const [verificationStatus, setVerificationStatus] = useState(null); // 'pending', 'success', or 'error'

  const handleListenClick = () => {
    setIsListening(true);
   
    setTimeout(() => {
      setIsListening(false);
      setAadharNumber('123456789012'); 
    }, 2000); 
  };

  const handleVerification = async () => {
    
    setVerificationStatus('pending'); 
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
    setVerificationStatus('success'); 
  };

  return (
    <div className="aadhar-verification">
      <h1>Aadhar Verification</h1>
      <button onClick={handleListenClick} disabled={isListening}>
        {isListening ? 'Stop Listening' : 'Start Voice Recognition'}
      </button>
      <input type="text" value={aadharNumber} readOnly />
      {verificationStatus === 'pending' && <p>Verifying Aadhar number...</p>}
      {verificationStatus === 'success' && <p>Aadhar number verified successfully!</p>}
      {verificationStatus === 'error' && <p>Aadhar number verification failed.</p>}
      <button onClick={handleVerification} disabled={!aadharNumber || verificationStatus}>
        Verify Aadhar
      </button>
    </div>
  );
}

export default AadharVerification;
