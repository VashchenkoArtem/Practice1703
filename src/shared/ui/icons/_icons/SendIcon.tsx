import Svg, { Path, SvgProps } from "react-native-svg";
export function SendIcon(props: SvgProps) {
    return (<Svg width={30} height={30} viewBox="0 0 30 30" {...props}>
			<Path d="M3.75 25V5L27.5 15 3.75 25zm2.5-3.75L21.063 15 6.25 8.75v4.375L13.75 15l-7.5 1.875v4.375zm0 0V8.75v12.5z"/>
		</Svg>);
}
