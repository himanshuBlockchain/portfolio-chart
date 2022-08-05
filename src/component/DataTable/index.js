import Row from "./Row";
import "./style.scss";

const DataTable = ({ theadItems, tbodyItems, noItemMsg, colSpan }) => {
  return (
    <div className="table_wrapper">
      <div className="container">
        <div className="table_content">
          <table>
            <thead className="table__head">
              <Row compoents={theadItems} />
            </thead>
            <tbody className="table__body">
              {tbodyItems?.length <= 0 ? (
                <tr>
                  <td
                    colSpan={colSpan}
                    className="text-center py-5 font-size__1"
                  >
                    {noItemMsg}
                  </td>
                </tr>
              ) : (
                tbodyItems?.map((items, index) => (
                  <Row key={index + 1} compoents={items} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
