import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PiTrashSimpleLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectFavorites } from '../../redux/cars/selectors';
import { addFavCar, deleteFavCar } from '../../redux/cars/slice';

import s from './FavoritesList.module.css';

const FavoritesList = ({ onClick }) => {
    const favorites = useSelector(selectFavorites);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleOpenDetailsOnCLick = id => {
        onClick();
        navigate(`/catalog/${id}`);
        setAnchorEl(null);
    };
    const handleDeleteOnClick = car => {
        dispatch(deleteFavCar(car));
    };

    useEffect(() => {
        const storageFavList = JSON.parse(localStorage.getItem('favorites'));
        if (Array.isArray(storageFavList)) {
            storageFavList.forEach(car => dispatch(addFavCar(car)));
        }
    }, [dispatch]);

    return (
        <>
            <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} className={s.btnFav}>
                <svg width="16" height="16" className={s.favIcon}>
                    <use href="/icons/sprite.svg#icon-like-active"></use>
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
                        You have not added any cars to your favorites yet
                    </MenuItem>
                )}
                {favorites &&
                    favorites.map(item => (
                        <MenuItem key={item.id}>
                            <div className={s.favMenu}>
                                <p className={s.menuItem} onClick={() => handleOpenDetailsOnCLick(item.id)}>
                                    {item.brand} {item.model}, {item.year} - <span className={s.spanPrice}>${item.rentalPrice}</span>
                                </p>
                                <PiTrashSimpleLight className={s.deleteIcon} onClick={() => handleDeleteOnClick(item)} />
                            </div>
                        </MenuItem>
                    ))}
            </Menu>
        </>
    );
};

export default FavoritesList;
