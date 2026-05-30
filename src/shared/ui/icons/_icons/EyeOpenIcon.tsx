import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";
export function EyeOpenIcon(props: SvgProps) {
    return (<Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
			<G clipPath="url(#clip0_1285_1524)" stroke="#1E1E1E" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
				<Path d="M1.333 16S6.667 5.333 16 5.333 30.667 16 30.667 16 25.333 26.667 16 26.667 1.333 16 1.333 16z"/>
				<Path d="M16 20a4 4 0 100-8 4 4 0 000 8z"/>
			</G>
			<Defs>
				<ClipPath id="clip0_1285_1524">
					<Path d="M0 0H32V32H0z"/>
				</ClipPath>
			</Defs>
		</Svg>);
}
