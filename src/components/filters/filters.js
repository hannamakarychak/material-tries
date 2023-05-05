import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const GENDERS = ["male", "female", "genderless", "unknown"];

const Filters = ({ onSelect, selectedValues = [] }) => {
  const handleChange = (item) => {
    if (selectedValues.includes(item)) {
      onSelect(selectedValues.filter((value) => value !== item));
    } else {
      onSelect([...selectedValues, item]); // we cannot use .push here since we cannot mutate state, so we copy an array and add new item
    }
  };

  return (
    <FormGroup row>
      {GENDERS.map((item) => {
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedValues.includes(item)}
                onChange={() => handleChange(item)}
              />
            }
            label={item.toUpperCase()}
            key={item}
          />
        );
      })}
    </FormGroup>
  );
};

export default Filters;
