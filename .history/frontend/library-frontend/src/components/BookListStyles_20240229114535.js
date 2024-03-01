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
    display: 'inline-block',
    marginBottom: '20px',
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#3498db',
    fontWeight: 'bold',
  },
  bookContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
  },
  bookStyle: {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%', // Ensure each card takes up the full height
    boxSizing: 'border-box', // Ensure padding is included in height
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
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'auto', // Push the button container to the bottom
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
