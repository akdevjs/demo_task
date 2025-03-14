interface InputProps {
  type: "text" | "password" | "email";
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      name={name}
      className="border rounded-md border-gray-600 bg-blue-100 p-2 outline-none w-full"
      {...(value !== undefined && onChange ? { value, onChange } : {})} // Controlled only if both exist
    />
  );
};

export default Input;
