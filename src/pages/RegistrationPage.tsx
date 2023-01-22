import { Link } from 'react-router-dom';
export const RegistrationPage = () => {
    return(
        <>
           <div className="flex h-screen">
                <div className="m-auto text-center">
                    <p className="mb-3 text-xl">Welcome to Registration Page</p>
                    <Link to="/" className="bg-blue-500 rounded-full px-3 py-2 text-white">
                        <button>Home</button>
                    </Link>
                    
                </div>
            </div>
        </>
    );
}