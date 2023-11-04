import "@/styles/globals.css";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import RootLayout from "@/components/Layout/RootLayout";
import type { AppProps } from "next/app";
import type { Page } from "../interfaces/page";

// this should give a better typing
type Props = AppProps & {
  Component: Page;
};

// Define your App component
const App = ({ Component, pageProps }: Props) => {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps?.session}>
        <RootLayout>
          <Toaster />
          <Component {...pageProps} />
        </RootLayout>
      </SessionProvider>
    </Provider>
  );
};

export default App;
