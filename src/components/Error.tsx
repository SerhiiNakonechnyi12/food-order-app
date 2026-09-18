type ErrorMessageProps = {
  title: string;
  message: string;
};

export default function Error({ title, message }: ErrorMessageProps) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
