import Select from "./container/Select";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Select menu={["민트", "초코", "딸기", "바나나", "키위"]} />
      <Select menu={["치즈", "우유", "코코넛"]} />
      <Select menu={["OK", "NG", "미해당"]} />
    </div>
  );
}

export default App;
