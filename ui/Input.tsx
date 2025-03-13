interface InputProps {
  type: "text" | "password" | "email";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="border rounded-md border-gray-600 bg-blue-100 p-2 outline-none w-full outline:none"
    />
  );
};

export default Input;
