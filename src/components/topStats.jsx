// !compoents
import TopStatsCard from "./topStatsCard";

// !assets
import { path1, path2, path3, path4, up,  down } from "../assets";

const TopStats = () => {
  return (
    <div className="topStats">
      <TopStatsCard
        path={path1}
        title="efficiency"
        subTitle="Lorem Ipsum"
        figure="1.1921"
        arrow={down}
        base="+0.0015"
        percentage="+0.13"
        currencyAmt="0.00"
        currency="USD"
        bgClass="card1"
      />

      <TopStatsCard
        path={path2}
        title="time to market"
        subTitle="Lorem Ipsum"
        figure="327,176"
        arrow={up}
        base="-97,914.00"
        percentage="-23.03"
        currencyAmt="131,040,723,108"
        currency="JPY"
        bgClass="card2"
      />

      <TopStatsCard
        path={path3}
        title="tech debt"
        subTitle="Lorem Ipsum"
        figure="1.1763"
        arrow={up}
        base="+0.0015"
        percentage="+0.13"
        currencyAmt="0.00"
        currency="USD"
        bgClass="card3"
      />

      <TopStatsCard
        path={path4}
        title="predictability"
        subTitle="Lorem Ipsum"
        figure="0.00313010"
        arrow={down}
        base="-0.0005"
        percentage="-13.88"
        currencyAmt="1,566"
        currency="BTC"
        bgClass="card4"
      />
    </div>
  );
};

export default TopStats;
