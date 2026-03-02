import React from "react";
import { Button, Menu, MenuItem, MenuHeader, Popup } from "semantic-ui-react";

export const A11y: React.FC = () => (
    <>
    <Button content="Skip to main content" />
    <Popup content="Accessibility Tools" trigger={<Button content="Accessibility Tools" />} position="bottom left">
    <Menu vertical>
        <MenuHeader content="Accessibility Tools" />
        <MenuItem name="home" />
    </Menu>
    </Popup>
    </>
)