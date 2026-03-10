import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem, MenuHeader, Popup, Icon, Modal } from "semantic-ui-react";
import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";

export const A11y: React.FC = () => {
    return (
    <>
    <A11yButton/>
    <GlassCard style={{ position: "fixed", bottom: 10, right: 10, padding: "10px", zIndex: 1000 }}>
    <button onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>Back to Top</button>
    </GlassCard>
    </>
)}

const A11yButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
    const [fontFamily, setFontFamily] = useState<'default' | 'dyslexic' | 'monospace'>('default');
    const [invertColors, setInvertColors] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;
        
        // Apply font size to document root
        html.style.removeProperty('--font-size-multiplier');
        
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

        // Apply font family
        html.style.removeProperty('--font-family');
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

        // Apply color inversion
        if (invertColors) {
            html.className = "filter invert"
        } else {
            html.className = ""
        }

        // Add/remove active class based on whether any accessibility features are enabled
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
        <motion.div  style={{ position: "fixed", bottom: 10, left: 10, padding: "10px", zIndex: 1000 }}>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="small" role="modal" aria-modal="true" aria-labelledby="a11y-modal-header">
            <Modal.Header>Accessibility Tools <Button style={{ float: "right" }} icon="x" onClick={() => setIsOpen(false)} /></Modal.Header>
            <Modal.Content>
                <Menu vertical fluid>
                    <MenuHeader>Font Size</MenuHeader>
                    <MenuItem
                        active={fontSize === 'normal'}
                        onClick={() => setFontSize('normal')}
                    >
                        Normal Size
                    </MenuItem>
                    <MenuItem
                        active={fontSize === 'large'}
                        onClick={() => setFontSize('large')}
                    >
                        Large Size
                    </MenuItem>
                    <MenuItem
                        active={fontSize === 'extra-large'}
                        onClick={() => setFontSize('extra-large')}
                    >
                        Extra Large Size
                    </MenuItem>

                    <MenuHeader>Font Family</MenuHeader>
                    <MenuItem
                        active={fontFamily === 'default'}
                        onClick={() => setFontFamily('default')}
                    >
                        Default Font
                    </MenuItem>
                    <MenuItem
                        active={fontFamily === 'dyslexic'}
                        onClick={() => setFontFamily('dyslexic')}
                    >
                        Dyslexia-Friendly Font
                    </MenuItem>
                    <MenuItem
                        active={fontFamily === 'monospace'}
                        onClick={() => setFontFamily('monospace')}
                    >
                        Monospace Font
                    </MenuItem>

                    <MenuHeader>Display</MenuHeader>
                    <MenuItem
                        active={invertColors}
                        onClick={() => setInvertColors(!invertColors)}
                    >
                        <Icon name={invertColors ? 'check square outline' : 'square outline'} />
                        High Contrast Mode
                    </MenuItem>
                </Menu>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                </div>
            </Modal.Content>
        </Modal>
        <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
            <Icon onClick={() => setIsOpen(true)} role="button" tabIndex={0} aria-label="Open accessibility tools" name="universal access" circular color="blue"  size="big" content="Accessibility Tools" />
        </motion.div>
        </motion.div>
    )
}