import { SITE_NAME } from "@/constants"
import { NextSeo } from "next-seo"

const IndexPage: React.FC = () => {
	return (
		<>
			<NextSeo titleTemplate="%s" title={SITE_NAME} />
			<div style={{ height: 2000 }}>
				Elit qui ea anim voluptate consectetur non amet.In ullamco ullamco irure
				deserunt ipsum occaecat commodo do exercitation aliqua ea adipisicing
				non duis.Excepteur occaecat nulla labore pariatur mollit magna
				incididunt officia.Aute aliqua magna culpa pariatur tempor ea duis
				mollit.Ea aute est proident incididunt sint laboris.Qui ex commodo ipsum
				nulla qui.Exercitation ipsum nostrud eu consequat sint sunt aliquip anim
				id ea.
			</div>
		</>
	)
}

export default IndexPage
