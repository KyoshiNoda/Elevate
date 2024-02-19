import { useState } from "react";
import Tab from "../components/Settings/Tab";
import UserInfoTab from "../components/Settings/UserInfoTab";
import PasswordTab from "../components/Settings/PasswordTab";
import GoalsTab from "../components/Settings/GoalsTab";

const SettingPage = () => {
  const [currentTab, setCurrentTab] = useState("UserInfo");
  const tabHandler = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="h-screen w-screen  bg-gradient-to-b from-color7 to-color3 p-4">
      <div className="flex gap-4">
        <Tab getTab={tabHandler} activeTab={currentTab} />
        {currentTab === "UserInfo" && <UserInfoTab />}
        {currentTab === "Password" && <PasswordTab />}
        {currentTab === "Goals" && <GoalsTab />}
      </div>
    </div>
  );
};

export default SettingPage;
