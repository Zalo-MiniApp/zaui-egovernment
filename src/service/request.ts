import { UNAUTHORIZED } from "@constants";
import { BASE_URL } from "@constants/common";
import { ResData } from "@dts";
import { useStore as store } from "@store";
import { getToken } from "./zalo";

interface FetchOptions {
    useAuth?: boolean;
    baseUrl?: string;
    customHeader?: object;
}

export async function request<T>(
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    url: string,
    data?: any,
    options?: FetchOptions,
    retryCount = 0,
): Promise<T> {
    const { useAuth = true, baseUrl = BASE_URL } = options || {};
    const headers = new Headers();
    const { token } = store.getState();

    if (useAuth && token) {
        headers.append("Authorization", `Bearer ${token}`);
    }
    if (options && options.customHeader) {
        const { customHeader } = options;
        Object.keys(customHeader).forEach(key => {
            headers.append(key, `${customHeader[key]}`);
        });
    }
    const requestUrl = new URL(url, baseUrl);
    const requestOptions: { [key: string]: any } = {
        method,
        headers,
    };

    if (method === "GET") {
        requestUrl.search = new URLSearchParams(data).toString();
    } else {
        headers.append("Content-Type", "application/json");
        requestOptions.body = JSON.stringify(data);
    }
    const response = await fetch(requestUrl.toString(), {
        ...requestOptions,
    });

    const resData = (await response.json()) as ResData<T>;
    if (resData.err === UNAUTHORIZED && retryCount === 0 && useAuth && token) {
        try {
            const accessToken = await getToken();
            store.setState(state => ({ ...state, token: accessToken }));
            // return request(method, url, data, options, retryCount + 1);
        } catch (err) {
            throw new Error((err as any).message);
        }
    }
    if (resData.err || !resData.data) {
        // eslint-disable-next-line no-throw-literal
        throw { code: resData.err, message: resData.message };
    }
    return resData.data;
}
