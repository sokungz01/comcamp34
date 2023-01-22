import { useState } from "react";

const FileUploaderComponent=({
    name,
    label,
    fileType, /// "image or pdf"
    path
}:{
    name:string,
    label?:string,
    fileType?:string,
    path:string
})=>{

    const [file,setFile] = useState<null | undefined>();
    const [isUpload, setIsUpload] = useState<boolean>(false);
    const handleFile=(e:any)=>{
        if (!(e.target instanceof HTMLInputElement)) return;
        const fileName = (e.target.files)[0].name;
        setFile(fileName);
    }
    
    const uploadFile=()=>{
        if(file==null){
            alert("โปรดแนบไฟล์ " + label) 
            return;
        };
        // else if upload submit, call method to store file in firebase storage maybe by format -> "userId_file" in defined path 
        // * waiting for firebase setup 
        setIsUpload(true);
    }
    const deleteFile=()=>{
        if(!isUpload) return;
        // else if delete submit, call method to delete file in firebase storage maybe by format -> "userId_file" in defined path 
        // * waiting for firebase setup 
        setFile(null);
        setIsUpload(false);
    }

    return(
        <>
            <div className="flex flex-col">
                {label ? <p>{label}</p> : <p>{name}</p>}
                <div className="flex justify-between">
                {!isUpload ?<input type="file" name={name} onChange={handleFile} accept={
                    fileType == "pdf" ? "application/pdf": //accept pdf document file
                    fileType == "image" ? "image/jpeg,image/png"://accpet image file only jpg and png
                    "image/jpeg,image/png,application/pdf"/* accept both image and pdf if not pass props or wrong spell file format */}/>
                    : file}
                {!isUpload ? <button onClick={uploadFile}>Upload</button>:<button onClick={deleteFile}>Delete</button>}
                </div>
            </div>
        </>
    )
}
export default FileUploaderComponent;