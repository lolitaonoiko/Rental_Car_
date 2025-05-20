import { nanoid } from 'nanoid';

export const normalizeList = (data, options = {}) => {
    const { sourceObject = null, isConfig = false, defaultIcon = 'icon-check-circle' } = options;

    if (isConfig && sourceObject) {
        return data
            .filter(item => sourceObject[item.key])
            .map(item => ({
                id: nanoid(),
                property: `${item.label}: ${sourceObject[item.key]}`,
                icon: item.icon || defaultIcon,
            }));
    }

    return data.map(item => ({
        id: nanoid(),
        property: typeof item === 'string' ? item : item?.property || '',
        icon: defaultIcon,
    }));
};
