// src/pages/home/Home.jsx

import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Home = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-600 to-gray-900 ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;

