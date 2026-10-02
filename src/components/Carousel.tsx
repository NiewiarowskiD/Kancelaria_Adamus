import { useEffect, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

const slides = [
  {
    image: '/logo-proposal-3.svg',
  },
  {
    image: '/carousel-1.webp',
    title: '„Ius est ars boni et aequi”',
    subtitle: '— prawo jest sztuką tego, co dobre i słuszne.',
  },
  {
    image: '/carousel-2.webp',
    title: '„Nemo enim in persequendo deteriorem causam, sed meliorem facit”',
    subtitle: '— dochodzenie swoich praw ma polepszać, a nie pogarszać położenie strony',
  },
  {
    image: '/carousel-3.webp',
    title: 'Rozmawiamy po ludzku, działamy profesjonalnie.',
    subtitle: 'Pomagamy zrozumieć prawo, zanim przyjdzie się z nim zmierzyć',
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
              backgroundImage: i === 0 
                ? `url(${slide.image})` 
                : `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${slide.image})`,
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
            {slide.title && (
              <Typography
                variant="h2"
                component="p"
                sx={{
                  color: 'common.white',
                  fontWeight: 600,
                  mb: 2,
                  textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                {slide.title}
              </Typography>
            )}
            {slide.subtitle && <Typography
              variant="h5"
              component="p"
              sx={{
                color: 'secondary.main',
                fontWeight: 400,
                textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
              }}
            >
              {slide.subtitle}
            </Typography>}
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
