import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import './FormField.css';

interface BaseFormFieldProps {
  label: string;
}

type FormFieldProps =
  | (BaseFormFieldProps &
      InputHTMLAttributes<HTMLInputElement> & {
        rows?: never;
      })
  | (BaseFormFieldProps &
      TextareaHTMLAttributes<HTMLTextAreaElement> & {
        rows: number;
      });

export function FormField(props: FormFieldProps) {
  if (typeof props.rows === 'number') {
    const { label, rows, ...textareaProps } = props;

    return (
      <label className="form-field">
        <span>{label}</span>
        <textarea rows={rows} {...textareaProps} />
      </label>
    );
  }

  const { label, ...inputProps } = props;

  return (
    <label className="form-field">
      <span>{label}</span>
      <input {...inputProps} />
    </label>
  );
}
