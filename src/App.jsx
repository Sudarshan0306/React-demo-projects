import { Suspense } from "react";
import "./App.css";
import DebouncedSearch from "./components/debounceSearch/DebouncedSearch";
import DemoUse from "./components/DemoUse";
import Child from "./components/dynamic-routing/Child";
import Parent from "./components/dynamic-routing/Parent";
import DynamicForm from "./components/DynamicForm";
import InfiniteScroll from "./components/infinite-scroll/InfiniteScroll";
import MemoCallback from "./components/MemoCallback";
import QRGenerator from "./components/qrcode/QRGenerator";
import RealTimeChat from "./components/real-time-chat/RealTimeChat";
import AddressInfo from "./components/stepper-form/AddressInfo";
import Table from "./components/table/Table";
import Form from "./components/test/Form";
import ThrottledScroll from "./components/throttled-scroll/ThrottledScroll";
import ParentInput from "./components/useImperative/ParentInput";
import ShoppingCart from "./components/useReducer/ShoppingCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const formSchema = [
  { label: "Name", type: "text", name: "name" },
  { label: "Age", type: "number", name: "age" },
  { label: "Email", type: "email", name: "email" },
  {
    label: "Gender",
    type: "select",
    name: "gender",
    options: ["Male", "Female"],
  },
];

function App() {
  return (
    <>
      <h1>React Practice</h1>
      {/* <DynamicForm data={formSchema} /> */}
      <AddressInfo />
      {/* <DebouncedSearch /> */}
      {/* <Table /> */}
      {/* <QRGenerator /> */}
      <Form />
      {/* <RealTimeChat /> */}
      {/* <InfiniteScroll /> */}
      {/* <MemoCallback /> */}
      {/* <ShoppingCart /> */}
      {/* <ParentInput /> */}
      {/* <ThrottledScroll /> */}
      {/* <Parent /> */}

      {/* <Router>
        <Routes>
          <Route path="/user/:id" element={<Child />} />
        </Routes>
      </Router> */}
      <Suspense fallback = {<p>Loading user...</p>}>
        <DemoUse />
      </Suspense>
    </>
  );
}

export default App;
