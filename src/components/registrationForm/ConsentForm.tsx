import { useState } from "react";

export const ConsentForm = () => {
   const [acceptPolicy, setAcceptPolicy] = useState<boolean>(false);
   return (
      <div className="font-bai-jamjuree relative h-full flex justify-center items-center my-8">
         <div className="w-2/3 flex flex-col p-5 bg-white bg-opacity-20 rounded-lg ">
            <div className="text-lg font-bold text-base-black text-center mb-5">
               นโยบายข้อมูลส่วนบุคคล
            </div>

            <div className="text-sm bg-white h-96 overflow-y-auto rounded-lg p-6 mb-4">
               <p className="font-semibold">นโยบายข้อมูลส่วนบุคคล</p> <br />
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugit quos quia
               molestiae amet, laboriosam, soluta nulla facilis minus eos necessitatibus sint,
               temporibus perspiciatis fuga sit nobis. Dolorem, facere tempore. Lorem ipsum dolor
               sit amet consectetur adipisicing elit. Error fugit quos quia molestiae amet,
               laboriosam, soluta nulla facilis minus eos necessitatibus sint, temporibus
               perspiciatis fuga sit nobis. Dolorem, facere tempore. Lorem ipsum dolor sit amet
               consectetur adipisicing elit. Error fugit quos quia molestiae amet, laboriosam,
               soluta nulla facilis minus eos necessitatibus sint, temporibus perspiciatis fuga sit
               nobis. Dolorem, facere tempore. Lorem ipsum dolor sit amet consectetur adipisicing
               elit. Error fugit quos quia molestiae amet, laboriosam, soluta nulla facilis minus
               eos necessitatibus sint, temporibus perspiciatis fuga sit nobis. Dolorem, facere
               tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugit quos
               quia molestiae amet, laboriosam, soluta nulla facilis minus eos necessitatibus sint,
               temporibus perspiciatis fuga sit nobis. Dolorem, facere tempore. Lorem ipsum dolor
               sit amet consectetur adipisicing elit. Error fugit quos quia molestiae amet,
               laboriosam, soluta nulla facilis minus eos necessitatibus sint, temporibus
               perspiciatis fuga sit nobis. Dolorem, facere tempore. Lorem ipsum dolor sit amet
               consectetur adipisicing elit. Error fugit quos quia molestiae amet, laboriosam,
               soluta nulla facilis minus eos necessitatibus sint, temporibus perspiciatis fuga sit
               nobis. Dolorem, facere tempore. Lorem ipsum dolor sit amet consectetur adipisicing
               elit. Error fugit quos quia molestiae amet, laboriosam, soluta nulla facilis minus
               eos necessitatibus sint, temporibus perspiciatis fuga sit nobis. Dolorem, facere
               tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugit quos
               quia molestiae amet, laboriosam, soluta nulla facilis minus eos necessitatibus sint,
               temporibus perspiciatis fuga sit nobis. Dolorem, facere tempore.
            </div>

            <div className="flex flex-col px-4">
               <div className="flex flex-row items-center -ml-4">
                  <input
                     name="policy"
                     type="radio"
                     className="form-check-input appearance-none rounded-md h-5 w-5 border-2 border-red1 bg-white checked:bg-red1/75 checked:border-red1 focus:outline-none"
                     onClick={() => setAcceptPolicy(true)}
                  />
                  <p className="text-base-black ml-2">ยินยอมข้อตกลงนโยบายข้อมูลส่วนบุคคล</p>
               </div>
            </div>

            <button
               className="mt-4 py-2 text-lg text-white disabled:text-white/50 bg-red1 hover:bg-red2 disabled:bg-red3 rounded-lg "
               disabled={acceptPolicy === false}
            >
               ยอมรับ
            </button>
         </div>
      </div>
   );
};
