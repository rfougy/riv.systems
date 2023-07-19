import { useState } from "react";

import { Form, Input } from "./InputField.styled";

const InputField: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>("");

  function handleChange(e: any) {
    setInputVal(e.target.value.toLowerCase());
  }

  function disableEnterKey(e: any): void {
    (e.keyCode === 13 || e.which === 13 || e.key === "Enter") &&
      e.preventDefault();
  }

  return (
    <Form>
      <Input
        type="search"
        name="subscribe-to-newsletter"
        value={inputVal}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => disableEnterKey(e)}
        placeholder="Subscribe to Newsletter"
        autoFocus
      />
    </Form>
  );
};

export default InputField;
