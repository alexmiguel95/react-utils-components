import { toast } from 'react-toastify';
import { ReactComponent as SuccessSvg } from '../images/success.svg';

const toastUtils = () => {
    const emitErrorToast = (message: string) => toast.error(message);
    const emitSuccessToast = (message: string) => toast.success(message, { icon: <SuccessSvg /> });
    const emitWarnToast = (message: string) => toast.warn(message);
    const emitInfoToast = (message: string) => toast.info(message);

    return {
        emitErrorToast,
        emitSuccessToast,
        emitWarnToast,
        emitInfoToast,
    };
};

export default toastUtils();
