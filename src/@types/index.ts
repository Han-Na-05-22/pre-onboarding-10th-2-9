export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface TextInputProps {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}

export interface RecentSearchProps {
  className?: string;
  children: React.ReactNode;
}
