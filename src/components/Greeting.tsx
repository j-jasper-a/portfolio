import Text from "./common/Text";

const Greeting = () => {
  const currentHour = new Date().getHours();

  const greeting = () => {
    if (currentHour >= 5 && currentHour < 12) {
      return "Good morning.";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good afternoon.";
    } else if (currentHour >= 18 && currentHour < 24) {
      return "Good evening.";
    } else {
      return (
        "You're up late." + " " + "It's past" + " " + currentHour + " " + "AM."
      );
    }
  };

  return (
    <div className="text-center">
      <Text as="p">{greeting()}</Text>
    </div>
  );
};

export default Greeting;
