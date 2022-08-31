import React, { useCallback, useEffect, useState } from "react";

const UseCallBackHookDemo = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const renderTable = useCallback(() => {
    return [number * 1, number * 2, number * 3, number * 4, number * 5];
  }, [number]);
  const styles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={styles}>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.valueAsNumber)}
        />
        <Table renderTable={renderTable} />
        <button onClick={() => setDark(!dark)}>Change Theme</button>
      </div>
    </div>
  );
};

export default UseCallBackHookDemo;

const Table = ({ renderTable }) => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    console.log("Table rendered");
    setRows(renderTable());
  }, [renderTable]);
  return (
    <>
      {rows.map((row, index) => (
        <p key={index}>{row}</p>
      ))}
    </>
  );
};
