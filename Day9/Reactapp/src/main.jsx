import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Marks from "./Marks.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App
      Name={"Saurabh"}
      Contact={9839957735}
      Email={"contactsaurabh2702@gmail.com"}
    />
    <Marks m1={77} m2={82} m3={83} />
    <App
      Name={"aadarsh"}
      Contact={9839957737}
      Email={"contactsaurabh2702@gmail.com"}
    />
    <Marks m1={77} m2={82} m3={83} />
    <App
      Name={"rohan"}
      Contact={9839957735}
      Email={"contactsaurabh2702@gmail.com"}
    />
    <Marks m1={77} m2={82} m3={83} />
    <App
      Name={"raunak"}
      Contact={9839957735}
      Email={"contactsaurabh2702@gmail.com"}
    />
    <Marks m1={77} m2={82} m3={83} />
    <App
      Name={"varnit"}
      Contact={9839957735}
      Email={"contactsaurabh2702@gmail.com"}
    />
    <Marks m1={77} m2={82} m3={83} />
    <Marks />
  </StrictMode>
);
