import { CONTACTS } from "@constants";
import React from "react";
import { VerticalUtinities } from "@components";

const data = CONTACTS;
const Contacts = () => {
    return <VerticalUtinities title="Liên hệ" utinities={data} />;
};

export default Contacts;
