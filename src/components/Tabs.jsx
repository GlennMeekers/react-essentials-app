export default function Tabs({ children, buttons, wrapperEl = "menu" }) {
  const WrapperEl = wrapperEl;

  return (
    <>
      <WrapperEl>{buttons}</WrapperEl>
      {children}
    </>
  );
}
