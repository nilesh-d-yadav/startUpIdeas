import React from "react";
import { db } from "../../../../utils/index";
import { Ideas } from "../../../../utils/schema";
import { eq } from "drizzle-orm";
import {
  checkIsAlreadyDownVoted,
  checkIsAlreadyUpVoted,
  downvote,
  upvote,
} from "../../../Service/index";

const IdeaItem = ({ idea, index, refreshData }) => {
  const upvoteHandler = async () => {
    if (upvote(idea.id)) {
      const result = await db
        .update(Ideas)
        .set({
          vote: idea.vote + 1,
        })
        .where(eq(Ideas.id, idea.id))
        .returning({
          id: Ideas.id,
        });
      if (result) {
        refreshData();
      }
    }
  };
  const downvoteHandler = async () => {
    if (downvote(idea.id)) {
      const result = await db
        .update(Ideas)
        .set({
          vote: idea.vote - 1,
        })
        .where(eq(Ideas.id, idea.id))
        .returning({
          id: Ideas.id,
        });
      if (result) {
        refreshData();
      }
    }
  };
  return (
    <div className="my-5 border shadow-lg rounded-lg p-5 ">
      <div className=" flex items-center gap-7">
        <h2 className="flex gap-2">
          <span>{index + 1}. </span>
          {idea.content}
        </h2>
        <div className="flex flex-col items-center">
          <h2
            className={`text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer p-2 font-bold ${
              checkIsAlreadyUpVoted(idea.id) && "bg-slate-200"
            }`}
            onClick={() => upvoteHandler()}
          >
            🔥
          </h2>
          <h2 className="text-lg  rounded-md p-1 ">{idea.vote}</h2>
          <h2
            className={`text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer p-2 ${
              checkIsAlreadyDownVoted(idea.id) && "bg-slate-200"
            }`}
            onClick={() => downvoteHandler()}
          >
            👎
          </h2>
        </div>
      </div>

      <h2 className="mt-4 text-gray-400 text-sm flex gap-5">
        <span> </span>
        By @{idea.username.toLowerCase()} on {idea.createdAt}
      </h2>
    </div>
  );
};

export default IdeaItem;
