import DancelImage from "@images/providers/dancel.png"
import GoradiaImage from "@images/providers/goradia.jpg"
import { StaticImageData } from "next/image"

export type Provider = {
	name: string
	bio: string
	image: StaticImageData
}

export const PROVIDERS: Provider[] = [
	{
		name: "Dr. Rita U. Goradia",
		bio: "Dr. Rita Goradia is a passionate Family Practitioner with over 20 years of experience. Her primary interests include general/primary care, adolescent care, geriatric care, and women's health. She manages patients in both outpatient offices, primarily in her Rahway office. She is further affiliated with Hackensack Meridian at JFK Hospital in Edison, NJ, as well as Robert Wood Johnson Rahway Hospital in Rahway, NJ. Additionally, she sees patients at several nursing homes in the Central NJ area. Through her valuable experience and many affiliations, Dr. Goradia is able to provide complete continuity of care for patients in her wide range of services.",
		image: GoradiaImage,
	},
	{
		name: "Dr. Concepcion Dancel",
		bio: "Dr. Concepcion Dancel is an experienced Family Practitioner who also brings an additional 30+ years of experience as an ER physician. She is a compassionate provider with outstanding interpersonal and communication skills. Due to her many years of experience in providing empathetic patient care, she is able to efficiently and successfully provide complete and comprehensive outpatient care in an extremely dedicated, patient-focused manner. You can see Dr. Dancel primarily at the Elizabeth office.",
		image: DancelImage,
	},
]
