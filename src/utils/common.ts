export const isEmptyObject = (obj: { [key: string]: any }): boolean => {
    return (
        obj &&
        Object.keys(obj).length === 0 &&
        Object.getPrototypeOf(obj) === Object.prototype
    );
};
