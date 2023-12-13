import React, { useReducer, useRef, useState } from "react";
import CopyClipboard from "../../../functions/CopyClipboard";

export default function useTablePassword(passwordParam, btns) {
  function passwordReducer(state, action) {
    const initialPassword = passwordParam;
    switch (action.type) {
      case "copy":
        CopyClipboard(initialPassword);
        return state;
      case "show":
        return state.hide
          ? { digits: initialPassword, hide: false }
          : { hide: true, digits: [...state.digits].map((e) => "*") };
      default:
        return state;
    }
  }
  const [password, dispatchPassword] = useReducer(passwordReducer, {
    digits: passwordParam,
    hide: false,
  });

  return (
    <>
      {password.digits}
      <div className="table-row__btns">
        {btns.map((btn) => {
          return (
            <button
              key={btn.name}
              onClick={() => dispatchPassword({ type: btn.name })}
              className={`table-row__btn-${btn.name}`}
            >
              {btn.name === "show" && password.hide ? btn.eventSvg : btn.svg}
            </button>
          );
        })}
      </div>
    </>
  );
}
