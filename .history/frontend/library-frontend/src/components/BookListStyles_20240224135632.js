// BookListStyles.js
const BookListStyles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },

  headingStyle: {
    fontSize: '2.5em',
    color: '#2ecc71',
    fontWeight: '700',
    marginBottom: '20px',
  },

  bookContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  bookStyle: {
    border: '1px solid #ecf0f1',
    margin: '10px',
    padding: '15px',
    width: '200px',
    borderRadius: '10px',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
    transformOrigin: 'center bottom',
    overflow: 'hidden',
  },

  titleStyle: {
    fontSize: '1.8em',
    marginBottom: '10px',
    color: '#34495e',
  },

  authorStyle: {
    fontSize: '1.2em',
    color: '#7f8c8d',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  },

  actionLinkStyle: {
    textDecoration: 'none',
    color: '#3498db',
    fontSize: '1.2em',
    marginTop: '30px',
    display: 'block',
  },

  updateLinkStyle: {
    textDecoration: 'none',
    color: '#e74c3c',
    fontSize: '1em',
  },

  deleteButtonStyle: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s ease-in-out',
  },

  publishLinkStyle: {
    textDecoration: 'none',
    color: '#f39c12',
    fontSize: '1em',
  },
};

export default BookListStyles;
