import React, { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { motion } from 'motion/react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  IconButton,
} from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CloseIcon from '@mui/icons-material/Close';

export const A11y: React.FC = () => {
  return (
    <>
      <A11yButton />
      <GlassCard style={{ position: 'fixed', bottom: 10, right: 10, padding: '10px', zIndex: 1000 }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</button>
      </GlassCard>
    </>
  );
};

const A11yButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const [fontFamily, setFontFamily] = useState<'default' | 'dyslexic' | 'monospace'>('default');
  const [invertColors, setInvertColors] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    switch (fontSize) {
      case 'large':
        html.style.setProperty('font-size', 'x-large');
        break;
      case 'extra-large':
        html.style.setProperty('font-size', 'xx-large');
        break;
      default:
        html.style.removeProperty('font-size');
    }

    switch (fontFamily) {
      case 'dyslexic':
        html.style.setProperty('font-family', 'OpenDyslexic, sans-serif');
        break;
      case 'monospace':
        html.style.setProperty('font-family', '"Courier New", monospace');
        break;
      default:
        html.style.setProperty('font-family', '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif');
    }

    if (invertColors) {
      html.classList.add('filter', 'invert');
    } else {
      html.classList.remove('filter', 'invert');
    }

    const hasAccessibilityFeatures = fontSize !== 'normal' || fontFamily !== 'default' || invertColors;
    if (hasAccessibilityFeatures) {
      html.classList.add('a11y-active');
      body.classList.add('a11y-active');
    } else {
      html.classList.remove('a11y-active');
      body.classList.remove('a11y-active');
    }
  }, [fontSize, fontFamily, invertColors]);

  return (
    <motion.div style={{ position: 'fixed', bottom: 10, left: 10, padding: '10px', zIndex: 1000 }}>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} aria-labelledby="a11y-modal-header">
        <DialogTitle id="a11y-modal-header" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          Accessibility Tools
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 2 }}>
            <FormControl component="fieldset">
              <RadioGroup value={fontSize} onChange={(e) => setFontSize(e.target.value as any)}>
                <FormControlLabel value="normal" control={<Radio />} label="Normal Size" />
                <FormControlLabel value="large" control={<Radio />} label="Large Size" />
                <FormControlLabel value="extra-large" control={<Radio />} label="Extra Large Size" />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box sx={{ mb: 2 }}>
            <FormControl component="fieldset">
              <RadioGroup value={fontFamily} onChange={(e) => setFontFamily(e.target.value as any)}>
                <FormControlLabel value="default" control={<Radio />} label="Default Font" />
                <FormControlLabel value="dyslexic" control={<Radio />} label="Dyslexia-Friendly Font" />
                <FormControlLabel value="monospace" control={<Radio />} label="Monospace Font" />
              </RadioGroup>
            </FormControl>
          </Box>

          <List>
            <ListItem disableGutters>
              <ListItemButton onClick={() => setInvertColors(!invertColors)}>
                <ListItemText primary="High Contrast Mode" />
                <Switch checked={invertColors} />
              </ListItemButton>
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
      <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9, rotate: -5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
        <Button variant="contained" startIcon={<AccessibilityNewIcon />} onClick={() => setIsOpen(true)} aria-label="Open accessibility tools">
          Accessibility Tools
        </Button>
      </motion.div>
    </motion.div>
  );
};