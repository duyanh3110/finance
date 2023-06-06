import { FunctionComponent } from "react";
import { SvgIconProps } from "@/models/app.model";

export const Icon: FunctionComponent<SvgIconProps> = ({
    fillColor = "fill-on",
    path = "",
}) => {
    const pathComponent =
        typeof path === "string" ? (
            <path d={`${path}`} fill={`${fillColor}`} />
        ) : (
            path.map((item, index) => (
                <path key={index} d={`${item}`} fill={`${fillColor}`} />
            ))
        );

    return (
        <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 ${fillColor}`}
        >
            {pathComponent}
        </svg>
    );
};
