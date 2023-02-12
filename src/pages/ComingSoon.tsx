import { useEffect, useState } from "react";

export const Comingsoon = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}/02/15`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents: any = [];

  Object.keys(timeLeft).forEach((interval: any) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className="text-5xl">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <>
      <div className="flex h-screen bg-[#fdf4e4] font-teko">
        <div className="m-auto text-center">
          <img
            src="logo.png"
            alt="Comcamp"
            className="h-96 mx-auto mb-3 animate-bounce"
          />
          <p className="mb-3 text-6xl text-black uppercase">Coming Soon...</p>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      </div>
    </>
  );
};
