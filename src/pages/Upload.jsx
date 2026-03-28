import React, { useState } from 'react';

const Upload = () => {
  const [formData, setFormData] = useState({
    title: '',
    story: '',
    image: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('This feature will be available in the next update (Backend integration required).');
    console.log('Form submission:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="gallery-container">
      <header className="header">
        <h1>Share Your Story</h1>
        <p>Your moments deserve to be heard</p>
      </header>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Title</label>
            <input 
              type="text" 
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Give your memory a name..."
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Story</label>
            <textarea 
              name="story"
              value={formData.story}
              onChange={handleInputChange}
              rows="6"
              placeholder="What makes this image special?"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', resize: 'vertical' }}
            />
          </div>

          <button 
            type="submit"
            style={{ 
              width: '100%', 
              padding: '14px', 
              borderRadius: '8px', 
              background: '#2563eb', 
              color: 'white', 
              border: 'none', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
            }}
          >
            Post Story
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
