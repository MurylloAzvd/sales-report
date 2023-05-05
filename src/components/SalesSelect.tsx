interface SalesSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

type Option = {
  label: string;
  value: string;
};

export const SalesSelect = ({
  label,
  options,
  value,
  onChange,
}: SalesSelectProps) => {
  return (
    <div className="select-group">
      <label htmlFor={label}>{label}:</label>
      <select
        id={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
