import { Button, Card, Col, Row } from "antd";

const Products = () => {
  const styles = {
    container: {
      marginTop: 20,
    },
    title: {
      fontSize: "48px",
      fontWeight: "bold",
      background:
        "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      textTransform: "uppercase" as const, // Chuyển chữ thành in hoa
      letterSpacing: "2px", // Khoảng cách giữa các chữ
      textAlign: "center" as const,
      marginBottom: 20,
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.title}>Sản Phẩm</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5", // Màu nền nhẹ để làm nổi bật
        }}
      >
        <Row gutter={[24, 24]} justify={"center"} style={{ padding: "20px 0" }}>
          <Col span={6}>
            <Card
              hoverable
              style={{
                width: 240,
                display: "flex",
                flexDirection: "column", // Đảm bảo các phần tử trong card xếp theo cột
                height: "100%", // Chiều cao 100% cho tất cả các card
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <div style={{ fontSize: 20 }}>Sơn Dulux</div>
              <Button type="primary">Chi tiết</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{
                width: 240,
                display: "flex",
                flexDirection: "column", // Đảm bảo các phần tử trong card xếp theo cột
                height: "100%", // Chiều cao 100% cho tất cả các card
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <div style={{ fontSize: 20 }}>Sơn Dulux</div>
              <Button type="primary">Chi tiết</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{
                width: 240,
                display: "flex",
                flexDirection: "column", // Đảm bảo các phần tử trong card xếp theo cột
                height: "100%", // Chiều cao 100% cho tất cả các card
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <div style={{ fontSize: 20 }}>Sơn Dulux</div>
              <Button type="primary">Chi tiết</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{
                width: 240,
                display: "flex",
                flexDirection: "column", // Đảm bảo các phần tử trong card xếp theo cột
                height: "100%", // Chiều cao 100% cho tất cả các card
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <div style={{ fontSize: 20 }}>Sơn Dulux</div>
              <Button type="primary">Chi tiết</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Products;
