import clsx from 'clsx';
import s from './CarImage.module.css';

const CarImage = ({ size = 'small', src, alt }) => {
    const buildImgClass = size => {
        return clsx(s.smallImg, size === 'large' && s.largeImg);
    };

    return (
        <>
            <img src={src} alt={alt} className={buildImgClass(size)} />
        </>
    );
};

export default CarImage;
