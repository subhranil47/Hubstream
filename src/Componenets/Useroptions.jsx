import {useState, React} from 'react'
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdOutlineLibraryAdd } from "react-icons/md";

const Useroptions = () => {
  


  return (
    <div>
      <div className='w-44 h-44 bg-slate-600 text-white'>

        <select name="" id="">
          <option value="">
            <MdOutlineLibraryAdd />
            Add to favourites
          </option>
          <option value="">
            <MdOutlineSaveAlt />
            Save
          </option>
        </select>
      </div>
    </div>
  );
}

export default Useroptions