import React from 'react';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
 // Replace with the correct chart component for survey requests
 import { Chart } from 'react-chartjs-2'; // Example chart library

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Registering components used in the chart
ChartJS.register(Title, Tooltip, Legend, ArcElement);

export const SurveyRequestsCharts = ({ dataColors, dataType }:any) => {
    // Assuming dataColors is a string like '["--vz-primary", "--vz-success", "--vz-warning"]'
    const colors = ['#878a99','rgb(64, 81, 137)','rgb(10, 179, 156)']// Convert string to array
    
    const data = {
        labels: ['Pending', 'Completed', 'In Progress'], // Example statuses
        datasets: [{
            data: [50, 30, 20], // Example data
            backgroundColor: colors, // Apply colors
            borderWidth: 1,
        }],
    };

    return (
        <Pie
            data={data}

            options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (context.parsed) {
                                    label += ': ' + context.parsed + '%';
                                }
                                return label;
                            }
                        }
                    }
                }
            }}
        />
    );
};

 

const SurveyRequests = () => {
    return (
        <React.Fragment>
            <Col >
                <Card className="card-height-100" >
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Survey Sites Status</h4>
                        <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown">
                                <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                    <span className="text-muted">Actions<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem>Download Report</DropdownItem>
                                    <DropdownItem>Export Data</DropdownItem>
                                    <DropdownItem>Import Data</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </CardHeader>

                    <div className="card-body" style={{display:'flex',justifyContent:'center',}}>
                        {/* Assuming SurveyRequestsCharts is the component for the new chart */}
                        <SurveyRequestsCharts 
                            dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
                            dataType="surveyRequests"
                        />
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default SurveyRequests;
