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

    const validateCNPJ = (value?: string) => {
        value = value?.replace(/[^\d]+/g,'');

        if (isEmpty(value)) {
            return false;
        }

        if (
            value === "00000000000000" || 
            value === "11111111111111" || 
            value === "22222222222222" || 
            value === "33333333333333" || 
            value === "44444444444444" || 
            value === "55555555555555" || 
            value === "66666666666666" || 
            value === "77777777777777" || 
            value === "88888888888888" || 
            value === "99999999999999"
        ) {
            return false;
        }

        // Save an array with all the digits of the value
        const match = value!.toString().match(/\d/g)
        const numbers = Array.isArray(match) ? match.map(Number) : []

        if (numbers.length !== 14) {
            return false
        }

        // Validator calculation
        const calc = (x: number) => {
            const slice = numbers.slice(0, x)
            let factor = x - 7
            let sum = 0

            for (let i = x; i >= 1; i--) {
                const n = slice[x - i]
                sum += n * factor--
                if (factor < 2) factor = 9
            }

            const result = 11 - (sum % 11);

            return result > 9 ? 0 : result;
        }

        // Separate the last 2 digits of checkers
        const digits = numbers.slice(12);
  
        const digit0 = calc(12);

        if (digit0 !== digits[0]) {
            return false;
        }

        const digit1 = calc(13);

        return digit1 === digits[1];
    };

    return {
        phoneMask,
        cellMask,
        zipCodeMask,
        maskCreditCardNumber,
        maskCreditCardValidity,
        maskCardVerificationValue,
        validateCNPJ
    };
};

export default stringUtils;
