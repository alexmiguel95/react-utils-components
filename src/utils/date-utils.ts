
import dayjs from 'dayjs';
import customParseFormat from 'dayjs';
import 'dayjs/locale/pt-br';

const dateUtils = () => {
    dayjs.locale('pt-br');

    const convertDateLocalFormat = (date: string) => {
        if (dayjs(date).isValid()) {
            dayjs.extend(customParseFormat);
            return dayjs(date).format("DD/MM/YYYY");
        }
    
        return '';
    };

    const getDayOfTheMonth = (date?: string) => {
        if (dayjs(date).isValid()) {
            return dayjs(date).date();
        }
      
        return '';
    };
    
    const getMonthName = (date?: string) => {
        if (dayjs(date).isValid()) {
            return dayjs(date).format('MMMM');
        }
      
        return '';
    };

    return {
        convertDateLocalFormat,
        getDayOfTheMonth,
        getMonthName,
    };
};

export default dateUtils;
