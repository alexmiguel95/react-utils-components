import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const StyledToast = styled(ToastContainer)`
    .Toastify__toast--info {
        background: 'rgb(51, 102, 255)';
    }

    .Toastify__toast--success {
        background: black;
    }

    .Toastify__toast--warning {
        background: 'rgb(254, 255, 20)';
    }

    .Toastify__toast--error {
        background: 'rgb(255, 102, 102)';
    }
`;

const Toast = () => {
    return <StyledToast />;
};

export default Toast;
