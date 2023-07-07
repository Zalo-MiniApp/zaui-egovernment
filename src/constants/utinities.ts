import * as Icon from "@components/icons";
import { Utinity } from "@dts";
import SocialInsuranceLogo from "@assets/logo-social-insurance.png";
import Youtube from "@assets/youtube.png";
import Location from "@assets/location.png";
import Identification from "@assets/id-card.png";
import InternalPhone from "@assets/internal-phone.png";
import SocialInsurranceNumber from "@assets/social-insurance-number.png";
import Benefit from "@assets/benefits.png";
import Renew from "@assets/files.png";

export const APP_UTINITIES: Array<Utinity> = [
    {
        key: "create-schedule-appointment",
        label: "Đặt lịch làm việc",
        icon: Icon.CalendarIcon,
        path: "/create-schedule-appointment",
    },
    {
        key: "info",
        label: "Thông tin - hướng dẫn",
        icon: Icon.BookIcon,
        path: "/information-guide",
    },
    {
        key: "feedback",
        label: "Góp ý - phản ánh",
        icon: Icon.PenIcon,
        path: "/feedbacks",
    },
    {
        key: "goverment",
        label: "Cổng dịch vụ công quốc gia",
        icon: Icon.GlobeIcon,
        link: "https://dichvucong.gov.vn/",
    },
    {
        key: "file-search",
        label: "Tra cứu hồ sơ",
        icon: Icon.SearchIcon,
        path: "/search",
    },
];

export const CONTACTS: Array<Utinity> = [
    {
        key: "social-insurance",
        label: "BHXH TP Thủ Đức",
        link: "",
        iconSrc: SocialInsuranceLogo,
    },
    {
        key: "si-number",
        label: "Số tài khoản Thu BHXH",
        link: "",
        iconSrc: SocialInsurranceNumber,
    },
    {
        key: "internal-number",
        label: "Số nội bộ tổ nghiệp vụ",
        link: "",
        iconSrc: InternalPhone,
    },
    {
        key: "department",
        label: "Điểm thu BHXH, BHYT",
        link: "",
        iconSrc: Location,
    },
    {
        key: "update-identification",
        label: "Cập nhật Mã định danh / CCCD",
        link: "",
        iconSrc: Identification,
    },
    {
        key: "youtube",
        label: "Youtube",
        link: "",
        iconSrc: Youtube,
    },
];

export const PROCEDURES: Array<Utinity> = [
    {
        key: "renew",
        label: "Gia hạn thẻ BHYT trực tuyến",
        link: "",
        iconSrc: Renew,
    },
    {
        key: "benefit",
        label: "Các chế độ BHXH",
        link: "",
        iconSrc: Benefit,
    },
];
