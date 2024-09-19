import { IInput } from "@/src/types";
import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
}

const FXSelect = ({
  options,
  name,
  label,
  variant = "bordered",
  isDisabled,
}: IProps) => {
  const { register } = useFormContext();
  return (
    <Select
      variant={variant}
      {...register(name)}
      label={label}
      className="max-w-full"
      isDisabled={isDisabled}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
