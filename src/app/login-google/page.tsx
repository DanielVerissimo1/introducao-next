
import { GoogleLogin } from "@react-oauth/google"
import axios from "axios"
import { useRouter } from "next/navigation";
export default function LoginGooglePage() {
    const router = useRouter();
    
    const handleSucess = async (CredentialResponse: any) =>{
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
                {
                    idToken: CredentialResponse.credential
                }
            );
            const jwt_token = response.data.access_token;
            localStorage.setItem("access_token", jwt_token)
            router.push('/map')


        } catch (err) {
            console.error("Erro no login com google: ",err)
        }
    }
    return(
        <main className="flex h-screen items-center justify-center">
            <div className="p-4 rounded shadow bg-white">
                <h1 className="font-bold">LOGIN</h1>
                <GoogleLogin
                    onSuccess={handleSucess}
                    onError={()=>{console.log("erro ao autenticar com google")}}
                />
            </div>
        </main>
    )
}