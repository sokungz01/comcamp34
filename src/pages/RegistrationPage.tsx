import { ConsentForm } from '@/components/registrationForm/ConsentForm';
import UploadFilesForm from '@/components/registrationForm/UploadFilesForm';
import { Link } from 'react-router-dom';
export const RegistrationPage = () => {
    return(
        <>
           <div className="flex">
                <div className="m-auto">
                    <p className="mb-3 text-xl">Welcome to Registration Page</p>
                    <Link to="/" className="bg-blue-500 rounded-full px-3 py-2 text-white">
                        <button>Home</button>
                    </Link>
                {/*<ConsentForm/>*/}
                <UploadFilesForm/>
                </div>
            </div>
        </>
    );
}