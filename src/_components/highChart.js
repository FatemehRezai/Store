import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { WidgetExtra } from '../_components/WidgetExtra';

//I use https://www.npmjs.com/package/highcharts-react-official 
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Load the full build.
var _ = require('lodash');

class MyChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            externalData: null,
            data: this.props.data || [],
            dropdownOpen: false,
            checkedChartType: true,
            type: 'column',
            title: { text: this.props.title },
            xAxis: { categories: MyChart._getTitle(props.data) },
            yAxis: { title: { text: 'قیمت' } },
            series: [{ name: 'قیمت', data: MyChart._getPrice(props.data), colorByPoint: true, }]
        };
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data !== prevState.data) {
            let _data = nextProps.data;
            console.log("_data", _data);
            let tempSeries = prevState.series.name === 'قیمت' ? [{ name: 'قیمت', data: MyChart._getPrice(_data) }] :
                                                                [{ name: 'موجودی', data: MyChart._getStock(_data) }];
            return {
                externalData: null,
                data: _data,
                xAxis: { categories: MyChart._getTitle(_data) },
                series: tempSeries,
            };
        }

        // No state update necessary
        return null;
    }


    toggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen });

    static _getTitle = (data) => {
        let res = [];
        data.map((item) => {
            return (
                res.push(item.title + item.productId)
            )
        });
        return res;
    };


    static _getPrice = (data) => {
        let res = [];
        data.map((item) => {
            return (
                res.push(item.price)
            )
        });

        return res;
    };

    static _getStock = (data) => {
        let res = [];
        data.map((item) => {
            return (
                res.push(item.stock)
            )
        });

        return res;
    };



    yAxisChangeHandler = (value) => {
        if (value === "price") {
            this.setState({
                yAxis: { title: { text: 'قیمت' } },
                series: [{ name: 'قیمت', data: MyChart._getPrice(this.props.data) }],
                xAxis: { categories: MyChart._getTitle(this.props.data) }
            })
        } else {
            this.setState({
                yAxis: { title: { text: 'موجودی' } },
                series: [{ name: 'موجودی', data: MyChart._getStock(this.props.data) }],
                xAxis: { categories: MyChart._getTitle(this.props.data) }
            })
        }
    }

    chartTypeChangeHandler = (value) => {
        this.setState({
            type: value,
            checkedChartType: !this.state.checkedChartType,
        })

    }



    render() {

        let options1 = {
            chart: {
                type: this.state.type,
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}"></span> <b>{series.name} </b> <b> {point.y} </b>'
            },
            title: this.state.title,
            xAxis: this.state.xAxis,
            yAxis: this.state.yAxis,
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                },
                pie: {
                    dataLabels: {
                        formatter: function () {
                            var sliceIndex = this.point.index;
                            var sliceName = this.series.chart.axes[0].categories[sliceIndex];
                            return sliceName
                        }
                    }
                }
            },
            series: this.state.series,
        }

        const renderWidgetExtra = () => {
            return <WidgetExtra type={'chart'} categoryObj={this.props.categoryObj} column={this.props.column} screenType={this.props.screenType} haveUnPin={this.props.haveUnPin} havePin={this.props.havePin} id={this.props.id} />;
        }

        return (
            <>
                <div id={this.props.id} className="w-100 mb-5 shadow-sm mySlideUp" style={{ maxWidth: "100%" }} > 
                    <div className="d-flex flex-row justify-content-between align-items-center p-1 border">
                        <div className="d-flex flex-row align-items-center m-3 p-2 shadow-sm rounded" id="chartContoroler">
                            <div className="pl-3 border-left">
                                <div className="form-check form-check-inline ">
                                    <input defaultChecked className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="price" onChange={(e) => this.yAxisChangeHandler(e.target.value)} />
                                    <label className="form-check-label px-1" htmlFor="inlineRadio1">قیمت</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="stock" onChange={(e) => this.yAxisChangeHandler(e.target.value)} />
                                    <label className="form-check-label px-1" htmlFor="inlineRadio2">موجودی</label>
                                </div>
                            </div>

                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="sm" className="px-3">
                                <DropdownToggle caret outline color="secondary">نوع نمودار</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem value="column" active={this.state.checkedChartType} onClick={(e) => this.chartTypeChangeHandler(e.target.value)} >میله ای</DropdownItem>
                                    <DropdownItem value="pie" active={!this.state.checkedChartType} onClick={(e) => this.chartTypeChangeHandler(e.target.value)}>دایره ای</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        {renderWidgetExtra()}
                    </div>

                    <div className="mb-5">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options1}
                        />
                    </div> 
                </div>
            </>
        )
    }
}
const myChartWithRouter = withRouter(MyChart);

export { myChartWithRouter as MyChart };

MyChart.propTypes = {
    data: PropTypes.array,
}
MyChart.defaultProps = {
    data: [],

}

