import { Link } from 'react-router-dom';
import authService from './../store/authService';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            <span className="brand-icon"></span>
            VOID Society
          </Link>
        </div>
        
        <div className="navbar-menu">
          <Link to="/" className="nav-link">Home</Link>
          {user ? (
            <>
              <Link to="/terminal" className="nav-link">CLI</Link>
              <Link to="/blogs" className="nav-link">Blogs</Link>
              <div className="user-menu">
                <span className="user-name">Welcome, {user.username}</span>
                <button onClick={onLogout} className="logout-btn">Logout</button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;