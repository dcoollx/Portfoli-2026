import React from "react";
import { Button, Menu, MenuItem, MenuHeader, Popup } from "semantic-ui-react";
import { GlassCard } from "./GlassCard";

export const A11y: React.FC = () => {
    return (
    <>
    <Button content="Skip to main content" />
    <Popup content="Accessibility Tools" trigger={<Button content="Accessibility Tools" />} position="bottom left">
    <Menu vertical>
        <MenuHeader content="Accessibility Tools" />
        <MenuItem name="home" />
    </Menu>
    </Popup>
    <GlassCard style={{ position: "fixed", bottom: 10, right: 10, padding: "10px", zIndex: 1000 }}>
    <button onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>Back to Top</button>
    </GlassCard>
    </>
)}