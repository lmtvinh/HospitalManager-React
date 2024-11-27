import React from 'react';
import { Menu, MenuItem, IconButton, Typography, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

export default function UserMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // 
        handleMenuClose();
    }

    return (
        <div>
            <IconButton
                onClick={handleMenuOpen}
                color='inherit'
                size='large'
                aria-controls='user-menu'
                aria-haspopup='true'
            >
                <AccountCircleIcon fontSize='large' />
            </IconButton>

            <Menu
                id='user-menu'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                    style: { width: 250 },
                }}
            >
                <MenuItem disabled>
                    <div>
                        <Typography variant='subtitle1' fontWeight="bold" className='text-black'>
                            abc
                        </Typography>
                        <Link
                            className='text-decoration-none text-black'
                            to="/patient-detail"
                            state={{ patientId: 1 }}
                        >
                            Chỉnh sửa thông tin
                        </Link>
                    </div>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <LogoutIcon sx={{ marginRight: 1 }} />
                    Đăng Xuất
                </MenuItem>
            </Menu>
        </div>
    )
}
