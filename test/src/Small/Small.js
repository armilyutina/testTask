import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';

import Show from '../Show/Show';
import Loader from '../Loader/Loader';
import Highline from '../Highline/Highline';
import DetailView from '../DetailView/DetailView';
import TableSearch from '../TableSearch/TableSearch';

import './Small.css';

const SEARCH_PATH = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const SIZEPAGE = 4


class Small extends Component {

  state = { isLoading: true,
            result: [],
            switchOn: 'id',
            sortKey: '',
            row: null,
            currentPage: 0,
            search: '',
          }

  setRes = result => {
    this.setState({ isLoading: false,
                    result })
    console.log(result)
  }

  onRowSelect = row => {
      this.setState({ row: row })
  }

  onSort = sortKey => {
    const cloneData = this.state.result.concat();
    const sortType = this.state.switchOn === 'asc' ? 'desc' : 'asc';
    const sortedData = _.orderBy(cloneData, sortKey, sortType);
    this.setState({
      result: sortedData,
      switchOn: sortType,
      sortKey,
    })
  }


  handlePageClick = ({ selected }) => {
    this.setState({
      currentPage: selected
    })
  }

  async componentDidMount(){

    fetch(`${SEARCH_PATH}`)
      .then(data => data.json())
      .then(res => this.setRes(res))
      .catch(err => console.log('ERROR!'));
  }


    handleSearch = (search) => {
        this.setState({
          currentPage: 0,
          search
        })
    }


    filterData = () => {

      const { result, search } = this.state;

      if (!search) return result

      else {
        return result.filter(item => {
                  return item['firstName'].toLowerCase().includes(search.toLowerCase()) ||
                            item['lastName'].toLowerCase().includes(search.toLowerCase()) ||
                                item['email'].toLowerCase().includes(search.toLowerCase())}
                )
            }


      }


  render(){

    const { isLoading, result, switchOn, sortKey, row, currentPage } = this.state;

    const filteredData = this.filterData()

    const displayData = _.chunk(filteredData, SIZEPAGE)[currentPage]


    return(

        <div className = "container">

        {
          isLoading
          ? <Loader />
          : <Fragment>
              <div>
              <TableSearch onSearch = {this.handleSearch }/>
              <Highline onSort = {this.onSort}
                        sortKey = {sortKey}
                        switchOn = {switchOn} />
              <Show result = {displayData} onRowSelect = {this.onRowSelect} />
              </div>
            </Fragment>
        }

        {
          row ? <DetailView row = {row} /> : null
        }


        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={4}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          forcePage = {currentPage}
        />


        </div>
    );
  }
}


export default Small;
