const Button = ({ num, coffeeName }) => {
  const hello = (x) => {
    alert(`${x}개 ${coffeeName}커피 주문 하셨습니다!`);
  };

  return (
    <button onClick={() => hello(num)} className="p-3 bg-sky-400 border-r-2">
      {coffeeName}
    </button>
  );
};

export default Button;
