import React, { useEffect, useRef, useId, useState } from "react";
import useGlobalContext from "../context/GlobalContext";
import useFormData from "../hooks/useFormData";

export default function Textarea(prop) {
  const { formContent, setFormContent } = useGlobalContext();

  const areaLimit = 100;

  const textareaRef = useRef();
  const textareaId = useId();
  const [areaLength,setAreaLength]= useState(0)
  useEffect(() => {
    setAreaLength(formContent?.TEXTAREA?.length === undefined  ? 0 : formContent?.TEXTAREA?.length)   
  },[formContent])
  return (
    <>     
      <label htmlFor={prop.label + textareaId}>
        {prop.label}
        <span className="textarea-limit">
          {areaLength + "/" + areaLimit}
        </span>
      </label>
      <textarea
        maxLength={areaLimit}
        value={formContent?.TEXTAREA}
        id={prop.label + textareaId}
        onChange={(e) => useFormData(setFormContent ,e.target.tagName,e.target.value,e.target.type)}
        ref={textareaRef}
      ></textarea>     
    </>
  );
}
