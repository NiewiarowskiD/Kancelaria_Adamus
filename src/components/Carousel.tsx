import { useEffect, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

const slides = [
  {
    image: '/carousel-1.webp',
    title: 'Profesjonalna pomoc prawna',
    subtitle: 'Doświadczenie i zaangażowanie w każdej sprawie',
  },
  {
    image: '/carousel-2.webp',
    title: 'Sprawiedliwość i rzetelność',
    subtitle: 'Bronimy Twoich praw z pełnym zaangażowaniem',
  },
  {
    image: '/carousel-3.webp',
    title: 'Indywidualne podejście',
    subtitle: 'Każdy klient zasługuje na szczególną uwagę',
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 320, sm: 420, md: 520 },
        overflow: 'hidden',
        bgcolor: 'primary.main',
      }}
    >
      {slides.map((slide, i) => (
        <Fade key={i} in={index === i} timeout={800}>
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: index === i ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              px: 3,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'common.white',
                fontWeight: 600,
                mb: 2,
                textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              {slide.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'secondary.main',
                fontWeight: 400,
                textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
              }}
            >
              {slide.subtitle}
            </Typography>
          </Box>
        </Fade>
      ))}

      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1.5,
          zIndex: 2,
        }}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: index === i ? 32 : 10,
              height: 10,
              borderRadius: 5,
              bgcolor: index === i ? 'secondary.main' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
