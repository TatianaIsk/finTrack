import { AppProps } from "next/app";

import "./../src/assets/styles/color/_color.scss";
import "./../src/assets/styles/index.scss";
import { sanFrancisco, proximaNova } from "assets/fonts/fonts";

import clsx from "clsx";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} className={clsx(sanFrancisco.variable, proximaNova.variable)} />
);

export default App;
