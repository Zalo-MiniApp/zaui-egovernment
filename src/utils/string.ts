export const getAvatarName = ({
    name,
    length = 2,
}: {
    name: string;
    length?: number;
}): string =>
    name
        ?.split(" ")
        .map(str => (str ? str[0].toUpperCase() : ""))
        .join("")
        .slice(0, length);

/*
  generatePath function from  @remix-run/router
 */
export const generatePath = (
    originalPath: string,
    params: { [key: string]: any } = {},
): string => {
    let path = originalPath;

    if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        path = path.replace(/\*$/, "/*");
    }

    return path
        .replace(/^:(\w+)(\??)/g, (_, key, optional) => {
            const param = params[key];

            if (optional === "?") {
                return param == null ? "" : param;
            }

            return param;
        })
        .replace(/\/:(\w+)(\??)/g, (_, key, optional) => {
            const param = params[key];

            if (optional === "?") {
                return param == null ? "" : `/${param}`;
            }

            return `/${param}`;
        }) // Remove any optional markers from optional static segments
        .replace(/\?/g, "")
        .replace(/(\/?)\*/, (_, prefix, __, str) => {
            const star = "*";

            if (params[star] == null) {
                // If no splat was provided, trim the trailing slash _unless_ it's
                // the entire path
                return str === "/*" ? "/" : "";
            } // Apply the splat

            return `${prefix}${params[star]}`;
        });
};

/**
 * Add leading zero number
 */
export const padWithLeadingZeros = (num: number, totalLength: number) =>
    String(num).padStart(totalLength, "0");

/**
 * Validate phoneNumber
 */
export const isValidPhoneNumber = (number: string) => {
    const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (number.match(phoneno)) {
        return true;
    }
    return false;
};
