import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Chat from '../Chat';
import Widgets from 'pages/DashboardProject/Widgets';
import ProjectsOverview from 'pages/DashboardProject/ProjectsOverview';
import UpcomingSchedules from 'pages/DashboardProject/UpcomingSchedules';
import MyTasks from 'pages/DashboardCrm/MyTasks';
import TeamMembers from 'pages/DashboardProject/TeamMembers';
import ProjectsStatus from 'pages/DashboardProject/ProjectsStatus';
import ActiveProjects from 'pages/DashboardProject/ActiveProjects';
import BalanceOverview from 'pages/DashboardCrm/BalanceOverview';
import SurveyMap from './SurveyMap'
import SurveyRequests from './SurveyManagement';



const SkyfireAnalytics = () => {
    document.title=" Skyfire - Admin Dashboard";
    return (
        <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BreadCrumb title="Projects" pageTitle="Dashboards" />
                <Row className="project-wrapper">
                    <Col xxl={8}>
                        <Widgets />
                        <ProjectsOverview />
                    </Col>
                    <Row >
                    <SurveyRequests />
                    <BalanceOverview />
                    </Row>
                 
                </Row>
                <Row >
                   
                </Row>
                <Row>
                    <ActiveProjects />
                    <MyTasks />
                </Row>
                <Row>
                    <Col>
                        <SurveyMap/> {/* Add the SurveyMap component */}
                    </Col>
                </Row>
                <Row>
                    <TeamMembers />
                    <Chat />
                    <ProjectsStatus />
                </Row>
            </Container>
        </div>
    </React.Fragment>
    );
};

export default SkyfireAnalytics;