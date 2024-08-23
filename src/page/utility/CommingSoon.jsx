import Countdown from "react-countdown";
import CountDownRenderer from "../../components/coming-soon";

function CommingSoon() {
  return (
    <>
      <Countdown date="September 06, 2024" renderer={CountDownRenderer} />
    </>
  );
}

export default CommingSoon;
