// // pages/Home.tsx

// import UrlInputForm from '../components/UrlInputForm';
// import { Box, Container } from '@mui/material';

// const Home = () => (
//   <Box
//     sx={{
//       minHeight: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       background: 'linear-gradient(135deg, #e0f7fa 0%, #fce4ec 100%)',
//       px: 2,
//     }}
//   >
//     <Container
//       maxWidth="sm"
//       sx={{
//         width: '100%',
//         display: 'flex',
//         justifyContent: 'center',
//       }}
//     >
//       <UrlInputForm />
//     </Container>
//   </Box>
// );

// export default Home;


import UrlInputForm from '../components/UrlInputForm';

const Home = () => (
  <div style={{ width: '100%', maxWidth: '600px' }}>
    <UrlInputForm />
  </div>
);

export default Home;

