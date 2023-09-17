import { FaFileAlt, FaCode, FaFilePowerpoint } from 'react-icons/fa';

const labs = [
	{
		number: 1, title: "Setup", dueDate: "Sept 10-12", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Wts8n6FapMT8q7LNWx_dKKHdnWV55gSs/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/14cHRHSk8mHcJ5svwOO-IFBVyAy96o0ga7pMQ0h-Htfs/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 2, title: "Racket Introduction", dueDate: "Sept. 17-19", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1K_IjVi6iqAk7tjXAdcc2-jmez43TDhqG/view?usp=sharing", label: "Handout" },
		    { icon: <FaCode />, link: "https://drive.google.com/drive/folders/1kbsT5WUKAJ4IsWrcWZVDnMzFSg5qIshQ?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1ysUHKDtrCXctbvG4s9aFWvU-M2WsSU1Gz1d1IfD82m8/edit?usp=sharing", label: "Slides" },
		]
	},
	// {
	// 	number: 3, title: "Recursion", dueDate: "Sept. 25-27", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1mA3N_i4VrsNg9F7EQcp-QmUO4KnewBX2/view?usp=sharing", label: "Handout" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/16M8xl1tquvMvq6J0CXGdkCWdbGJhy45T0gU_OrL2aSA/edit?usp=sharing", label: "Slides" },
	// 	]
	// },
	// {
	// 	number: 4, title: "Natural Number Recursion", dueDate: "Oct. 2-4", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1mMNHmZ5P8Y4v1s5FmTbF8vOZ_00Z44Nn/view?usp=sharing", label: "Handout" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1Qhgdux3jjVvY_AUloBOMkHUwv0weCXU56r7orZuYwMU/edit?usp=sharing", label: "Slides" },
	// 	]
	// },
	// {
	// 	number: 5, title: "Search", dueDate: "Oct. 9-11", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/10hff9rQVvD2AdnxbWSJJtHaa5AV_YrrB/view?usp=sharing", label: "Handout" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1ojVxSXQCCbGR6QT8TnBbV4LXFOVnXbK0Lr4rucSKkEk/edit?usp=sharing", label: "Slides" },
	// 	]
	// },
	// {
	// 	number: 6, title: "Reason", dueDate: "Oct. 16-18", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1eHZ-pbu_3fZrcXSCWChOoxBofsCrYjaR/view?usp=sharing", label: "Handout" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1pxbfSGOcdiV5KobV_y4XmHPCwSeYAcCRN7LLe2Pxh8w/edit?usp=sharing", label: "Slides" },
	// 	]
	// },
	// {
	// 	number: 7, title: "Debugging", dueDate: "Oct. 23-25", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1IDhloV9lMgovaAWEpebpsuk43-Y1gmxb/view?usp=sharing", label: "Handout" },
	// 		{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1ddIVugUnSkydJ3Ui4RDcwkm-C5Uig_oa?usp=sharing", label: "Source Code" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1Ihxv5ARYAJ3iIYZpH-QfCP5Lkbei-Re5Ng587F6nVd0/edit?usp=sharing", label: "Slides" },
	// 	]
	// },
	// {
	// 	number: 8, title: "Environments", dueDate: "Oct. 30-Nov. 1", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1dgTybETv9x-LQKQ8sxVWM3aJJOH6ZkXt/view?usp=sharing", label: "Handout" },
	// 		{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1JHlnigz8lNnbHOcdpRAOgqVm63HB61FO?usp=sharing", label: "Source Code" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1ZT6dq_l59f65TiW25PzwO1NtJcshFyzynGXQUpfbSyc/edit?usp=sharing", label: "Slides" },
	// 	]
	// },
	// {
	// 	number: 9, title: "ADTs", dueDate: "Nov. 6-8", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Wce8ERh3YIqxaG6T0OHofPEDoe-reoQw/view?usp=sharing", label: "Handout" },
	// 		{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/16l8rSdKltlWppq0gEtmqzDCrBX-RsuSw?usp=sharing", label: "Source Code" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1y-uwJ8xhRvInkyYMgNTcilWf23ve8E4yjBptwYye9oY/edit?usp=sharing", label: "Slides" },
	// 	]
	// },
	// {
	// 	number: 10, title: "Game", dueDate: "Nov. 13-15", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1caf8qhby-jFLF0GAUC9Dp2QIy7IThWr9/view?usp=sharing", label: "Handout" },
	// 		{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1_sESZXZtsocNMIMynH1ToDZF_JJgJUer?usp=sharing", label: "Source Code" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1wks1fS48p_eRfEBeEhrcyjgsKNSCsDvQfFLiYzJ6kjg/edit?usp=sharing", label: "Slides" },
	// 	]
	// },
	// {
	// 	number: 11, title: "Sort", dueDate: "Nov. 20-22", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1T7l_3ZhNv3cuaziqMao6hxl-dau4qr6N/view?usp=sharing", label: "Handout" },
	// 		{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1qygzXNgaH6triWc7dxpuAnzx_zBmrWix?usp=sharing", label: "Source Code" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1DLX4sRgqyCOclEE6QEBv-iEtzBz7r9jLXa10SF9Crz8/edit?usp=sharing", label: "Slides" },
	// 	]
	// },

]

export default labs;