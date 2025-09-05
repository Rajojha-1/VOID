import { useState, useEffect } from 'react';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    setBlogs(savedBlogs);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedBlog) {
    return (
      <div className="blog-detail-page">
        <button 
          onClick={() => setSelectedBlog(null)}
          className="back-button"
        >
          ← Back to Blogs
        </button>
        
        <article className="blog-article">
          <header className="article-header">
            <h1>{selectedBlog.title}</h1>
            <div className="article-meta">
              <span className="author">By {selectedBlog.author}</span>
              <span className="date">{formatDate(selectedBlog.createdAt)}</span>
            </div>
          </header>
          
          {selectedBlog.image && (
            <div className="article-image">
              <img src={selectedBlog.image} alt={selectedBlog.title} />
            </div>
          )}
          
          <div className="article-content">
            {selectedBlog.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="blogs-page">
      <div className="blogs-header">
        <h1>Knowledge Hub</h1>
        <p>Discover insights, tutorials, and stories from our community</p>
      </div>

      {blogs.length === 0 ? (
        <div className="no-blogs">
          <div className="no-blogs-icon">📝</div>
          <h2>No blogs yet</h2>
          <p>Check back later for interesting articles and tutorials!</p>
        </div>
      ) : (
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="blog-card"
              onClick={() => setSelectedBlog(blog)}
            >
              {blog.image && (
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
              )}
              
              <div className="blog-content">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-excerpt">
                  {blog.content.substring(0, 150)}...
                </p>
                <div className="blog-meta">
                  <span className="blog-author">{blog.author}</span>
                  <span className="blog-date">{formatDate(blog.createdAt)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsPage;