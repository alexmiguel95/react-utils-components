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

    // Credit Card
   const maskCreditCardNumber = (value: string) => {
        value = value.replace(/\D/g,"");
        value = value.replace(/(\d{4})/g, "$1 ");
        value = value.substring(0, 19);
      
        return value;
      };
      
    const maskCreditCardValidity = (value: string) => {
        value = value.replace(/\D/g,"");
        value = value.replace(/(\d{2})/g, "$1/");
        value = value.substring(0, 5);
      
        return value;
      };
      
    const maskCardVerificationValue = (value: string) => {
        value = value.replace(/\D/g,"");
        value = value.substring(0, 3);
      
        return value;
      };

    return {
        phoneMask,
        cellMask,
        zipCodeMask,
        maskCreditCardNumber,
        maskCreditCardValidity,
        maskCardVerificationValue
    };
};

export default stringUtils;
