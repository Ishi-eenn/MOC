import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Nav,
  Card,
  ProgressBar,
  ListGroup,
  Form,
  InputGroup,
  Navbar,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import {
  FaBell,
  FaHome,
  FaUsers,
  FaChartLine,
  FaCalendarAlt,
  FaClock,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";
import Header from "./components/Header";
import CustomersPage from "./components/CustomersPage";
import ProjectsPage from "./components/ProjectsPage";

// Sidebar navigation with NavLink
function Sidebar() {
  const links = [
    { to: "/", icon: <FaHome className="me-2" />, label: "ダッシュボード" },
    { to: "/customers", icon: <FaUsers className="me-2" />, label: "顧客管理" },
    {
      to: "/projects",
      icon: <FaChartLine className="me-2" />,
      label: "案件管理",
    },
    {
      to: "/activities",
      icon: <FaCalendarAlt className="me-2" />,
      label: "活動管理",
    },
    { to: "/reports", icon: <FaClock className="me-2" />, label: "レポート" },
  ];

  return (
    <Nav className="flex-column bg-light vh-100 p-3">
      <h5 className="mb-4">システム名</h5>
      {links.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.to}
          className={({ isActive }) =>
            `nav-link d-flex align-items-center mb-2 ${
              isActive ? "bg-secondary bg-opacity-10 rounded" : ""
            }`
          }
        >
          {link.icon}
          {link.label}
        </NavLink>
      ))}
    </Nav>
  );
}

// Dashboard page
function DashboardPage() {
  // ... (reuse Stats, Pipeline, Activities components) ...
  return (
    <Container fluid>
      <Header title="ダッシュボード" />
      <Stats />
      <Row>
        <Col lg={8}>
          <Pipeline />
        </Col>
        <Col lg={4}>
          <Activities />
        </Col>
      </Row>
    </Container>
  );
}

// Placeholder page components
const ActivitiesPage = () => (
  <Container fluid>
    <Header title="活動管理" />
    <Card className="shadow-sm">
      <Card.Body>活動管理ページのコンテンツ</Card.Body>
    </Card>
  </Container>
);
const ReportsPage = () => (
  <Container fluid>
    <Header title="レポート" />
    <Card className="shadow-sm">
      <Card.Body>レポートページのコンテンツ</Card.Body>
    </Card>
  </Container>
);

// Reusable components for dashboard
function Stats() {
  const data = [
    {
      title: "今月売上",
      value: "¥12,450,000",
      change: "+15.2% 前月比",
      positive: true,
    },
    { title: "新規案件", value: "24件", change: "+8件 前月比", positive: true },
    { title: "成約率", value: "32.5%", change: "+2.1% 前月比", positive: true },
    {
      title: "新規顧客",
      value: "2社",
      change: "-3社 前月比",
      positive: false,
    },
  ];
  return (
    <Row className="g-4 mb-4">
      {data.map((item, idx) => (
        <Col key={idx} sm={6} md={3}>
          <Card>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <h4>{item.value}</h4>
              <small className={item.positive ? "text-success" : "text-danger"}>
                {item.change}
              </small>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
function Pipeline() {
  const pipeline = [
    { label: "見込み客", count: 45, amount: 18500000 },
    { label: "提案中", count: 28, amount: 24200000 },
    { label: "交渉中", count: 15, amount: 32800000 },
    { label: "成約", count: 8, amount: 12450000 },
  ];
  const maxAmount = Math.max(...pipeline.map((p) => p.amount));
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>案件状況</Card.Title>
        <small>各段階の案件状況</small>
        {pipeline.map((stage, idx) => (
          <div key={idx} className="mt-4">
            <div className="d-flex justify-content-between mb-1">
              <span>{stage.label}</span>
              <span>
                {stage.count}件&nbsp;¥{stage.amount.toLocaleString()}
              </span>
            </div>
            <ProgressBar now={(stage.amount / maxAmount) * 100} />
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}
function Activities() {
  const activities = [
    {
      company: "株式会社ABC",
      activity: "商談",
      time: "10:00",
      status: "完了",
      color: "success",
    },
    {
      company: "XYZ商事",
      activity: "電話フォロー",
      time: "14:30",
      status: "予定",
      color: "primary",
    },
    {
      company: "DEF工業",
      activity: "提案書送付",
      time: "16:00",
      status: "完了",
      color: "success",
    },
    {
      company: "GHI株式会社",
      activity: "初回訪問",
      time: "明日 9:00",
      status: "予定",
      color: "primary",
    },
  ];
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>最近の活動</Card.Title>
        <small>今日の予定と完了した活動</small>
        <ListGroup variant="flush" className="mt-3">
          {activities.map((act, idx) => (
            <ListGroup.Item
              key={idx}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <span
                  className={`me-2 d-inline-block rounded-circle bg-${act.color}`}
                  style={{ width: "8px", height: "8px" }}
                ></span>
                {act.company}
                <br />
                <small className="text-muted">
                  {act.activity} - {act.time}
                </small>
              </div>
              <Badge bg={act.color}>{act.status}</Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

// Main App with routing
export default function App() {
  return (
    <Router>
      <Row className="g-0">
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10} className="p-4">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/reports" element={<ReportsPage />} />
          </Routes>
        </Col>
      </Row>
    </Router>
  );
}
