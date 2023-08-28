import { useState, useEffect } from 'react';
import Logo from '@components/Logo';

// eslint-disable-next-line react/prop-types
const PageValidationEmail = ({ verifie, emailVerified }) => {
  const [verificationStatus, setVerificationStatus] = useState(false);
 
  const styleDuConteneur = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '0 20px',
  };

  const styleDeLaCarte = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '90%',
  };


  const styleDuConteneurDuMessage = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Lato, sans-serif',
    marginTop: '15px',
  };

  const styleDuConteneurDuBouton = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0',
  };

  const styleDuBouton = {
    backgroundColor: '#DF0610',
    color: '#fff',
    padding: '12px 120px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const styleTexteDeVerification = {
    fontWeight: 'bold',
    fontSize: '18px',
  };

  const styleEmail = {
    marginTop: '15px',
    color: '#C62828',
  };
  const handleVerificationClick = async () => {
    try {
      // Send a request to your backend API to verify the email
      const response = await fetch(
        `http://localhost:3000/users/validate/${verifie}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        // Verification successful, update the verification status
        setVerificationStatus(true);

        // Redirect the user to another page or homepage
        window.location.href = '/another-page'; // Change this URL as needed
      } else {
        // Handle verification error
        console.error('Email verification failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    if (verificationStatus) {
      // Do something after verification status changes
    }
  }, [verificationStatus]);

  return (
    <div style={styleDuConteneur}>
      <div style={styleDeLaCarte}>
        <div>
          {/*  wrapp svg logo into component */}
          <Logo />
        </div>
        <div style={styleDuConteneurDuMessage}>
          <p style={{ fontWeight: 'bold', fontSize: '20px', margin: '4px 0' }}>
            Vérifiez votre Email
          </p>
          <div style={{ margin: '4px 0' }}>
            <p>Merci d&apos;avoir vérifié votre compte</p>
            <p style={{ margin: '4px 0' }}>Bienvenue sur MenuPro !</p>
            <p style={{ margin: '4px 0' }}>Savourez le périple🚀🍽️</p>
          </div>
          <div style={styleDuConteneurDuBouton}>
            <button style={styleDuBouton} onClick={handleVerificationClick}>
              <span style={styleTexteDeVerification}>vérifié</span>
            </button>
          </div>
          <div
            style={{
              marginTop: '15px',
              marginBottom: '15px',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: '4px 0' }}>
              La validation ouvre des opportunités,
            </p>
            <p style={{ margin: '4px 0' }}>
              Explorez fonctionnalités uniques et avantages exceptionnels.
            </p>
            <p style={styleEmail}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageValidationEmail;
