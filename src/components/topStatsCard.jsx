import PropTypes from "prop-types";

const TopStatsCard = ({
  path,
  title,
  subTitle,
  figure,
  arrow,
  base,
  percentage,
  currencyAmt,
  currency,
  bgClass,
}) => {
  return (
    <div className={"quotation " + bgClass}>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subTitle}</h3>

      <div className="figureFlex">
        <h1 className="figure">{figure}</h1>

        <img src={arrow} alt="" className="arrow" />
      </div>

      <h3 className="base">{base + " (" + percentage + "%" + ")"}</h3>

      <p className="currencyAmt">{currencyAmt + " " + currency}</p>

      <img src={path} alt="" className="path" />
    </div>
  );
};

TopStatsCard.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  figure: PropTypes.number.isRequired,
  arrow: PropTypes.string.isRequired,
  base: PropTypes.number,
  percentage: PropTypes.number,
  currencyAmt: PropTypes.number,
  currency: PropTypes.string,
  bgClass: PropTypes.string.isRequired,
};

export default TopStatsCard;
