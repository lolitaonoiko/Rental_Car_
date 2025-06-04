import { useMediaQuery } from 'react-responsive';

const useMedia = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    return { isMobile, isTablet, isDesktop };
};

export default useMedia;
