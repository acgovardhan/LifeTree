// src/App.jsx

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserProvider } from 'ethers';
import { Container, Card, Button, Image, Row, Col } from 'react-bootstrap';

// --- Main App Component ---
export default function App() {
  // --- State Management ---
  const [status, setStatus] = useState('');
  const [buttonText, setButtonText] = useState('Claim Your NFT Certificate');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [courseName, setCourseName] = useState("Advanced Solidity");

  // --- Web3 Logic ---
  const handleClaimNft = async () => {
    // This line opens your other page in a new tab
    window.open('index2.html', '_blank', 'noopener,noreferrer');

    setStatus('Connecting to your wallet...');
    setIsButtonDisabled(true);

    if (typeof window.ethereum === 'undefined') {
      setStatus('Please install MetaMask to claim your NFT.');
      setIsButtonDisabled(false);
      return;
    }

    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setStatus(`Wallet Connected: ${address.substring(0, 6)}...${address.substring(address.length - 4)}`);
      setButtonText('Ready to Mint');

    } catch (error) {
      console.error("Error connecting to wallet:", error);
      if (error.code === 'ACTION_REJECTED' || error.code === 4001) {
        setStatus('You rejected the connection request.');
      } else {
        setStatus('An error occurred. Please check the console.');
      }
    } finally {
      setIsButtonDisabled(false);
    }
  };

  // --- JSX for Rendering the Page ---
  return (
    <Container 
      fluid
      className="bg-dark font-sans d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        padding: '1rem'
      }}
    >
      {/* Use a Row to create a two-column layout */}
      <Row className="align-items-center justify-content-center w-100">
        
        {/* --- Left Column: NFT Claiming Card --- */}
        <Col lg={5} md={8} className="mb-5 mb-lg-0">
          <Card 
            className="shadow-lg rounded-4 text-center border-secondary" 
            style={{ 
              maxWidth: '520px', 
              width: '100%',
              margin: '0 auto' // Center the card within the column
            }}
            data-bs-theme="dark"
          >
            <Card.Body className="p-sm-5 p-4">
              <div 
                className="mx-auto d-flex align-items-center justify-content-center mb-4"
                style={{ 
                  height: '80px', 
                  width: '80px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '50%' 
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#0d6efd" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                </svg>
              </div>
              
              <h1 className="fw-bold mb-3">Congratulations!</h1>
              <p className="text-white-50 fs-5 mb-2">You've successfully completed the course:</p>
              <p className="fs-4 fw-semibold text-primary mb-4">"Speed typing"</p>
              
              <Card className="mb-4 border-secondary">
                <Card.Body className="py-4">
                  <p className="text-white-50 small mb-3">Your NFT certificate will be displayed here.</p>
                  <div className="d-flex justify-content-center">
                    <Image 
                      src="https://placehold.co/400x400/343a40/adb5bd?text=NFT+Certificate"
                      alt="NFT Preview"
                      rounded
                      fluid
                      style={{ maxWidth: '192px', height: 'auto' }}
                    />
                  </div>
                </Card.Body>
              </Card>
              
              <div className="d-flex justify-content-center mb-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={handleClaimNft} 
                  disabled={isButtonDisabled}
                  className="px-5 py-2"
                  
                >
                  {buttonText}
                </Button>
              </div>
              
              <div className="text-white-50 text-center" style={{ minHeight: '24px' }}>
                {status}
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* --- Right Column: Information Panel --- */}
        <Col lg={5} md={8}>
          <div className="text-white p-4">
            <h2 className="fw-bold mb-3">About Your Certificate 📜</h2>
            <p className="text-white-50">
              This isn't just a regular certificate. It's a Non-Fungible Token (NFT) minted on the blockchain. This means it's a permanent, verifiable, and tamper-proof record of your achievement that you truly own.
            </p>
            <h4 className="fw-semibold mt-4 mb-3 text-primary">Course Highlights</h4>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">✅ In-depth Smart Contract Development</li>
              <li className="mb-2">✅ Advanced Design Patterns & Security</li>
              <li className="mb-2">✅ Gas Optimization Techniques</li>
              <li className="mb-2">✅ Real-world Project Implementation</li>
            </ul>
            <p className="text-white-50 mt-4 small">
              To claim, simply connect your Web3 wallet (like MetaMask) and approve the transaction. Once minted, it will be sent directly to your wallet address.
            </p>
          </div>
        </Col>

      </Row>
    </Container>
  );
}