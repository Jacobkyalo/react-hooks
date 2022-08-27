import { useContext } from "react";
import { Context } from "../contexts/ThemeContext";

const ConsumingDefaultContextValue = () => {
  const defaultValue = useContext(Context);
  return (
    <div>
      <h3 style={{ color: defaultValue, textAlign: "center" }}>
        Am consuming a default value of ThemeContext
      </h3>
    </div>
  );
};

export default ConsumingDefaultContextValue;
