import {
    getUserInfo,
    getAccessToken,
    followOA,
    openWebview,
    openMediaPicker,
    saveImageToGallery,
} from "zmp-sdk";
import { User } from "@dts";
import { ImageType } from "zmp-ui/image-viewer";

export const getZaloUserInfo = async (): Promise<User> => {
    try {
        const user = await getUserInfo({ avatarType: "normal" });
        const { userInfo } = user;
        return Promise.resolve(userInfo);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const getToken = async (): Promise<string> => {
    try {
        // "ACCESS_TOKEN" for development, remove it before deploy
        const token = (await getAccessToken({})) || "ACCESS_TOKEN";
        return Promise.resolve(token);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const followOfficialAccount = async ({
    id,
}: {
    id: string;
}): Promise<void> => {
    try {
        await followOA({ id });
        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
};

export const openWebView = async (link: string): Promise<void> => {
    try {
        await openWebview({ url: link });
        return Promise.resolve();
    } catch (err) {
        throw err;
    }
};

export const saveImage = async (img: string): Promise<void> => {
    try {
        await saveImageToGallery({ imageBase64Data: img });
        return Promise.resolve();
    } catch (err) {
        throw err;
    }
};

export interface PickImageParams {
    maxItemSize?: number;
    maxSelectItem?: number;
    serverUploadUrl: string;
}

export interface UploadImageResponse {
    domain: string;
    images: string[];
}

export const pickImages = async (
    params: PickImageParams,
): Promise<(ImageType & { name: string })[]> => {
    try {
        const res = await openMediaPicker({
            type: "photo",
            maxItemSize: params.maxItemSize || 1024 * 1024,
            maxSelectItem: params.maxSelectItem || 1,
            serverUploadUrl: params.serverUploadUrl,
        });
        const { data } = res;
        const result = JSON.parse(data);
        const { domain, images } = result.data as UploadImageResponse;
        const uploadedImgUrls = images.map(img => ({
            src: domain + img,
            name: img,
        }));
        return uploadedImgUrls;
    } catch (err) {
        return Promise.reject(err);
    }
};
