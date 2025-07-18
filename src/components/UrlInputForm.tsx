import { useState } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Link,
  CircularProgress
} from '@mui/material';

const UrlInputForm = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShortUrl('');
    setLoading(true);

    try {
      const res = await axios.post('https://glad-sibeal-khasim-c57c075f.koyeb.app/api/shorten', {
        //http://localhost:8081/api/shorten
        originalUrl: url,
      });
      setShortUrl(res.data);
    } catch (err) {
      setError('Invalid URL or Server Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: '#fff',
        p: 4,
        borderRadius: 3,
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        textAlign: 'center',
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{
            background: 'linear-gradient(to right, #2196f3, #e91e63)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 10px rgba(0,0,0,0.1)',
            letterSpacing: 1.2,
            mb: 1,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
         TinyURL
        </Typography>
        
        <Typography
  variant="subtitle1"
  color="text.secondary"
  sx={{
    fontStyle: 'italic',
    fontSize: '1.1rem',
    backgroundColor: '#ffe6f0', // soft pinkish background
     background: 'linear-gradient(90deg, #e0f7fa, #e8f5e9)',
    border: '1px dashed #f8a9c4',
    borderRadius: '8px',
    padding: '8px 16px',
    display: 'inline-block',
    mt: 1,
    boxShadow: '0 2px 6px rgba(248, 169, 196, 0.2)', // subtle pink shadow
  }}
>
  Your Modern URL Shortening Assistant ✂️
</Typography>


      </Box>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Enter a long URL"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          sx={{ backgroundColor: '#f1f1f1', borderRadius: 1 }}
          color="secondary"
        />
              
        <Button
  type="submit"
  variant="contained"
  fullWidth
  disabled={loading}
  sx={{
    mt: 3,
    py: 1.2,
    borderRadius: '8px',
    // background: 'linear-gradient(to right, #00C9FF, #92FE9D)',
    background: 'linear-gradient(to right, #2196f3, #e91e63)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    textTransform: 'none',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      background: 'linear-gradient(to right, #00B4DB, #0083B0)',
      boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.25)',
      transform: 'scale(1.02)',
    },
    '&:disabled': {
      opacity: 0.6,
      background: '#ccc',
      cursor: 'not-allowed',
    },
  }}
>
  {loading ? (
    <CircularProgress size={24} sx={{ color: '#ffffff' }} />
  ) : (
    'Shorten My URL'
  )}
</Button>


      </Box>


      {error && (
        <Alert severity="error" sx={{ mt: 3 }}>
          {error}
        </Alert>
      )}

      {shortUrl && (
        <Alert severity="success" sx={{ mt: 3 }}>
          Short URL:{' '}
          <Link href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </Link>
        </Alert>
      )}
    </Container>
  );
};

export default UrlInputForm;
