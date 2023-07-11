export const isEmptyObject = (obj: { [key: string]: any }): boolean =>
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype;
