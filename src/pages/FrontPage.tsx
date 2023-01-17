import { Link } from 'react-router-dom';
export const FrontPage = () => {
    return(
        <>
           <div className="flex h-screen">
                <div className="m-auto text-center">
                    <p className="mb-3 text-xl">Welcome to Landing Page</p>
                    <Link to="/registration" className="bg-blue-500 rounded-full px-3 py-2 text-white">
                        <button>Registration</button>
                    </Link>
                </div>
            </div>
        </>
    );
}