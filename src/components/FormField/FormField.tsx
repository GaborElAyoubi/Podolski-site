import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import './FormField.css';

interface BaseFormFieldProps {
  label: string;
}

type FormFieldProps =
  | (BaseFormFieldProps &
      InputHTMLAttributes<HTMLInputElement> & {
        kind: 'input';
      })
  | (BaseFormFieldProps &
      TextareaHTMLAttributes<HTMLTextAreaElement> & {
        kind: 'textarea';
        rows: number;
      });

export function FormField(props: FormFieldProps) {
  if (props.kind === 'textarea') {
    const { kind: _kind, label, rows, ...textareaProps } = props;

    return (
      <label className="form-field">
        <span>{label}</span>
        <textarea rows={rows} {...textareaProps} />
      </label>
    );
  }

  const { kind: _kind, label, ...inputProps } = props;

  return (
    <label className="form-field">
      <span>{label}</span>
      <input {...inputProps} />
    </label>
  );
}
