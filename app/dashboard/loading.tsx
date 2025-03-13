import ComponentPlaceholder from "../../ui/ComponentPlaceholder";

function loading() {
  return (
    <ComponentPlaceholder
      height="100%"
      width="100%"
      textColor="text-pink-900"
      backgroundColor="bg-pink-200"
    >
      <h1 className="text-3xl font-bold">Loading...</h1>
    </ComponentPlaceholder>
  );
}

export default loading;
