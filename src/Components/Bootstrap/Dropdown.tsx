import type { FC } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

interface DropdownProps {
    toggle: string
    logout: () => void
    goToProfile: () => void
}

const DropdownEl:FC<DropdownProps> = ({toggle , logout , goToProfile}) => {
    return (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            {toggle}
        </Dropdown.Toggle>

        <Dropdown.Menu>

            <Dropdown.Item onClick={goToProfile}>
                Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={logout}>
                Logout
            </Dropdown.Item>

        </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownEl;