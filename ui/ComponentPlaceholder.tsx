interface Props {
  width: string;
  height: string;
  textColor: string;
  backgroundColor: string;
  children: React.ReactNode;
}

function ComponentPlaceholder({
  width,
  height,
  textColor,
  backgroundColor,
  children,
}: Props) {
  return (
    <div
      className="p-2 "
      style={{
        width: width ? width : "auto",
        height: height ? height : "auto",
      }}
    >
      <div
        className={`w-full h-full p-5 flex items-center justify-center ${textColor} ${backgroundColor} rounded-lg`}
      >
        {children}
      </div>
    </div>
  );
}

export default ComponentPlaceholder;
