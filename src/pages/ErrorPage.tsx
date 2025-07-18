// // const ErrorPage = () => (
// //   <div>
// //     <h2>Oops! This URL has expired or doesn't exist.</h2>
// //     <a href="/">Create a new short URL</a>
// //   </div>
// // );

// // export default ErrorPage;


// // ErrorPage.tsx
// import { Box, Typography, Button, Container } from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';

// const ErrorPage = () => (
//   <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
//     <Box>
//       <Typography variant="h4" gutterBottom color="error">
//         Oops! Link Not Found
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 3 }}>
//         This URL has expired or doesn't exist.
//       </Typography>
//       <Button variant="contained" color="primary" component={RouterLink} to="/">
//         Create a new short URL
//       </Button>
//     </Box>
//   </Container>
// );

// export default ErrorPage;


const ErrorPage = () => (
  <div style={{
    textAlign: 'center',
    padding: '2rem',
    fontFamily: "'Poppins', sans-serif",
  }}>
    <h2 style={{color: '#030506ff'}}>Oops! This URL has expired or doesn't exist.</h2>
    <a href="/" style={{
      textDecoration: 'none',
      color: '#256fbaff',
      fontWeight: 600,
    }}>Create a new short URL</a>
  </div>
);

export default ErrorPage;
