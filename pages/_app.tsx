import { AppProps } from "next/app";

import "./../src/assets/styles/color/_color.scss";
import "./../src/assets/styles/index.scss";

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
