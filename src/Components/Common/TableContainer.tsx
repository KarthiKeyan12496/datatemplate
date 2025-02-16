import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
  useRowSelect
} from "react-table";
import { Table, Row, Col, Button, CardBody } from "reactstrap";
import { DefaultColumnFilter } from "./filters";
import {
  ProductsGlobalFilter,
  CustomersGlobalFilter,
  OrderGlobalFilter,
  ContactsGlobalFilter,
  CompaniesGlobalFilter,
  LeadsGlobalFilter,
  CryptoOrdersGlobalFilter,
  InvoiceListGlobalSearch,
  TicketsListGlobalFilter,
  NFTRankingGlobalFilter,
  TaskListGlobalFilter,
} from "../../Components/Common/GlobalSearchFilter";
import { Link } from "react-router-dom";

interface GlobaFilerPropes {
    preGlobalFilteredRows ?: any;
    globalFilter ?: any;
    setGlobalFilter ?: any;
    isCustomerFilter ?: any;
    isOrderFilter ?: any;
    isContactsFilter ?: any;
    isCompaniesFilter ?: any;
    isCryptoOrdersFilter ?: any;
    isInvoiceListFilter ?: any;
    isTicketsListFilter ?: any;
    isNFTRankingFilter ?: any;
    isTaskListFilter ?: any;
    isProductsFilter ?: any;
    isLeadsFilter ?: any;
    SearchPlaceholder ?: any;
}

// Define a default UI for filtering
function GlobalFilter({
    preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  isCustomerFilter,
  isOrderFilter,
  isContactsFilter,
  isCompaniesFilter,
  isCryptoOrdersFilter,
  isInvoiceListFilter,
  isTicketsListFilter,
  isNFTRankingFilter,
  isTaskListFilter,
  isProductsFilter,
  isLeadsFilter,
  SearchPlaceholder
} : GlobaFilerPropes) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value  :any) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <React.Fragment>
      <CardBody className="border border-dashed border-end-0 border-start-0">
        <form>
          <Row>
            <Col sm={5}>
              <div className={(isProductsFilter || isContactsFilter || isCompaniesFilter || isNFTRankingFilter) ? "search-box me-2 mb-2 d-inline-block" : "search-box me-2 mb-2 d-inline-block col-12"}>
                <input
                  onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                  }}
                  id="search-bar-0"
                  type="text"
                  className="form-control"
                  placeholder={SearchPlaceholder}
                  value={value || ""}
                />
                <i className="bx bx-search-alt search-icon"></i>
              </div>
            </Col>
            {isProductsFilter && (
              <ProductsGlobalFilter />
            )}
            {isCustomerFilter && (
              <CustomersGlobalFilter />
            )}
            {isOrderFilter && (
              <OrderGlobalFilter />
            )}
            {isContactsFilter && (
              <ContactsGlobalFilter />
            )}
            {isCompaniesFilter && (
              <CompaniesGlobalFilter />
            )}
            {isLeadsFilter && (
              <LeadsGlobalFilter />
            )}
            {isCryptoOrdersFilter && (
              <CryptoOrdersGlobalFilter />
            )}
            {isInvoiceListFilter && (
              <InvoiceListGlobalSearch />
            )}
            {isTicketsListFilter && (
              <TicketsListGlobalFilter />
            )}
            {isNFTRankingFilter && (
              <NFTRankingGlobalFilter />
            )}
            {isTaskListFilter && (
              <TaskListGlobalFilter />
            )}
          </Row>
        </form>
      </CardBody>

    </React.Fragment>
  );
}

interface TableContainerProps {
  className ?: any;
    columns ?: any;
    data ?: any;
    isGlobalSearch ?: any;
    isGlobalFilter ?: any;
    isProductsFilter ?: any;
    isCustomerFilter ?: any;
    isOrderFilter ?: any;
    isContactsFilter ?: any;
    isCompaniesFilter ?: any;
    isLeadsFilter ?: any;
    isCryptoOrdersFilter ?: any;
    isInvoiceListFilter ?: any;
    isTicketsListFilter ?: any;
    isNFTRankingFilter ?: any;
    isTaskListFilter ?: any;
    isAddOptions ?: any;
    isAddUserList ?: any;
    handleOrderClicks ?: any;
    handleUserClick ?: any;
    handleCustomerClick ?: any;
    handleTaskClick ?: any;
    isAddCustList ?: any;
    customPageSize ?: any;
    tableClass ?: any;
    theadClass ?: any;
    trClass ?: any;
    thClass ?: any;
    divClass ?: any;
    SearchPlaceholder ?: any;
    handleLeadClick ?:any;
    handleCompanyClick ?:any;
    handleContactClick ?:any;
    handleTicketClick ?:any;
}

const TableContainer = ({
  
  className,
  columns,
  data,
  isGlobalSearch,
  isGlobalFilter,
  isProductsFilter,
  isCustomerFilter,
  isOrderFilter,
  isContactsFilter,
  isCompaniesFilter,
  isLeadsFilter,
  isCryptoOrdersFilter,
  isInvoiceListFilter,
  isTicketsListFilter,
  isNFTRankingFilter,
  isTaskListFilter,
  isAddOptions,
  isAddUserList,
  handleOrderClicks,
  handleUserClick,
  handleCustomerClick,
  isAddCustList,
  customPageSize,
  tableClass,
  theadClass,
  trClass,
  thClass,
  divClass,
  SearchPlaceholder,
  
} : TableContainerProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: {
        pageIndex: 0, pageSize: customPageSize, selectedRowIds: 0, sortBy: [
          {
            desc: true,
          },
        ],
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  const generateSortingIndicator = (column : any) => {
    return column.isSorted ? (column.isSortedDesc ? " " : "") : "";
  };

  const onChangeInSelect = (event : any) => {
    setPageSize(Number(event.target.value));
  };
//   const onChangeInInput = (event : any) => {
//     const page = event.target.value ? Number(event.target.value) - 1 : 0;
//     gotoPage(page);
//   };

  return (
    <Fragment>
      <Row className="mb-3">
      </Row>
      <div className={divClass}>
        <Table hover {...getTableProps()} className={tableClass}>
          <thead className={theadClass}>
            {headerGroups.map((headerGroup : any) => (
              <tr className={trClass} key={headerGroup.id}  {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column : any) => (
                  <th key={column.id} className={thClass} {...column.getSortByToggleProps()}>
                    {column.render("Header")}
                    {generateSortingIndicator(column)}
                    {/* <Filter column={column} /> */}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row : any) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr>
                    {row.cells.splice(0,7).map((cell : any) => {
                      return (
                        <td key={cell.id} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div>
      
      <Row className="align-items-center mt-2 g-3 text-center text-sm-start">
        <div className="col-sm">
            <div className="text-muted">Showing<span className="fw-semibold ms-1">{page.length}</span> of <span className="fw-semibold">{data.length}</span> Results
            </div>
        </div>
        <div className="col-sm-auto">
            <ul className="pagination pagination-separated pagination-md justify-content-center justify-content-sm-start mb-0">
                <li className={!canPreviousPage ? "page-item disabled" : "page-item"}>
                    <Link to="#"  className="page-link" onClick={previousPage}>Previous</Link>
                </li>
                {pageOptions.map((item : any, key : number) => (
                  <React.Fragment key={key}>
                      <li className="page-item">
                          <Link to="#" className={pageIndex === item ? "page-link active" : "page-link"} onClick={() => gotoPage(item)}>{item + 1}</Link>
                      </li>
                  </React.Fragment>
                ))}
                <li className={!canNextPage ? "page-item disabled" : "page-item"}>
                    <Link to="#"  className="page-link" onClick={nextPage}>Next</Link>
                </li>
            </ul>
        </div>
      </Row>
    </Fragment>
  );
};

TableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default TableContainer;