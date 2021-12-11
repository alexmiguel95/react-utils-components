
import dayjs from 'dayjs';
import customParseFormat from 'dayjs';

export const convertDateLocalFormat = (date: string) => {
    if (dayjs(date).isValid()) {
        dayjs.extend(customParseFormat);
        return dayjs(date).format("DD/MM/YYYY");
    }

    return "";
};

