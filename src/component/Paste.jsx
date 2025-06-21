import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromPastes } from "../redux/pasteslice";
import { toast } from 'react-hot-toast';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handledelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input
        className="bg-neutral-950 rounded min-w-[600px] p-1.5 mt-5"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-5 mt-5">
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div key = {paste._id} className="bg-neutral-950 border">
                <div>{paste.title}</div>

                <div>{paste.content}</div>

                <div className="flex flex-row gap-4 place-content-evenly bg-neutral-950">
                  <button>
                    <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                    </button>

                  <button>
                    <a href={`/pastes/${paste?._id}`}>View</a>
                  </button>

                  <button  onClick={() => {navigator.clipboard.writeText(paste?.content)
                  toast.success("Copied to Clickboard")
                  }
                    }> Copy</button>

                  <button onClick={() => {navigator.share({ text: paste?.content });
}
                  }> Share </button>

                  <button onClick={() => handledelete(paste?._id)}>
                    delete
                  </button>
                </div>
                <div>{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Paste;
