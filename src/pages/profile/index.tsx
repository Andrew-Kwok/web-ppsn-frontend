import { signIn, useSession } from "next-auth/react";

export default function Page() {
    const { data: session } = useSession();

    return (
        <pre> {JSON.stringify(session, null, 2)} </pre>
    )
}