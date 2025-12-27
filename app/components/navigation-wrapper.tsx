import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Navigation from "./Navigation";

export default async function NavigationWrapper() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    console.log("Session in wrapper:", session);
    return <Navigation session={session} />;
}