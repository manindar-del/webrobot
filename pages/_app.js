import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { pageview } from "../lib/gtag";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { Provider } from "react-redux";
import ToastifyProvider from "../ui/toastify/ToastifyProvider";
import "react-datepicker/dist/react-datepicker.css";
import App from "next/app";
import nookies from "nookies";
import { store } from "../redux-toolkit/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { setContext } from "../api/axiosInstance";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnMount:false,
      refetchOnWindowFocus: false,
      staleTime: 10000,
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <GoogleOAuthProvider clientId="3198642219-8fghcdvcg3fgd712oopr18337oijtr9t.apps.googleusercontent.com">
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ToastifyProvider>
            <Component {...pageProps} />
          </ToastifyProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
    </GoogleOAuthProvider>
  );
}

MyApp.getInitialProps = async (context) => {
  setContext(context.ctx);
  // // const client = initializeApollo({ headers: context.ctx.req?.headers });
  // const { data } = await client.query({
  //   query: CURRENT_USER_QUERY,
  // });
  // // resetServerContext();
  const appProps = await App.getInitialProps(context);
  // return { user: data?.authenticatedItem, ...appProps };
  const cookies = nookies.get(context.ctx);

  let hasToken = false;
  let user = null;

  if (cookies?.token?.length) {
    hasToken = true;
  }

  if (cookies?.user?.length) {
    user = JSON.parse(cookies?.user);
  }

  return { ...appProps, hasToken, user };
};

export default MyApp;
