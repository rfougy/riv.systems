import InputField from "./input-field/InputField";

const Newsletter: React.FC = () => {
  /**
   * @todo add email validation(?)
   */
  function subscribe(email: string) {}

  return (
    <div>
      <InputField handleSubmit={subscribe} />
    </div>
  );
};

export default Newsletter;
