import FileUploaderComponent from '@/components/FileUploaderComponent';
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
                    <FileUploaderComponent 
                        name="hello"
                        label="สำเนาบัตรประจำตัวประชาชน หรือ สำเนาบัตรนักเรียน"
                        fileType="pdf"
                    />
                    <FileUploaderComponent 
                        name="hello"
                        label="ภาพถ่ายอิสระของผู้สมัครที่เห็นใบหน้าชัดเจน และมีขนาดไม่ต่ำกว่า 4 x 6 นิ้ว "
                        fileType="image"
                    />
                </div>
            </div>
        </>
    );
}