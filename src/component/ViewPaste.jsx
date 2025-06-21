import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteslice";

const ViewPaste = () => {

       const {id} = useParams();

       const allpastes = useSelector((state) => state.paste.pastes);

       const paste = allpastes.filter((p) => p._id === id)[0];
       console.log("Final paste: ", paste);

       if(!paste){
        return <div className="text-red-500">Paste not found</div>
       }

  return (
     <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-4 rounded bg-neutral-900 mt-2 w-[60%]"
          type="text"
          placeholder="enter title here"
          value={paste.title}
       
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <button onClick={createPaste} className="p-2 rounded mt-2">
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button> */}
      </div>
      <div className="mt-8">
        <textarea
          className=" rounded bg-neutral-900 mt-4 min-w-[500px] p-4"
          value={paste.content}
          placeholder="Enter Content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste
