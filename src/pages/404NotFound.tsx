import { Link } from "react-router-dom";
const NotFound = () => {
   return (
      <div className='bg-base-white h-screen w-screen flex'>
         <div className='font-bai-jamjuree  m-auto text-center flex flex-col'>
            <p className='text-7xl'>404 Not Found</p>
            <p className='mt-2'>
               Its looks like one of the developers messed up and the page you are looking for does
               not exist.
            </p>
            <Link to='/'>
            <button className='rounded-2xl text-2xl bg-red1 text-white mt-10 py-2 px-3 relative'>
               Back to Home
               <span className='h-4 w-4 rounded-xl animate-ping bg-yellow1 opacity-75 absolute' />
            </button>
            </Link>
         </div>
      </div>
   );
};

export default NotFound;
