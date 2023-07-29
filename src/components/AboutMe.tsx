import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AboutMe: FC<Props> = ({ className, ...props }) => {
	return (
		<div className="mb-12" {...props}>
			<h1 className="text-[30px] leading-9 font-semibold tracking-wide mb-6">About me 📝</h1>
			<p className="text-lg max-w-[90%] tracking-wide">
				Ac nam leo mi pulvinar quam ullamcorper cras vestibulum sagittis. Velit arcu ullamcorper
				mollis quis in. Vel tristique sit varius posuere lectus mauris consectetur scelerisque. Vel
				sapien egestas donec ipsum est tincidunt diam adipiscing eu. Porttitor molestie porta proin
				eleifend blandit mattis enim. <br /> <br />
				Facilisi adipiscing auctor erat tellus est eu. Non ultrices mauris eget etiam faucibus morbi
				varius volutpat. Turpis dictum sed purus eu enim ut. Ac interdum in ullamcorper amet viverra
				scelerisque fringilla id. Ut pharetra egestas tortor ac quis. Sodales vestibulum vivamus
				nulla integer.
			</p>
		</div>
	)
}
