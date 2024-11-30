import { useState } from "react";

//common
// FruitButton.jsx
// props a,b 받아서
// 버튼누르면 서로 바뀌는 컴포넌트 만들기!

const Toggle = () => {
  // 상태 변경(state 변경)
  // const [초깃값, 값을 변경하는 함수] = useState(초깃값);

  const [num, setNum] = useState(2);

  const change = () => {
    setNum((v) => {
      return v ** 2;
    });
  };
  return (
    <button onClick={() => change()} className="p-2 bg-red-300">
      {num}
    </button>
  );
};

export default Toggle;
