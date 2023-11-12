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
	{
		number: 3, title: "Recursion", dueDate: "Sept. 24-26", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/114FWstIK221L-bl4n6Mp-QWWhAKySEkE/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/19YyW03UQlhUvnkT1173aw-8LvtmM8dkGJoiwMfnpx7g/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 4, title: "Natural Number Recursion", dueDate: "Oct. 1-3", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1mCm52Bi2OoQiXg3IlPIdD8EGhp0ywXty/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1O7QF18zcczuU1maGRvDcuZpLqyy7OQ6fsr29VK9Bawc/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 5, title: "Search", dueDate: "Oct. 8-10", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1uACfzqYrkGmDkCD2WDX7h6ktcEH3zZqj/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1xdB9HVbdHfiuny3EyD1KlUu7nHK132cIlVwWSBS7gzw/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 6, title: "Reason", dueDate: "Oct. 15-17", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1fPDidyT2fPn5tvb4iuYP4S-VH3slOLJ2/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1h9R56BUvmH2pwJH3j0ocBjALrgxL2IzTdYyZ-aE2eAA/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 7, title: "Debugging", dueDate: "Oct. 22-24", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1IxX4w9CEuk1i6xH92zHf_F6mbtf65bmM/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1NRtNiup_BNQlFXSFrapCLNBlTBqcUpfX?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1Jqg7QDCz1AMMs8qaHqvaT_PL-pfe3oDPVg4wPmNfzgc/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 8, title: "Environments", dueDate: "Oct. 29-31", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Ou37Syhv0B4dxZoD_Q9XYnVExxEN_kDV/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1HlfY3fFLVq7r6fQlUraravQSiW-LjVg8?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1fdNtFGS_lom9ghLI1vOlDrKHLUdWSPjkYvWAMXE7eeo/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 9, title: "ADTs", dueDate: "Nov. 5-7", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1EPm9Xu_0fKwPUMgl2AXtNLOkWvQHXfck/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1ysAYeN6iY1-Pl6Zc_W-TsCyvoH3vAtNH?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1kJ3Gy9RADz0Pb5bST3joSKc4vSb2MaG_7NVLojRiFko/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 10, title: "Game", dueDate: "Nov. 12-14", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/14NDCu4Dsm8CUWz4afm8utfnRvlnVD739/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/15i0fscWWTaWWzsv1hIVwmpgmdBoptJCw?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1S8ci_rLj1PH2DuRlXMjUgJ9DpNa_JyGiwYJo1Mf_deI/edit?usp=sharing", label: "Slides" },
		]
	},
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