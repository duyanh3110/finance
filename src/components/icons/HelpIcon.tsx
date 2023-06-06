import { FunctionComponent } from "react";
import { Icon } from "./Icon";
import { SvgIconProps } from "@/models/app.model";

export const HelpIcon: FunctionComponent<SvgIconProps> = ({
    fillColor = "fill-on",
    path = "M14.1667 2.02472H5.83334C3.33334 2.02472 1.66667 3.69139 1.66667 6.19139V11.1914C1.66667 13.6914 3.33334 15.3581 5.83334 15.3581V17.1331C5.83334 17.7997 6.57501 18.1997 7.12501 17.8247L10.8333 15.3581H14.1667C16.6667 15.3581 18.3333 13.6914 18.3333 11.1914V6.19139C18.3333 3.69139 16.6667 2.02472 14.1667 2.02472ZM10 12.1664C9.65001 12.1664 9.37501 11.8831 9.37501 11.5414C9.37501 11.1997 9.65001 10.9164 10 10.9164C10.35 10.9164 10.625 11.1997 10.625 11.5414C10.625 11.8831 10.35 12.1664 10 12.1664ZM11.05 8.70806C10.725 8.92473 10.625 9.0664 10.625 9.29973V9.47473C10.625 9.81639 10.3417 10.0997 10 10.0997C9.65834 10.0997 9.37501 9.81639 9.37501 9.47473V9.29973C9.37501 8.33305 10.0833 7.85805 10.35 7.67472C10.6583 7.46639 10.7583 7.32472 10.7583 7.10805C10.7583 6.69139 10.4167 6.34972 10 6.34972C9.58334 6.34972 9.24167 6.69139 9.24167 7.10805C9.24167 7.44972 8.95834 7.73305 8.61667 7.73305C8.27501 7.73305 7.99167 7.44972 7.99167 7.10805C7.99167 5.99972 8.89167 5.09972 10 5.09972C11.1083 5.09972 12.0083 5.99972 12.0083 7.10805C12.0083 8.05805 11.3083 8.53306 11.05 8.70806Z",
}) => {
    return <Icon fillColor={`${fillColor}`} path={`${path}`} />;
};