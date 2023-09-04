import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthIcon() {    
    const { data: session } = useSession();
    console.log({ session });
  
    return (
        <div>
            {session?.user ? (
                <>
                    <p className="text-sky-600"> {session.user.name}</p>
                    <button className="text-red-500" onClick={() => signOut()}>
                        Sign Out
                    </button>
                </>
            ) : (
                <button className="text-green-600" onClick={() => signIn()}>
                    Log In
                </button>
            )}
        </div>
    )
}