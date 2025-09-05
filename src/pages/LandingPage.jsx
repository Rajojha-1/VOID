import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Kali Terminal</span>
          </h1>
          <p className="hero-subtitle">
            Experience the power of Kali Linux terminal in your browser. 
            Authenticate, explore, and interact with a realistic command-line interface.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="cta-button primary">
              Get Started
            </Link>
            <Link to="/login" className="cta-button secondary">
              Login
            </Link>
          </div>
        </div>
        
        <div className="hero-terminal">
          <div className="terminal-preview">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
              </div>
              <span className="terminal-title">kali@terminal:~$</span>
            </div>
            <div className="terminal-content">
              <div className="terminal-line">
                <span className="prompt">kali@terminal:~$</span>
                <span className="command">ls -la</span>
              </div>
              <div className="terminal-output">
                <div>drwxr-xr-x 2 kali kali 4096 Jan 15 10:30 .</div>
                <div>drwxr-xr-x 3 kali kali 4096 Jan 15 10:30 ..</div>
                <div>-rw-r--r-- 1 kali kali 1024 Jan 15 10:30 README.md</div>
                <div>drwxr-xr-x 2 kali kali 4096 Jan 15 10:30 Documents</div>
              </div>
              <div className="terminal-line">
                <span className="prompt">kali@terminal:~$</span>
                <span className="cursor">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Secure Authentication</h3>
              <p>Login with your credentials to access your personalized terminal experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Realistic CLI</h3>
              <p>Experience authentic Kali Linux terminal with real commands like ls, mkdir, nano, and more.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📁</div>
              <h3>File System</h3>
              <p>Create, delete, and manage directories and files in your virtual file system.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Blog Platform</h3>
              <p>Read and share knowledge through our integrated blog platform.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cta-section">
        <div className="container">
          <h2>Ready to Start?</h2>
          <p>Join thousands of users exploring the Kali Terminal experience</p>
          <Link to="/register" className="cta-button primary large">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;