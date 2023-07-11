import React, { useState } from "react";
import { Box, Icon, Text } from "zmp-ui";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";
import "styled-components/macro";
import { Button, DatePicker, Input, TextArea } from "@components";
import { useStore } from "@store";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "@utils/string";

export const CreateScheduleForm = () => {
    const [creatingSchedule, createSchedule] = useStore(state => [
        state.creatingSchedule,
        state.createSchedule,
    ]);

    const [dateValue, setDateValue] = useState<Date>(new Date());
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = data => {
        const { fullName, phoneNumber, content } = data;

        createSchedule({
            fullName,
            phoneNumber,
            content,
            date: dateValue,
        });
    };

    const getFieldName = (field: string) => {
        switch (field) {
            case "fullName":
                return "Họ và tên";
            case "phoneNumber":
                return "Số điện thoại";
            case "content":
                return "Nội dung";
            default:
                return "";
        }
    };

    const getErrorMessage = (field: string) => {
        if (errors[field]) {
            const name = getFieldName(field);
            if (errors[field]?.type === "required")
                return `${name} không được để trống`;
            return `${name} không hợp lệ`;
        }
        return "";
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box tw="bg-white">
                <Box p={4}>
                    <Text tw="text-text_2 text-center">
                        Vui lòng chọn ngày làm việc mong muốn và điền đầy đủ
                        thông tin cá nhân
                    </Text>
                </Box>

                <Box px={3}>
                    <DatePicker
                        inline
                        minDate={new Date()}
                        onChange={date => {
                            if (date) {
                                setDateValue(date);
                            }
                        }}
                        selected={dateValue}
                        onMonthChange={date => {
                            if (date) {
                                date.setHours(0, 0, 0, 0);
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                if (date < today) {
                                    setDateValue(today);
                                } else {
                                    setDateValue(date);
                                }
                            }
                        }}
                    />
                </Box>
            </Box>
            <Box p={4} mt={4} tw="bg-white">
                <Box>
                    <Input
                        label="Họ và Tên*"
                        errorText={getErrorMessage("fullName")}
                        placeholder="Nhập Họ và Tên"
                        status={errors?.fullName ? "error" : "default"}
                        {...register("fullName", { required: true })}
                    />
                </Box>
                <Box mt={4}>
                    <Input
                        label="Số điện thoại*"
                        errorText={getErrorMessage("phoneNumber")}
                        placeholder="Nhập số điện thoại"
                        status={errors?.phoneNumber ? "error" : "default"}
                        {...register("phoneNumber", {
                            required: true,
                            validate: value => isValidPhoneNumber(value),
                        })}
                    />
                </Box>
                <Box mt={4}>
                    <TextArea
                        label="Nội dung làm việc*"
                        errorText={getErrorMessage("content")}
                        status={errors?.content ? "error" : "default"}
                        placeholder="Nhập nội dung làm việc"
                        {...register("content", { required: true })}
                    />
                </Box>
            </Box>
            <Box p={4} mt={4} tw="bg-white">
                <Button
                    htmlType="submit"
                    fullWidth
                    suffixIcon={<Icon icon="zi-chevron-right" />}
                    loading={creatingSchedule}
                >
                    Nhận số thứ tự
                </Button>
            </Box>
        </form>
    );
};
