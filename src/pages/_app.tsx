import "reflect-metadata";
import "flowbite";
import "@/styles/globals.css";

import type {AppProps} from "next/app";
import type {Session} from "next-auth";
import {SessionProvider} from "next-auth/react";
import type {ReactElement} from "react";

import Layout from "@/components/Layout";

export default function App({
    Component, pageProps: {session, ...pageProps},
}: AppProps): ReactElement {
    return <SessionProvider session={session as Session}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </SessionProvider>;
}
