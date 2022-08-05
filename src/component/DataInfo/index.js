import React from "react";
import "./style.scss";
const DataInfo = ({ data }) => {
  console.log("selected data", data);
  return (
    <div className="data_info_wrapper">
      <div className="container">
        <div className="data_row">
          <div className="name" style={{display: 'flex', alignItems: 'center'}}>
            <span>Name:</span>{" "}
            {data?.name ? <div style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}>
              {data?.logo && <img src={data?.logo} width="25px" height="25px" alt="" />}
              {data?.name && <h2 style={{fontSize: 'inherit', margin: '0 10px'}}>{data?.name}</h2>}
              {data?.symbol && <h4 style={{fontSize: 'inherit', color: 'rgb(108, 114, 132)'}}>({data?.symbol})</h4>}
            </div> : " USD Coin"}
          </div>
          <div className="name">
            <span>Price:</span> {data?.price ? data?.price : "$1.00"}
          </div>
          <div className="name">
            <span>Price Change:</span>{" "}
            <span
              style={{
                color:
                  data?.market === "down"
                    ? "rgb(253, 64, 64)"
                    : "rgb(39, 174, 96)",
              }}
            >
              {data?.priceChange ? data?.priceChange + "%" : "0.00%"}
            </span>
          </div>
          <div className="name">
            <span>Volume:</span>{" "}
            {data?.volume ? "$" + data?.volume + "m" : "$784.54m"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataInfo;
