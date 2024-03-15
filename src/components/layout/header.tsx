import { Layout, Space } from "antd";
import CurrentUser from "./current-user";

const Header = () => {
    return (
        <Layout.Header
            style={{
                background: "#fff",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                position: "sticky",
                top: 0,
                zIndex: 999,
            }}
        >
            <Space align="center" size="middle">
                <CurrentUser />
            </Space>
        </Layout.Header>
    );
};

export default Header;
