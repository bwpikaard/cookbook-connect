import {
    type PropsWithChildren, type ReactElement,
} from "react";

import NavBar from "./NavBar";

export default function Layout({children}: PropsWithChildren): ReactElement {
    return (
        <main className="bg-greyish">
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <div className="container mx-auto flex-grow py-2 px-2 md:py-8">
                    {children}
                </div>
            </div>
        </main>
    );
}
