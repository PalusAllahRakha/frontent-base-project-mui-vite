import {
  FormControl,
  FormLabel,
  TextField,
  InputAdornment,
  FormHelperText
} from '@mui/material';
import React from 'react';

const StaticInput = ({
  label,
  placeholder,
  helperText,
  required = false,
  error = false,
  fullWidth = true,
  size = 'medium',
  variant = 'outlined',
  type = 'text',
  value,
  defaultValue,
  onChange,
  onBlur,
  name,
  id,
  StartIcon,
  EndIcon,
  multiline = false,
  rows,
  maxRows,
  disabled = false,
  margin = 'none',
  sx,
  InputProps,
  inputProps
}) => {
  const fieldId = id || name;


  return (
    <FormControl
      fullWidth={fullWidth}
      error={error}
      required={required}
      margin={margin}
      sx={sx}
    >
      {label && (
        <FormLabel htmlFor={fieldId} sx={{ mb: 0.5, fontWeight: 600 }}>
          {label}
        </FormLabel>
      )}
      <TextField
        id={fieldId}
        name={name}
        type={type}
        placeholder={placeholder}
        variant={variant}
        size={size}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        label=""
        InputLabelProps={{ shrink: false }}
        InputProps={{
          startAdornment: StartIcon ? (
            <InputAdornment position="start">{StartIcon}</InputAdornment>
          ) : undefined,
          endAdornment: EndIcon ? (
            <InputAdornment position="end">{EndIcon}</InputAdornment>
          ) : undefined,
          ...InputProps
        }}
        inputProps={inputProps}
        sx={sx}
      />
      {helperText && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default StaticInput;
