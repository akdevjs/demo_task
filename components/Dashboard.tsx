import ComponentPlaceholder from "../ui/ComponentPlaceholder";
import ToastDemo from "../ui/ToastDemo";

function Dashboard() {
  return (
    <>
      <ComponentPlaceholder
        width="100%"
        height="100%"
        textColor="text-orange-900"
        backgroundColor="bg-orange-200"
      >
        <div className="flex items-center flex-col gap-3 max-w-96">
          <h1 className="text-3xl font-bold  text-center">
            You are logged in! This is the DashBoard Route
          </h1>
          <p className="text-center">
            I implemented the authentication on the server level and displayed
            the errors under field so you can find the Toast Demo here
          </p>
          <h2 className="text-xl text-center font-semibold">
            Click on below buttons they demonsterate the Toast! 😊{" "}
          </h2>
          <ToastDemo />
        </div>
      </ComponentPlaceholder>
    </>
  );
}

export default Dashboard;
