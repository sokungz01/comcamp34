import { useState } from "react";
import FileUploaderComponent from "../FileUploaderComponent";

const requireFilesData = [
    {
        id:1,
        name:"ภาพถ่ายอิสระของผู้สมัครที่เห็นใบหน้าชัดเจน",
        label:"ภาพถ่ายอิสระของผู้สมัครที่เห็นใบหน้าชัดเจน",
        fileType:"image",
        path:""
    },
    {
        id:2,
        name:"หนังสือขออนุญาตผู้ปกครอง",
        label:"หนังสือขออนุญาตผู้ปกครอง",
        fileType:"pdf",
        path:""
    },
    {
        id:3,
        name:"สำเนาบัตรประจำตัวประชาชนหรือสำเนาบัตรนักเรียนของผู้สมัคร",
        label:"สำเนาบัตรประจำตัวประชาชนหรือสำเนาบัตรนักเรียนของผู้สมัคร",
        fileType:"pdf",
        path:""
    },
    {
        id:4,
        name:"เอกสารรับรองความเป็นนักเรียนหรือเอกสารรับรองผลการศึกษา (ปพ.7)",
        label:"เอกสารรับรองความเป็นนักเรียนหรือเอกสารรับรองผลการศึกษา (ปพ.7)",
        fileType:"pdf",
        path:""
    },
    {
        id:5,
        name:"ระเบียนแสดงผลการศึกษาของระดับชั้นมัธยมศึกษาตอนปลาย (ปพ.1) หรือหนังสือแสดงผลการเรียนเฉลี่ย",
        label:"ระเบียนแสดงผลการศึกษาของระดับชั้นมัธยมศึกษาตอนปลาย (ปพ.1) หรือหนังสือแสดงผลการเรียนเฉลี่ย",
        fileType:"pdf",
        path:""
    }
]


const UploadFilesForm=()=>{
    return(
        <div className="flex flex-col justify-center items-center h-full">
            <div className="font-bai-jamjuree font-bold tracking-2 text-2xl">  {/* teko-font not working */}
                อัปโหลดเอกสารที่ใช้สมัคร
            </div>
            <div className="font-bai-jamjuree flex flex-col">
                {requireFilesData.map(item=>(
                    <div className="my-2">
                        <FileUploaderComponent 
                        name={item.name}
                        label={item.label}
                        fileType={item.fileType}
                        path={item.path}
                />
                    </div>
                ))}
            </div>
            
        </div>

    )
}
export default UploadFilesForm;