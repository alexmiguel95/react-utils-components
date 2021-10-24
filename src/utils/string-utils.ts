const stringUtils = () => {
    // Cell or Landline
    const phoneMask = (phone?: string) => {
        if (phone == null) {
            return '';
        }

        phone = phone.replace(/\D/g, '');
        phone = phone.replace(/^(\d{2})(\d)/g, '($1) $2');
        return phone.replace(/(\d)(\d{4})$/, '$1-$2');
    };

    // Cell phone with digit 9
    const cellMask = (phone?: string) => {
        if (phone == null) {
            return '';
        }

        phone = phone.replace(/\D/g, '');
        return phone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g, '($1) $2 $3-$4');
    };

    const zipCodeMask = (value: string) => {
        if (value == null) {
            return '';
        }

        value = value.replace(/\D/g, '');
        return value.replace(/(.{5})(\d)/, '$1-$2');
    };

    return {
        phoneMask,
        cellMask,
        zipCodeMask,
    };
};

export default stringUtils;
