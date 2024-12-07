import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Input, Layout, Space, Typography } from "antd";
import banner from "./anh/banner.jpg";
import logo from "./anh/logo.png";

const { Header } = Layout;
const { Text, Title, Paragraph } = Typography;
const { Search } = Input;

const HeaderApp = () => {
  const styles = {
    container: {
      position: "relative" as const,
      width: "100%",
      height: "60vh",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
    },
    overlay: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.4)", // Hiệu ứng làm tối ảnh
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "flex-end", // Đưa nội dung sang phải
      paddingRight: "5%", // Tạo khoảng cách từ lề phải
    },
    title: {
      color: "#1E90FF",
      fontWeight: "bold",
      fontSize: "48px",
    },
    subtitle: {
      color: "#FFFFFF",
      fontSize: "32px",
      marginBottom: "16px",
    },
    description: {
      color: "#FFFFFF",
      fontSize: "16px",
      marginBottom: "24px",
      maxWidth: "600px",
    },
    buttonGroup: {
      display: "flex",
      gap: "12px",
    },
    primaryButton: {
      backgroundColor: "#28a745",
      borderColor: "#28a745",
      color: "white",
    },
    secondaryButton: {
      backgroundColor: "#007bff",
      borderColor: "#007bff",
      color: "white",
    },
  };
  return (
    <div>
      <Header
        style={{
          background: "linear-gradient(90deg, #94c11f, #b2451a, #cc2b6c)",
          color: "white",
          height: "50px",
        }}
      >
        <div
          style={{
            margin: "0 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "50px",
          }}
        >
          <Space size={20}>
            <Space>
              <EnvironmentOutlined />
              <Text style={{ color: "white" }}>
                Số 260B, đường Phan Trung, KP2, Tân Mai, Biên Hòa - Đồng Nai
              </Text>
            </Space>
            <Space>
              <ClockCircleOutlined />
              <Text style={{ color: "white" }}>07:00 - 17:00</Text>
            </Space>
            <Space>
              <PhoneOutlined />
              <Text style={{ color: "white" }}>0903756409</Text>
            </Space>
          </Space>

          <Space size={15}>
            <FacebookOutlined style={{ fontSize: 18, cursor: "pointer" }} />
            <InstagramOutlined style={{ fontSize: 18, cursor: "pointer" }} />
            <TwitterOutlined style={{ fontSize: 18, cursor: "pointer" }} />
          </Space>
        </div>
      </Header>
      <div
        style={{
          margin: "20px 90px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Space size={10}>
          <img src={logo} width={80} height={80} alt="logo" />
        </Space>
        <Space size={20} style={{ fontWeight: "bold", marginRight: "10%" }}>
          <Search
            placeholder="Tìm kiếm ....."
            style={{ width: 350, marginRight: "80px", borderRadius: "10px" }}
          />
          <div>TRANG CHỦ</div>
          <div>GIỚI THIỆU</div>
          <div>SẢN PHẨM</div>
          <div>LIÊN HỆ</div>
        </Space>
      </div>
      <div style={styles.container}>
        <img src={banner} alt="banner" style={styles.image} />
        <div style={styles.overlay}>
          <div style={{ marginRight: 20 }}>
            <Title style={styles.title}>Sơn Phương Minh Nhật</Title>
            <Title level={3} style={styles.subtitle}>
              Đại Lý Sơn Cao Cấp
            </Title>
            <Paragraph style={styles.description}>
              Uy tín được đặt lên hàng đầu, một ngôi nhà đẹp cần một loại sơn
              chất lượng, hãy liên hệ sơn Phương Minh Nhật ngay để nhận nhiều ưu
              đãi và sơn chất lượng tốt nhất
            </Paragraph>
            <div style={styles.buttonGroup}>
              <Button type="primary" style={styles.primaryButton}>
                Xem Thêm
              </Button>
              <Button style={styles.secondaryButton}>Mua Ngay</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderApp;
