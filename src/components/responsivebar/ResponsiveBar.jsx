import { MdClose } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { authLogout } from '../../actions/auth';
import { formatearFecha } from "../../helpers/formatearFecha";


export default function ResponsiveBar({ setMenuResponsiveOpen }) {

    const dispatch = useDispatch();
    const {username, created} = useSelector(state => state.auth);

  return (
    <div className="fixed top-0 left-0  z-10 sm:hidden flex flex-col gap-4 w-full shadow-xl rounded-b-lg skills py-5 px-6 bg-white ">
      <div className="flex flex-row w-full justify-between items-center border__responsive border-b-2 border-solid">
        <div className="flex flex-row gap-4 h-14 py-4 ">
        <p className='text-black cursor-pointer' onClick={() => dispatch(authLogout())}>SALIR</p>
        </div>

        <MdClose
          color={"black"}
          size={"30px"}
          onClick={() => setMenuResponsiveOpen(false)}
        />
      </div>

      <div className="flex flex-col h-full gap-4">

          <p className="text-lg">Nombre: {username}</p>
    
          <p className="text-lg">Usuario desde: {formatearFecha(created)}</p>
      
      </div>
    </div>
  );
}
