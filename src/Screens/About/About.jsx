import React from "react";
import Header from "../Home/components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <div className="mockup-window bg-base-300 border mt-3">
        <div className="bg-base-200 flex flex-col justify-center px-4 py-10 gap-3 shadow-lg rounded-lg p-5">
          <p className="text-lg text-3xl font-bold text-center  ">
            IdeaPulse: Startup Idea Hub :
          </p>
          <h3 className="font-mono ">
            <strong>IdeaPulse</strong> is an interactive platform for sharing
            and evaluating startup ideas, crafted using a modern tech stack to
            ensure a dynamic and engaging user experience. <br />
            The frontend is built with React and Vite, offering fast performance
            and a smooth development process. The interface is styled with
            Tailwind CSS and DaisyUI, creating a responsive design that provides
            a consistent experience across both desktop and mobile devices.
            <br />
            Users can submit their startup ideas, which others can then like or
            dislike, creating a community-driven feedback loop. <br />
            The app features real-time updates and categorization, allowing
            users to explore ideas based on total likes, trending topics, and
            new submissions.
            <br />
            The backend is powered by Drizzle, interfacing with a PostgreSQL
            database hosted on Neon. This setup ensures reliable data management
            and efficient handling of user interactions and idea metrics.
            <br />
            IdeaPulse combines a sleek, responsive design with a robust backend
            to facilitate vibrant discussions and evaluations of startup
            concepts, making it an ideal platform for entrepreneurs and
            innovators to connect and collaborate.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
