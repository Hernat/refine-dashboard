import { Avatar } from "antd";
import { getNameInitials } from "../utilities";

type Props = {
    name?: string;
    style?: React.CSSProperties;
    src?: string;
    size?: "large" | "default" | "small";
    shape?: "square" | "circle";
};

const CustomAvatar = ({ name, style, shape, ...rest }: Props) => {
    return (
        <Avatar
            shape={shape}
            alt="John Doe"
            size="default"
            style={{
                backgroundColor: "#f56a00",
                display: "flex",
                alignItems: "center",
                border: "none",
                ...style,
            }}
            {...rest}
        >
            {getNameInitials(name || "")}
        </Avatar>
    );
};

export default CustomAvatar;
