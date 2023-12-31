import * as React from 'react'
const SvgGithub = props => (
	<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none" {...props}>
		<mask
			id="Github_svg__a"
			width={26}
			height={26}
			x={0}
			y={0}
			maskUnits="userSpaceOnUse"
			style={{
				maskType: 'luminance'
			}}
		>
			<path fill="#fff" d="M0 0h26v26H0V0Z" />
		</mask>
		<g mask="url(#Github_svg__a)">
			<path
				fill="#000"
				fillRule="evenodd"
				d="M13 0C5.817 0 0 5.817 0 13c0 5.753 3.721 10.611 8.889 12.334.65.114.894-.276.894-.618 0-.309-.017-1.332-.017-2.421-3.266.601-4.111-.796-4.371-1.528-.146-.373-.78-1.527-1.332-1.836-.455-.244-1.105-.845-.017-.861 1.024-.016 1.755.942 1.999 1.332 1.17 1.967 3.039 1.414 3.786 1.073.114-.845.455-1.414.829-1.739-2.893-.325-5.915-1.446-5.915-6.418 0-1.414.504-2.584 1.332-3.494-.13-.325-.585-1.658.13-3.445 0 0 1.09-.341 3.576 1.332a12.063 12.063 0 0 1 3.25-.439c1.104 0 2.21.147 3.25.44 2.486-1.69 3.575-1.333 3.575-1.333.715 1.787.26 3.12.13 3.445.828.91 1.332 2.063 1.332 3.494 0 4.988-3.039 6.093-5.931 6.418.471.406.877 1.186.877 2.405 0 1.739-.016 3.137-.016 3.575 0 .341.244.748.894.618A13.022 13.022 0 0 0 26 13c0-7.183-5.817-13-13-13Z"
				clipRule="evenodd"
			/>
		</g>
	</svg>
)
export default SvgGithub
