import Svg, { Path, SvgProps } from "react-native-svg";
export function EmailIcon(props: SvgProps) {
    return (<Svg width={36} height={36} viewBox="0 0 36 36" {...props}>
			<Path d="M6 30a2.889 2.889 0 01-2.119-.881A2.889 2.889 0 013 27V9c0-.825.294-1.531.881-2.119A2.889 2.889 0 016 6h24c.825 0 1.531.294 2.119.881C32.706 7.47 33 8.175 33 9v18c0 .825-.294 1.531-.881 2.119A2.889 2.889 0 0130 30H6zm12-10.5L6 12v15h24V12l-12 7.5zm0-3L30 9H6l12 7.5zM6 12V9v18-15z"/>
		</Svg>);
}
