import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface AccountTypeOption {
  label: string;
  value: "ALL" | "ELECTRICITY" | "GAS";
}

const accountTypes: AccountTypeOption[] = [
  { label: "All", value: "ALL" },
  { label: "Electricity", value: "ELECTRICITY" },
  { label: "Gas", value: "GAS" },
];

type FilterProps = {
  onChange: (value: "ALL" | "ELECTRICITY" | "GAS") => void;
};

export default function Filter({ onChange }: FilterProps) {
  return (
    <Autocomplete
      options={accountTypes}
      getOptionLabel={(option) => option.label}
      defaultValue={accountTypes[0]}
      onChange={(event, newValue) => {
        if (newValue) {
          onChange(newValue.value);
        }
      }}
      renderInput={(params) => <TextField {...params} label="Filter by type" />}
    />
  );
}
