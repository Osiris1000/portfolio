export interface CardProps {
	icon?: any;
	svg?: string;
	title: string;
	subtitle: string;
}

import person from "../assets/person.svg";
import leads from "../assets/leads.svg";
import handshake from "../assets/handshake.svg";
import social from "../assets/social-media.svg";
import organic from "../assets/organic.svg";
import standout from "../assets/standout.svg";
import audience from "../assets/audience.svg";
import trend from "../assets/trend.svg";
import search from "../assets/search.svg";
import sociall from "../assets/social.svg";
// import organic from "../assets/organic.svg";
export const problems: CardProps[] = [
	{
		icon: person,
		title: "Lost in the Digital Crowd",
		subtitle:
			" Today's digital landscape is saturated. Cutting through the noise and capturing audience attention requires a strategic approach to set your brand apart.",
	},

	{
		icon: leads,
		title: " Leads Not Converting",
		subtitle:
			"Attracting visitors is just the first step. Are they converting into leads? Traditional methods might not resonate with your target audience. We help bridge the gap with targeted strategies.",
	},
	{
		icon: handshake,
		title: "Clicks Don't Equal Customers",
		subtitle:
			"Clicks are valuable, but true success lies in converting them into loyal customers. We help you navigate the conversion challenge and build lasting customer relationships.",
	},
	{
		icon: social,
		title: "Missing the Social Media Wave",
		subtitle:
			"We bridge the gap. Engage your audience, boost brand awareness, and drive results with our expert social media marketing strategies.",
	},
	{
		icon: organic,
		title: "Struggling with Organic Reach",
		subtitle:
			"Our SEO mastery unlocks the power of organic traffic and lead generation. We navigate the complexities of search engines to propel your website to the top, attracting qualified leads who are actively searching for your offerings.",
	},
];

export const solutions: CardProps[] = [
	{
		icon: audience,
		title: "Captivate Your Audience",
		subtitle:
			"Words that ignite engagement. Content that resonates deeply. Calls to action that drive results.",
	},
	{
		icon: standout,
		title: "Stand Out From the Crowd",
		subtitle:
			" Unleash Your Brand Identity. Make a lasting impression in today's competitive landscape.",
	},
	{
		icon: trend,
		title: "Design That Converts",
		subtitle:
			"Visually Captivating. Conversion-Driven. Designs that not only impress but get results.",
	},
	{
		icon: search,
		title: "SEO optimization",
		subtitle:
			"Optimize your website content and social media posts with relevant keywords to improve search ranking and organic reach.",
	},
	{
		icon: sociall,
		title: "Social media engagement",
		subtitle:
			"Create shareable content, run interactive campaigns, and actively engage with your audience on social media platforms.",
	},
];
