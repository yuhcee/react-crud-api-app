const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.substring(1);
};

export { capitalizeFirstLetter };
