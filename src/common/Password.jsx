import { useState } from "react";

const Password = () => {
  return (
    <>
      <div className="border border-black p-2">
        <span>비밀번호</span>
        <input onChange={(e) => changePassword(e)} type="text" />
      </div>
      <div className="border border-black p-2">
        <span>비밀번호 확인</span>
        <input onChange={(e) => changePasswordCheck(e)} type="text" />
      </div>
      <button className="p-1 bg-slate-500">{isSame ? "일치" : "불일치"}</button>
    </>
  );
};

export default Password;
