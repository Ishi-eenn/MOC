import React from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Table,
  Button,
  Badge,
  Form,
  InputGroup,
} from "react-bootstrap";
import {
  FaPlus,
  FaSearch,
  FaTable,
  FaUsers,
  FaDollarSign,
  FaChartLine,
  FaBullseye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import Header from "./Header";

function ProjectsPage() {
  const summaryData = [
    {
      title: "総案件数",
      value: "5件",
      change: "+2件 前月比",
      icon: <FaUsers />,
      positive: true,
    },
    {
      title: "総案件金額",
      value: "¥30,500,000",
      change: "+15% 前月比",
      icon: <FaDollarSign />,
      positive: true,
    },
    {
      title: "受注見込み金額",
      value: "¥20,850,000",
      change: "-5% 前月比",
      icon: <FaChartLine />,
    },
    {
      title: "受注率",
      value: "20%",
      change: "1/5件 受注",
      icon: <FaBullseye />,
      positive: true,
    },
  ];

  const projects = [
    {
      name: "ABC商事様 基幹システム導入",
      customer: "ABC商事株式会社",
      owner: "田中太郎",
      amount: "¥5,000,000",
      status: "商談中",
      prob: "70%",
      expected: "2024-03-15",
      updated: "2024-01-15",
    },
    {
      name: "XYZ製造 生産管理システム",
      customer: "XYZ製造株式会社",
      owner: "佐藤花子",
      amount: "¥8,000,000",
      status: "提案中",
      prob: "50%",
      expected: "2024-02-28",
      updated: "2024-01-14",
    },
  ];
  const statusMap = {
    商談中: "warning",
    提案中: "info",
    交渉中: "primary",
    成約: "success",
  };

  return (
    <Container fluid>
      <Header title="案件管理" />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3>案件管理</h3>
          <small className="text-muted">営業案件の進捗と管理</small>
        </div>
      </div>
      <Row className="g-4 mb-4">
        {summaryData.map((item, idx) => (
          <Col key={idx} sm={6} md={3}>
            <Card>
              <Card.Body>
                <Card.Title>
                  {item.title}
                  <span className="float-end">{item.icon}</span>
                </Card.Title>
                <h4>{item.value}</h4>
                {item.link ? (
                  <a href="#">{item.link}</a>
                ) : (
                  <small
                    className={item.positive ? "text-success" : "text-danger"}
                  >
                    {item.change}
                  </small>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Card className="shadow-sm">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaTable className="me-2" />
            <h5 className="mb-0">案件一覧</h5>
          </div>
          <Button variant="primary">
            <FaPlus className="me-1" />
            新規案件追加
          </Button>
        </Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col md={6} className="mb-2 mb-md-0">
              <InputGroup>
                <InputGroup.Text>
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control placeholder="会社名または担当者名で検索..." />
              </InputGroup>
            </Col>
            <Col md={3}>
              <Form.Select>
                <option>全てのステータス</option>
                <option>新規</option>
                <option>既存</option>
                <option>重要</option>
              </Form.Select>
            </Col>
          </Row>
          <Table hover responsive>
            <thead>
              <tr>
                <th>案件名</th>
                <th>顧客名</th>
                <th>担当者</th>
                <th>金額</th>
                <th>ステータス</th>
                <th>最終更新</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={i}>
                  <td>{p.name}</td>
                  <td>{p.customer}</td>
                  <td>{p.owner}</td>
                  <td>{p.amount}</td>
                  <td>
                    <Badge bg={statusMap[p.status]}>{p.status}</Badge>
                  </td>
                  <td>{p.updated}</td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="me-2"
                    >
                      <FaEdit />
                    </Button>
                    {/* <Button variant="outline-secondary" size="sm">
                      <FaTrash />
                    </Button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProjectsPage;
