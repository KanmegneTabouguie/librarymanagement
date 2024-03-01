const bookListStyles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  headingStyle: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  },
  actionLinkStyle: {
    display: 'block',
    marginBottom: '20px',
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#3498db',
  },
  bookContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  bookStyle: {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  titleStyle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  authorStyle: {
    marginBottom: '10px',
    color: '#555',
  },
  availabilityStyle: {
    marginBottom: '10px',
    color: '#333',
  },
  buttonContainer: {
    marginTop: '10px',
  },
  updateLinkStyle: {
    marginRight: '10px',
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#27ae60',
  },
  deleteButtonStyle: {
    fontSize: '1rem',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  publishLinkStyle: {
    marginLeft: '10px',
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#3498db',
  },
};

export default bookListStyles;
