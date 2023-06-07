export interface SvgIconProps {
    width?: number;
    height?: number;
    path?: string | string[];
    fillColor: string;
    handleClick?(): void;
}
