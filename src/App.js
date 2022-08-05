import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
// import BarChart from "./component/BarChart";
// import NewChart from "./component/LineChart";
// import LineChart from "./component/LineChart";
import Chart from "./component/Chart";
import axios from "axios";
import Header from "./component/Header/Header";
import DataInfo from "./component/DataInfo";
import DataTable from "./component/DataTable";
import TextCell from "./component/DataTable/TextCell";
import { tableData } from "./data";
import ActionCell from "./component/DataTable/ActionCell";

// import CoinGecko from 'coingecko-api';

function App() {
  //2. Initiate the CoinGecko API Client
  // const CoinGeckoClient = new CoinGecko();

  // What we need : CoinIcon, Coin Name, Price, 24 hour Change, 24 Hour Change Percentage,  Price in USD
  //
  //
  //
  //
  //
  //

  useEffect(() => {
    // func()
    var func2 = async () => {
      let url =
        "https://api.coingecko.com/api/v3/coins/polygon-pos/contract/0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a/market_chart/?vs_currency=usd&days=300";
      try {
        const response = await axios.get(url);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    // Returns : Price, 24 hour Volume, 24 Hour Price Change,  Price in USD
    // Coingecko URL : /simple/token_price/{id}
    var getERC20PriceData = async () => {
      let contractAddress = "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a";
      let url = `https://api.coingecko.com/api/v3/simple/token_price/polygon-pos?contract_addresses=0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`;
      try {
        const response = await axios.get(url);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    // getERC20PriceData();

    // Returns : Coin Name, Logo,
    // Coingecko URL : /coins/{id}/contract/{contract_address}
    // image = response.data.data.image.small
    // name = response.data.data.name
    // symbol = response.data.data.symbol
    var getERC20CoinInfo = async () => {
      let contractAddress = "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a";
      let url = `https://api.coingecko.com/api/v3/coins/polygon-pos/contract/${contractAddress}`;
      // let url = `https://api.coingecko.com/api/v3/coins/polygon-pos/contract/0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a`;
      try {
        const response = await axios.get(url);
        console.log(response);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    // getERC20CoinInfo()

    // Returns : Coin Name, Logo,
    // Coingecko URL : /coins/{id}/contract/{contract_address}
    // image = response.data.data.image.small
    // name = response.data.data.name
    // symbol = response.data.data.symbol
    var getERC20CoinChartInfo = async () => {
      let contractAddress = "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a";
      // let url = `https://api.coingecko.com/api/v3/coins/polygon-pos/contract/${contractAddress}`;
      let url = `https://api.coingecko.com/api/v3/coins/polygon-pos/contract/0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a/market_chart/?vs_currency=usd&days=1`;
      // let url = `https://api.coingecko.com/api/v3/coins/polygon-pos/contract/${contractAddress}/market_chart/?vs_currency=usd&days=1`;
      // let url1 = `https://api.etherscan.io/api?module=account&action=txlist&address=0x00192Fb10dF37c9FB26829eb2CC623cd1BF599E8&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=2ITGYS1ITD1IF1ADVZQ96HRFFCQ235BZXD`;
      try {
        const response = await axios.get(url);
        // let prices =response.data;
        // let prices =response.data.prices;
        // console.log(prices);
        // console.log(prices.length);
        // console.log(prices[0][0]);
        // console.log(prices[0][1]);
        console.log(response.data.prices);
      } catch (error) {
        console.error(error);
      }
    };
    // getERC20CoinChartInfo();
  });

  // individual table data selected
  const [selectedData, setSelectedData] = useState(null)

  // table head
  const theadItems = [
    <TextCell key="sn" text="#" as="th" className="text-start" />,
    <TextCell key="name" text="Name" as="th" className="text-start" />,
    <TextCell key="price" text="Price" as="th" className="text-end" />,
    <TextCell
      key="pricechange"
      text="Price Change"
      as="th"
      className="text-end"
    />,
    <TextCell key="volume" text="Volume" as="th" className="text-end" />,
    <TextCell key="data" text="Data" as="th" className="text-end" />,
  ];

  // table body items
  // let subtotal = 0;
  const tbodyItems = tableData?.map((d, i) => [
    [
      <TextCell key={d.id} text={i + 1} as="td" className="text-start" />,
      <TextCell key={d.name} text={d.name} image={d.logo} symbol={d.symbol} as="td" className="text-start name_cell" />,
      <TextCell key={d.price} text={`$${d.price}`} as="td" className="text-end" />,
      <TextCell
        key={d.priceChange}
        text={`${d.priceChange}%`}
        as="td"
        className={`text-end ${d.market === 'down' ? 'down':'up'}`}
      />,
      <TextCell key={d.volume} text={`$${d.volume}m`} as="td" className="text-end" />,
      <ActionCell
        key="action"
        className="text-end action__button"
        actions={[
          {
            name: "Delete",
            icon: "Show Data",
            className: "action__button",
            handler: () => {
              setSelectedData(d)
            },
          },
        ]}
        as="td"
      />,
    ],
  ]);

  return (
    <div className="App">
      <Header />
      <div className="chart_wrapper" style={{ width: "600px", margin: "auto" }}>
        <Chart />
      </div>
      <DataInfo data={selectedData} />
      <DataTable theadItems={theadItems} tbodyItems={tbodyItems} />
    </div>
  );
}

export default App;
