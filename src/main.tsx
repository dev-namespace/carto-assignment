import ReactDOM from "react-dom/client";
import App from "app/App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { setDefaultCredentials } from "@deck.gl/carto/typed";
import { store } from "app/store";
import { Provider } from "react-redux";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN

setDefaultCredentials({ accessToken, apiBaseUrl });

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>,
);
