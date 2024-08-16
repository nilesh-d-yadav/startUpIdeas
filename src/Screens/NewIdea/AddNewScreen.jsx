import React, { useEffect, useState } from "react";
import Header from "../Home/components/Header";
import { ChevronLeft, Info, Send } from "lucide-react";
import { db } from "../../../utils";
import { Ideas } from "../../../utils/schema";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const AddNewScreen = () => {
  const navigate = useNavigate();
  const [idea, setIdea] = useState();
  const [username, setUsername] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [existingUser, setExistingUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
      setExistingUser(true);
    }
  }, []);

  const onSavehandler = async () => {
    const result = await db
      .insert(Ideas)
      .values({
        content: idea,
        username: username,
        createdAt: moment().format("DD MMM yyyy"),
      })
      .returning({ id: Ideas.id });
    if (result) {
      localStorage.setItem("username", username);
      setIdea("");
      console.log("Saved Data");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };
  return (
    <div className="bg-green h-lvh">
      <Header />
      {/* Alert */}

      {showAlert && (
        <div role="alert" className="alert alert-success mt-5 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Congratulations! Your Idea is now live worldwide.</span>
        </div>
      )}
      {/* Alert Ends */}
      <button className="btn mt-7" onClick={() => navigate("/")}>
        <ChevronLeft />
        Back
      </button>
      <h2 className="font-bold text-2xl mt-5">
        From Concept to Creation. Empowering your startup journey
      </h2>
      <div className="flex flex-col mt-7 gap-2">
        <label>Your Idea *</label>
        <textarea
          value={idea}
          onChange={(event) => setIdea(event.target.value)}
          className="textarea textarea-bordered border-primary"
          placeholder="What's on your mind? (30 words minimum)"
        ></textarea>
      </div>

      {!existingUser && (
        <div className="flex flex-col mt-7 gap-2">
          <label className="flex justify-between">
            Your Username *{" "}
            <span className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              No Account Required
            </span>
          </label>

          <input
            value={username}
            type="text"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="What will I call you?"
            className="input input-bordered w-full  border-primary"
          />
        </div>
      )}

      <button
        className="btn w-full btn-primary mt-7"
        disabled={!(idea && username)}
        onClick={() => onSavehandler()}
      >
        Send
        <Send className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AddNewScreen;
