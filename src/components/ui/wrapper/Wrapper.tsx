interface WrapperProps {
  children: React.ReactNode;
};

export default function Wrapper({children}: WrapperProps) {
  return (
    <div className="max-w-full px-4 lg:px-8">{children}</div>
  );
};