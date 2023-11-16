import { FaFileAlt, FaCode } from "react-icons/fa";



const homeworks = [
	{
		number: 1, title: "Warmup", dueDate: "Sept. 13, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/13vOoImg_P-vq04KKfFqF_3M9hehOz0x9/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 2, title: "Procedures", dueDate: "Sept. 20, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1pBCpTrQ8xJLtHygubBADJiUf1kPA8W3X/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 3, title: "Recursion", dueDate: "Sept. 27, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1BWWwzy9WTpx8V3-qegUyNry9wHa1dD5Z/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 4, title: "More Recursion & Higher Order Procedures", dueDate: "Oct. 4, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1IDBfY5b0rOfC49B0rwDS3Y4rDIZjfngU/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 5, title: "Higher Order Procedures and Subsets", dueDate: "Oct. 11, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1oGt4ElhQ6GFXmkAlFlXYbR7NbaLsKIK3/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/file/d/19F3MakrrLCwDlemxbwfgSaNWdR84H8NY/view?usp=sharing", label: "Source Code" },
		]
	},
	{
		number: 6, title: "K-Subsets and Matrices", dueDate: "Oct. 18, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1PCGpQnEslOxU3oWOeTPzPWqpvoonyrLI/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1ssPcNq9ZTTsjN0VjPFrDZHAbPJPtogV4?usp=sharing", label: "Source Code" },
		]
	},
	{
		number: 7, title: "Rackettecita", dueDate: "Oct. 25, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1cjJyeEXKM3RAnt-CFfEhKhtIvYdSPMpr/view?usp=share_link", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1_DXYqKTxz0jphW0L6EWZLF9IAqNuv8g-?usp=share_link", label: "Source Code" },
		]
	},
	{
		number: 8, title: "Practice & ADTs", dueDate: "Nov. 1, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1L940ZVfTnfLnNPiMm_4cR0MJgFbstACC/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1o_R4Li1E53CuPyA0aE8whYGkGZChMtfI?usp=sharing", label: "Source Code" },
		]
	},
	{
		number: 9, title: "Trees, Trees, ...and Lists", dueDate: "Nov. 15, 11 p.m. EST", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1eMq1A3V3lDkeLKdx6MwJtMJirJQSqCwG/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1KrYP4DlMpqWnn5HRv0fW2ya6lcH_-Jlv?usp=sharing", label: "Source Code" },
		]
	},
	{
		number: 10, title: "Game Tools", dueDate: "Nov. 22, 11 p.m. EST", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/17aymmaoD2zP7HhQW3Ad_lMjCItsuUDFv/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1aDCQ_dnzItte7fSW20Wu74vYbAmReJBW?usp=sharing", label: "Source Code" },
		]
	},
	// {
	// 	number: 11, title: "Final Exam", dueDate: "Dec. 9, 4 p.m. EST", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1a9aNUIx_pxNvrjGYok-ki9aWMHazCinz/view?usp=sharing", label: "Handout" },
	// 		{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/16Te-15wNcJ0IPAzD7hhHHxqzo9GImdV9?usp=sharing", label: "Source Code" },
	// 	]
	// }
]

export default homeworks;