import React, { useState } from "react";
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
    return (
        <motion.div  style={{ position: "fixed", bottom: 10, left: 10, padding: "10px", zIndex: 1000 }}>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} size="small" role="modal" aria-modal="true" aria-labelledby="a11y-modal-header">
            <Modal.Header>Accessibility Tools <Button style={{ float: "right" }} icon="x" onClick={() => setIsOpen(false)} /></Modal.Header>
            <Modal.Content>
                <p>Here you can find various accessibility tools to enhance your browsing experience.</p>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
            </Modal.Content>
        </Modal>
        <motion.div>
            <a onClick={() => setIsOpen(true)} role="button" tabIndex={0} aria-label="Open accessibility tools">
                <Icon name="universal access" circular color="blue"  size="huge" content="Accessibility Tools" />
            </a>
        </motion.div>
        </motion.div>
    )
}