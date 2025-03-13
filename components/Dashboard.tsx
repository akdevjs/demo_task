import ComponentPlaceholder from "../ui/ComponentPlaceholder";

function Dashboard() {
  return (
    <ComponentPlaceholder
      width="100%"
      height="100%"
      textColor="text-orange-900"
      backgroundColor="bg-orange-200"
    >
      <h1 className="text-3xl font-bold max-w-96 text-center">
        You are logged in! This is the DashBoard Route
      </h1>
    </ComponentPlaceholder>
  );
}

export default Dashboard;
