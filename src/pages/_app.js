import "@/styles/globals.css";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

export default function App({ Component, pageProps }) {
  const DynamicNavbar = dynamic(() => import("@/components/UI/Navbar"), {
    ssr: false,
  });

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <SessionProvider session={pageProps?.session}>
        <>
          <Toaster />
          <DynamicNavbar />
          <Component {...pageProps} />
        </>
      </SessionProvider>
    </Provider>
  );
}
