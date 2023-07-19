import { Form, Input } from "./EmailField.styled";

const EmailField: React.FC<{
  email: string;
  setEmail: (val: string) => void;
  handleSubmit: () => void;
}> = ({ email, setEmail, handleSubmit }) => {
  function handleChange(e: any) {
    setEmail(e.target.value.toLowerCase());
  }

  function disableEnterKey(e: any): void {
    const enterKeyPressed =
      e.keyCode === 13 || e.which === 13 || e.key === "Enter";

    if (enterKeyPressed) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <Form>
      <Input
        type="search"
        name="subscribe-to-newsletter"
        value={email}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => disableEnterKey(e)}
        placeholder="Subscribe to Newsletter"
        autoFocus
      />
    </Form>
  );
};

export default EmailField;
