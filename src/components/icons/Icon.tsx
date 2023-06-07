import { FunctionComponent } from "react";
import { SvgIconProps } from "@/models/app.model";

export const Icon: FunctionComponent<SvgIconProps> = ({
    fillColor = "fill-on",
    path = "",
    handleClick = () => {},
    width = 20,
    height = 20,
}) => {
    const pathComponent =
        typeof path === "string" ? (
            <path d={`${path}`} fill={`${fillColor}`} />
        ) : (
            path.map((item, index) => (
                <path key={index} d={`${item}`} fill={`${fillColor}`} />
            ))
        );

    const iconClass = width === 20 && height === 20 ? "w-5 h-5" : "w-8 h-8";

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            xmlns="http://www.w3.org/2000/svg"
            className={`${iconClass} ${fillColor}`}
            onClick={handleClick}
        >
            {pathComponent}
        </svg>
    );
};
