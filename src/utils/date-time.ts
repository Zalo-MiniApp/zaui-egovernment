import { padWithLeadingZeros } from "./string";

export const formatDate = (date: Date, format = "mm/dd/yyyy"): string => {
    if (!date) {
        return "";
    }

    const day: number = date.getDate();
    const month: number = date.getMonth() + 1;
    const year = date.getFullYear();

    const tokens = {
        yyyy: year,
        yy: String(year).substring(2),
        mm: padWithLeadingZeros(Number(month), 2),
        m: month,

        dd: padWithLeadingZeros(Number(day), 2),
        d: day,
    };

    const regexp = new RegExp(
        Object.keys(tokens)
            .map(t => `(${t})`)
            .join("|"),
        "g",
    );

    return format.replace(regexp, token => {
        if (token in tokens) return tokens[token];
        return token;
    });
};

export const formatDateTime = (date?: Date): string => {
    if (!date) {
        return "";
    }
    let day: number | string = date.getDate();
    let month: number | string = date.getMonth() + 1;
    const year = date.getFullYear();

    const hh =
        date.getHours() < 10
            ? `0${date.getHours()}`
            : date.getHours().toString();
    const MM =
        date.getMinutes() < 10
            ? `0${date.getMinutes()}`
            : date.getMinutes().toString();

    if (day < 10) {
        day = `0${day}`;
    }
    if (month < 10) {
        month = `0${month}`;
    }

    return `${hh}:${MM} - ${day}/${month}/${year}`;
};
