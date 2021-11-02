import './App.css';
import Toast from "./components/Toast";
import toastUtils from './utils/toast-utils';

function App() {
    return (
        <div className="App">
            <Toast />
            <button onClick={() => toastUtils.emitSuccessToast("Sucesso!")}>Notify success!</button>
            <button onClick={() => toastUtils.emitErrorToast("Erro!")}>Notify error!</button>
        </div>
    );
}

export default App;
