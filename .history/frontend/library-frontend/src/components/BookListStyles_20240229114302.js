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
    fontWeight: 'bold',
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
    transition: 'background-color 0.3s ease',
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
    display: 'flex',
    justifyContent: 'center',
  },
  updateLinkStyle: {
    marginRight: '10px',
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#27ae60',
    fontWeight: 'bold',
  },
  deleteButtonStyle: {
    fontSize: '1rem',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  publishLinkStyle: {
    marginLeft: '10px',
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#3498db',
    fontWeight: 'bold',
  },
};

export default bookListStyles;
