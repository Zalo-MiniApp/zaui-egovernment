import React, { FC, forwardRef } from "react";
import ReactDatePicker, {
    ReactDatePickerProps,
    ReactDatePickerCustomHeaderProps,
    registerLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";
import vi from "date-fns/locale/vi";
import { Button, Icon } from "zmp-ui";
import "styled-components/macro";

registerLocale("vi", vi);

const DatePickerWrapperStyles = createGlobalStyle`
    .react-datepicker {
        width: 100%;
				border: none;
				font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }
		.react-datepicker__month-container{
			width: 100%;
		}
		.react-datepicker__week,.react-datepicker__day-names{
			display: flex;
			justify-content: space-between;

		}
		.react-datepicker__day-name,.react-datepicker__day{
			width: 2.5rem;
			line-height: 2.5rem;
			text-align: center;
			vertical-align: middle;
			position: relative;
		
		}
		.react-datepicker__day--keyboard-selected,.react-datepicker__day--keyboard-selected:hover,.react-datepicker__day--selected,.react-datepicker__day--selected:hover{
			${tw`bg-main rounded-2xl text-white`}
		}
		.react-datepicker__header {
			${tw`bg-white border-b-0 `}
		}
		.react-datepicker__current-month{
			${tw`border-divider_01 border-t border-b py-4`}
		}
		.react-datepicker__day-names{
			.react-datepicker__day-name{
				${tw`text-[#666666] font-medium`}
			}
		}
		.react-datepicker__navigation{
			top: 1.5rem;
		}
		.react-datepicker__navigation:hover .react-datepicker__navigation-icon::before,.react-datepicker__navigation-icon::before{
			width: 12px;
			height: 12px;
			border-width: 2px 2px 0 0;
			${tw`border-main`}
		}
		.react-datepicker__custom-header{
			${tw` flex flex-row w-full items-center border-divider_01 border-t border-b`}
			&--button{
				${tw`bg-transparent hover:bg-transparent focus:bg-transparent text-main`}
				&.zaui-btn-disabled{
					${tw`!bg-transparent`}
				}
			}

			&--selected-month{
				${tw`flex-1 text-text_1 text-base font-medium`}
			}
		}
		.react-datepicker__day--disabled{
			color: #E0DEDE;
		}
`;

const DatePicker: FC<ReactDatePickerProps> = forwardRef(props => {
    const renderCustomHeader = (
        headerProps: ReactDatePickerCustomHeaderProps,
    ) => {
        const {
            monthDate,
            increaseMonth,
            decreaseMonth,
            nextMonthButtonDisabled,
            prevMonthButtonDisabled,
        } = headerProps;

        const month = monthDate.getMonth();
        const year = monthDate.getFullYear();

        const headerText = `Tháng ${month + 1} - ${year}`;

        return (
            <div className="react-datepicker__custom-header">
                <Button
                    className="react-datepicker__custom-header--button"
                    disabled={prevMonthButtonDisabled}
                    onClick={decreaseMonth}
                    icon={<Icon icon="zi-chevron-left" />}
                />
                <div className="react-datepicker__custom-header--selected-month">
                    {headerText}
                </div>
                <Button
                    className="react-datepicker__custom-header--button"
                    disabled={nextMonthButtonDisabled}
                    onClick={increaseMonth}
                    icon={<Icon icon="zi-chevron-right" />}
                />
            </div>
        );
    };

    return (
        <>
            <DatePickerWrapperStyles />
            <ReactDatePicker
                customInput="calender"
                locale="vi"
                renderCustomHeader={renderCustomHeader}
                {...props}
            />
        </>
    );
});

export default DatePicker;
