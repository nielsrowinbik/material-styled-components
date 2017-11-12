import { css } from 'styled-components';

const font = (weight, size, lineHeight) => css`
	font: ${weight} ${size}px/${lineHeight || size}px "Roboto", "Helvetica", "Arial", sans-serif;
`;

const typographyStyles = {
	display4: css`
		${ font(300, 112) }
		color: rgba(0, 0, 0, 0.54);		
		letter-spacing: -4px;
		margin: -1rem 0 3.5rem -.085em;
	`,
	display3: css`
		${ font(400, 56) }
		color: rgba(0, 0, 0, 0.54);	
		letter-spacing: -1px;
		margin: -8px 0 64px -.07em;
	`,
	display2: css`
		${ font(400, 45, 48) }
		color: rgba(0, 0, 0, 0.54);	
		letter-spacing: normal;
		margin: -.5rem 0 4rem -.07em;
	`,
	display1: css`
		${ font(400, 34, 40) }
		color: rgba(0, 0, 0, 0.54);	
		letter-spacing: normal;
		margin: -.5rem 0 4rem -.07em;
	`,
	headline: css`
		${ font(400, 24, 32) }
		color: rgba(0, 0, 0, 0.87);	
		letter-spacing: normal;
		margin: -.5rem 0 1rem -.06em;
	`,
	title: css`
		${ font(500, 20) }
		color: rgba(0, 0, 0, 0.87);	
		letter-spacing: 0.3px;
		margin: -.5rem 0 1rem -.05em;
	`,
	subheading2: css`
		${ font(400, 16, 28) }
		color: rgba(0, 0, 0, 0.87);	
		letter-spacing: 0.3px;
		margin: -.5rem 0 1rem -.06em;
	`,
	subheading1: css`
		${ font(400, 15, 24) }
		color: rgba(0, 0, 0, 0.87);
		letter-spacing: 0.3px;
		margin: -.313rem 0 .813rem -.06em;
	`,
	body2: css`
		${ font(500, 14, 24) }
		color: rgba(0, 0, 0, 0.87);
		letter-spacing: 0.3px;
		margin: -.25rem 0 .75rem 0;
	`,
	body1: css`
		${ font(400, 14, 24) }
		color: rgba(0, 0, 0, 0.87);
		letter-spacing: 0.3px;
		margin: -.25rem 0 .75rem 0;
	`,
	caption: css`
		${ font(400, 12, 20) }
		color: rgba(0, 0, 0, 0.54);
		letter-spacing: 0.3px;
		margin: -.5rem 0 1rem -.04em;
	`
};

const typography = (style) => css`
	${ typographyStyles[style] }
`;

export {
	font
};
export default typography;