const isObject = (val: any) => val === null ?
    false :
    typeof val === 'object'

export const parseToArray = (obj: any): any[] => {
    const arr = []
    for (const key in obj) {
        const value = obj[key];
        if (value instanceof Date) arr.push(value.toString());
        else if (isObject(value))
            arr.push(...parseToArray(value));
        else if (Array.isArray(value))
            arr.push(...value)
        else arr.push(value);
    }
    return arr;
}