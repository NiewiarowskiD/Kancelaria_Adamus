import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Seo from '../seo/Seo';
import { PAGE_META } from '../seo/routes';

export default function Regulamin() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
      <Seo {...PAGE_META['/regulamin']} path="/regulamin" />
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography
          variant="overline"
          component="h1"
          sx={{ color: 'secondary.main', letterSpacing: '0.2em', display: 'block', mb: 2 }}
        >
          Regulamin serwisu i świadczenia porad prawnych online (e-porad)
        </Typography>

        <Card
          sx={{
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            p: { xs: 3, md: 5 },
          }}
        >
          <CardContent sx={{ '& .MuiTypography-root': { mb: 2 } }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
            >
              § 1. Lorem ipsum
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
            >
              § 2. Lorem ipsum
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
            >
              § 3. Lorem ipsum
            </Typography>

            <Box
              component="ul"
              sx={{
                color: 'text.secondary',
                pl: 3,
                mb: 2,
                lineHeight: 1.8,
                '& li': { mb: 2, textAlign: 'justify' },
              }}
            >
              <li>
                <strong>Lorem ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </li>
              <li>
                <strong>Lorem ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </li>
              <li>
                <strong>Lorem ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </li>
              <li>
                <strong>Lorem ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </li>
              <li>
                <strong>Lorem ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </li>
              <li>
                <strong>Lorem ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </li>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
