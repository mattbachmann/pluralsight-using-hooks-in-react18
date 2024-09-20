import React, {useEffect, useState} from "react";

export default function Demo() {
  const [text1, setText1] = useState("First");
  const [text2, setText2] = useState("Last");

  useEffect(() => {
      console.log('text1', text1);
      console.log('text2', text2);

      return () => {
        console.log('cleanup called after every change');
      };
  }, [text1, text2]);

  useEffect(() => {
      console.log('mount?');

      return () => {
          console.log('unmount?');
      }
  }, []); // Only mount/unmount handler if empty deps array

  return (
    <div className="container">
      <h3>Simple State and Lifecycle Management</h3>

      <input onChange={(e) => setText1(e.target.value)} value={text1} />
      <hr />
      <input onChange={(e) => setText2(e.target.value)} value={text2} />
      <hr />
      <h2>
        <i>
          {text1} {text2}
        </i>
      </h2>
    </div>
  );
}
