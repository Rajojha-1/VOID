import { useState, useEffect } from 'react';
import authService from '../services/authService';
import fileService from '../services/fileService';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('directories');
  const [directories, setDirectories] = useState([]);
  const [newDirectory, setNewDirectory] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    author: '',
    image: ''
  });

  useEffect(() => {
    loadDirectories();
    loadBlogs();
  }, []);

  const loadDirectories = () => {
    const result = fileService.listDirectory('/');
    if (result.success) {
      setDirectories(result.contents.filter(item => item.type === 'directory'));
    }
  };

  const loadBlogs = () => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    setBlogs(savedBlogs);
  };

  const addDirectory = () => {
    if (newDirectory.trim()) {
      const result = fileService.createDirectory('/', newDirectory.trim());
      if (result.success) {
        setNewDirectory('');
        loadDirectories();
      } else {
        alert(result.message);
      }
    }
  };

  const deleteDirectory = (dirName) => {
    if (window.confirm(`Are you sure you want to delete the directory "${dirName}"?`)) {
      const result = fileService.removeDirectory('/', dirName);
      if (result.success) {
        loadDirectories();
      } else {
        alert(result.message);
      }
    }
  };

  const addBlog = () => {
    if (newBlog.title.trim() && newBlog.content.trim()) {
      const blog = {
        id: Date.now(),
        ...newBlog,
        createdAt: new Date().toISOString(),
        author: authService.getCurrentUser().username
      };
      
      const updatedBlogs = [...blogs, blog];
      setBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      
      setNewBlog({ title: '', content: '', author: '', image: '' });
    }
  };

  const deleteBlog = (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      const updatedBlogs = blogs.filter(blog => blog.id !== blogId);
      setBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-actions">
          <span>Welcome, {authService.getCurrentUser().username}</span>
          <button onClick={onLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      <div className="admin-tabs">
        <button 
          className={activeTab === 'directories' ? 'active' : ''}
          onClick={() => setActiveTab('directories')}
        >
          Manage Directories
        </button>
        <button 
          className={activeTab === 'blogs' ? 'active' : ''}
          onClick={() => setActiveTab('blogs')}
        >
          Manage Blogs
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'directories' && (
          <div className="directories-section">
            <h2>System Directories</h2>
            <p>These directories will be available to all users in their CLI.</p>
            
            <div className="add-directory">
              <input
                type="text"
                value={newDirectory}
                onChange={(e) => setNewDirectory(e.target.value)}
                placeholder="Directory name"
              />
              <button onClick={addDirectory}>Add Directory</button>
            </div>

            <div className="directories-list">
              {directories.map((dir, index) => (
                <div key={index} className="directory-item">
                  <span className="directory-name">📁 {dir.name}</span>
                  <button 
                    onClick={() => deleteDirectory(dir.name)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'blogs' && (
          <div className="blogs-section">
            <h2>Blog Management</h2>
            
            <div className="add-blog">
              <h3>Add New Blog</h3>
              <div className="blog-form">
                <input
                  type="text"
                  value={newBlog.title}
                  onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                  placeholder="Blog title"
                />
                <input
                  type="text"
                  value={newBlog.image}
                  onChange={(e) => setNewBlog({...newBlog, image: e.target.value})}
                  placeholder="Image URL (optional)"
                />
                <textarea
                  value={newBlog.content}
                  onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
                  placeholder="Blog content"
                  rows="6"
                />
                <button onClick={addBlog}>Add Blog</button>
              </div>
            </div>

            <div className="blogs-list">
              <h3>Existing Blogs</h3>
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-item">
                  <div className="blog-header">
                    <h4>{blog.title}</h4>
                    <button 
                      onClick={() => deleteBlog(blog.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                  <p className="blog-meta">By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}</p>
                  <p className="blog-preview">{blog.content.substring(0, 150)}...</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;