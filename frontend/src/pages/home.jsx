import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Kali Terminal Simulator</h1>
        <p>A web-based terminal experience</p>
      </div>
      
      <div className="home-content">
        <div className="home-features">
          <h2>Features:</h2>
          <ul>
            <li>Realistic terminal experience in your browser</li>
            <li>Filesystem simulation</li>
            <li>Basic Linux commands</li>
          </ul>
        </div>
        
        <div className="home-actions">
          <div className="auth-actions">
            <h2>Get Started:</h2>
            <Link to="/terminal" className="home-button primary">Launch Terminal</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
