import Svg, { Path, SvgProps } from "react-native-svg";
export function KeyIcon(props: SvgProps) {
    return (<Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
			<Path d="M28 2.667l-2.667 2.666m0 0l4 4L24.667 14l-4-4m4.666-4.667L20.667 10m-5.48 5.48A7.333 7.333 0 114.816 25.85a7.333 7.333 0 0110.37-10.369v-.001zm0 0l5.48-5.48" stroke="#1E1E1E" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
		</Svg>);
}
