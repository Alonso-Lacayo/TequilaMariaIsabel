interface FormErrorProps {
  message: string;
}

export default function FormError({ message }: FormErrorProps) {
  return (
    <p className="text-red-500 text-sm mt-1">
      {message}
    </p>
  );
} 