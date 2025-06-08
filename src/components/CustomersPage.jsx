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
  FaTable,
  FaPlus,
  FaSearch,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import Header from "./Header";
function CustomersPage() {
  const customers = [
    {
      company: "株式会社サンプル",
      person: "田中太郎",
      owner: "山田花子",
      phone: "03-1234-5678",
      email: "taro@sample.co.jp",
      industry: "IT・ソフトウェア",
      status: "新規",
      updated: "2024-12-05",
    },
    {
      company: "テスト商事株式会社",
      person: "佐藤花子",
      phone: "06-9876-5432",
      email: "sato@test-trading.co.jp",
      industry: "商社・卸売",
      status: "既存",
      updated: "2024-11-28",
    },
    {
      company: "デモ製造株式会社",
      person: "鈴木一郎",
      phone: "052-1111-2222",
      email: "suzuki@demo-manufacturing.co.jp",
      industry: "製造業",
      status: "重要",
      lastContact: "2024-06-15",
      updated: "2024-09-10",
    },
  ];
  const statusMap = {
    新規: "warning",
    既存: "success",
    重要: "primary",
  };

  return (
    <Container fluid>
      <Header title="顧客管理" />
      <div className="mb-3">
        <h3>顧客管理</h3>
        <small className="text-muted">顧客情報の管理</small>
      </div>
      <Card className="shadow-sm">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaTable className="me-2" />
            <h5 className="mb-0">顧客一覧</h5>
          </div>
          <Button variant="primary">
            <FaPlus className="me-1" />
            新規顧客追加
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
                <th>会社名</th>
                <th>担当者</th>
                <th>連絡先</th>
                <th>業界</th>
                <th>ステータス</th>
                <th>情報変更日</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr key={i}>
                  <td>{c.company}</td>
                  <td>
                    <FaUser className="me-1" />
                    {c.person}
                  </td>
                  <td>
                    <FaPhoneAlt className="me-1" />
                    {c.phone}
                    <br />
                    <FaEnvelope className="me-1" />
                    {c.email}
                  </td>
                  <td>{c.industry}</td>
                  <td>
                    <Badge bg={statusMap[c.status]}>{c.status}</Badge>
                  </td>
                  <td>{c.updated}</td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="me-2"
                    >
                      <FaEdit />
                    </Button>
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

export default CustomersPage;
