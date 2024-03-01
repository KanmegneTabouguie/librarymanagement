// BookListStyles.js
const BookListStyles = {
  container: {
    position: 'relative', // Add this to enable positioning for child elements
    textAlign: 'center',
    padding: '20px',
    background: 'linear-gradient(to right, #6A11CB, #2575FC)',
    color: 'white', // Adjust text color for better visibility
  },
  headingStyle: {
    fontSize: '3em',
    color: '#2ecc71',
    fontWeight: '700',
    marginBottom: '30px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },

  bookContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  bookStyle: {
    border: '1px solid #ecf0f1',
    margin: '15px',
    padding: '20px',
    width: '250px',
    borderRadius: '15px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom right, #3498db, #2ecc71)',
    color: 'white',
  },

  titleStyle: {
    fontSize: '1.8em',
    marginBottom: '15px',
    color: '#fff',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
  },

  authorStyle: {
    fontSize: '1.2em',
    color: '#ecf0f1',
    marginBottom: '10px',
  },

  availabilityStyle: {
    fontSize: '1.2em',
    color: '#ecf0f1',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },

  actionLinkStyle: {
    position: 'absolute', // or 'fixed'
    top: '10px', // Adjust this value to position it as desired
    left: '10px', // Adjust this value to position it as desired
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1.4em',
    display: 'block',
    background: '#e74c3c',
    padding: '10px 15px',
    borderRadius: '8px',
    transition: 'background 0.3s ease-in-out',
    zIndex: '999', // Add a higher z-index value
  },

  updateLinkStyle: {
    textDecoration: 'none',
    color: '#e74c3c',
    fontSize: '1.2em',
    marginTop: '15px',
    display: 'block',
  },

  deleteButtonStyle: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.2em',
    transition: 'background-color 0.3s ease-in-out',
  },

  publishLinkStyle: {
    textDecoration: 'none',
    color: '#f39c12',
    fontSize: '1.2em',
    marginTop: '15px',
    display: 'block',
  },
};

export default BookListStyles;
