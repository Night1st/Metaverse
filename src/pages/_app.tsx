import "@/styles/globals.css";
import "@/styles/business-color.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Head from "next/head";
import { Roboto } from 'next/font/google'

const interText = Roboto({ subsets: ["vietnamese"], display: 'swap', weight: ['400', '500', '700', '300', '900'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1 },
  },
});
const ConfigLayout = ({
  children,
  getLayout,
}: {
  children: React.ReactElement;
  getLayout: (page: ReactElement) => React.ReactNode;
}) => {
  return <>{getLayout(children)}</>;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <LayoutWebsite>{page}</LayoutWebsite>);
  return (
    <main className={interText.className}>
      <Head>
        <title>Metaverse</title>
        <meta name="description" content="Metaverse" />
        <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href=""
        />
        <link
          rel="apple-touch-icon"
          href=""
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <ConfigLayout getLayout={getLayout}>
          <Component {...pageProps} />
        </ConfigLayout>

      </QueryClientProvider >
    </main>
  );
}
