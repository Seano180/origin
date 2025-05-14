import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  options?: string[]; 
}

const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder,
  options = [],
}) => {
  return (
    <Autocomplete
      freeSolo
      inputValue={value}
      onInputChange={(event, newValue) => {
        onChange(newValue);
      }}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label={placeholder || "Search"}
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
};

export default Search;
