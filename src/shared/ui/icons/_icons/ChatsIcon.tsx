import Svg, { Path, SvgProps } from "react-native-svg";
export function ChatsIcon(props: SvgProps) {
    return (<Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
			<Path d="M2.667 22V4c0-.55.196-1.02.587-1.413A1.926 1.926 0 014.667 2h16c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413v12c0 .55-.196 1.02-.588 1.413a1.926 1.926 0 01-1.412.587h-14l-4 4zm3.15-6h14.85V4h-16v13.125L5.817 16z"/>
		</Svg>);
}
