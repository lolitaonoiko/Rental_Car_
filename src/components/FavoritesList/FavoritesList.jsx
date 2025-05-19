import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import s from './FavoritesList.module.css';

import { selectFavorites } from '../../redux/cars/selectors';

const FavoritesList = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleOpenDateils = id => {
        navigate(`/catalog/${id}`);
        setAnchorEl(null);
    };

    const favorites = useSelector(selectFavorites);

    return (
        <>
            <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} className={s.btnFav}>
                <svg width="16" height="16" className={s.favIcon}>
                    <use href="/public/icons/sprite.svg#icon-like-active"></use>
                </svg>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        disablePadding: true,
                        autoFocus: false,
                    },
                }}
            >
                {favorites.length === 0 && (
                    <MenuItem className={s.menuItem} onClick={handleClose}>
                        You have not added any offers to your favorites yet
                    </MenuItem>
                )}
                {favorites.map(item => (
                    <MenuItem key={item.id} onClick={() => handleOpenDateils(item.id)}>
                        <p className={s.menuItem}>
                            {item.brand} {item.model}, {item.year} - <span className={s.spanPrice}>${item.rentalPrice}</span>
                        </p>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default FavoritesList;
