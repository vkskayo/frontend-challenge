import logo from "./assets/logo.svg";
import { SpendingBar } from "./SpendingBar";

const chartSize = {
  width: 375,
};

const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

export function Chart() {
  return (
    <div
      /*    style={chartSize} */
      className="d-flex flex-column justify-content-center align-items-center gap-3 container mx-auto col-md-6 my-5"
    >
      <div className="d-flex justify-content-between balance-container p-3 w-100 container">
        <div className="d-flex flex-column mx-3 gap-2">
          <p className="text-light m-0">My balance</p>
          <h3 className="text-white">$921.48</h3>
        </div>
        <img className="mx-3" src={logo} />
      </div>

      <div className="last-7-days d-flex flex-column gap-4 p-4 w-100">
        <h4 className="">Spending - Last 7 days</h4>
        <div className="d-flex gap-3 justify-content-center border-bottom align-items-end">
          {data.map((day) => {
            return (
              <div className="d-flex flex-column col-1">
                <SpendingBar num={day.amount} />
                <p className="text-secondary">{day.day}</p>
              </div>
            );
          })}
        </div>

        <div className="total-spending d-flex justify-content-between align-items-end">
          <div className="d-flex flex-column gap-1 align-items-start">
            <p className="text-secondary m-0">Total this month</p>
            <h3 className="m-0 fs-2">$478.33</h3>
          </div>
          <div className="d-flex flex-column align-items-end">
            <p className="m-0 fw-bold">+2.4%</p>
            <p className="text-secondary m-0">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
