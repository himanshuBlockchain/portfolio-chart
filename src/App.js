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
  let [x,setx]=useState([]);
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
        console.log(error);
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
      let url = `https://api.coingecko.com/api/v3/simple/token_price/polygon-pos?contract_addresses=0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6%2C0xd6df932a45c0f255f85145f286ea0b292b21c90b%2C0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a%2C0x2791bca1f2de4661ed88a30c99a7a9449aa84174%2C0xc2132d05d31c914a87c6611c10748aeb04b58e8f%2C0x8f3cf7ad23cd3cadbd9735aff958023239c6a063%2C0x3cef98bb43d732e2f285ee605a8158cde967d219%2C0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab%2C0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c%2C0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`;
      // let url = `https://api.coingecko.com/api/v3/coins/polygon-pos/contract/0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a`;
      try {
        const response = await axios.get(url);
        // console.log(response);
        console.log("ssss",response.data);
        let fullData=[];



        let myArray=response.data

console.log("ssss0",tableData)
let count=0
for (const key in myArray) {
          // // let 
          // id: "sf7s7e7r",
          // name: "USD Coin",
          // symbol: "USDC",
          // logo: usdc,
          // price: "1.00",
          // priceChange: "0.00",
          // volume: "716.68",
          // market: 'up'
          // con
          tableData[count]['price']=myArray[key]["usd"];
          tableData[count]['priceChange']=myArray[key]["usd_24h_change"].toFixed(2);
          tableData[count]['volume']=myArray[key]["usd_24h_vol"].toFixed(2);
          console.log("ssss",`${key}: ${myArray[key]["usd"]}`);
          count++;
        }
        console.log("ssss1",tableData)
        setx(tableData)
        
        console.log("ssss1x",x)

      } catch (error) {
        console.log(error);
      }
    };
    getERC20CoinInfo()

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
  const tbodyItems = x?.map((d, i) => [
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
      <TextCell key={d.volume} text={`$${d.volume}`} as="td" className="text-end" />,
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
