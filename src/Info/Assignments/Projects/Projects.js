import { FaFileAlt, FaCode, FaFilePowerpoint, FaYoutube, } from 'react-icons/fa';

const projects = [
	{
		number: 1, title: "Bignum", dueDate: "Oct. 6, 11 p.m. EST", active: true,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1lJDyP-xxnyXPcaGzSLgaBkLTTN5uAaRJ/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/file/d/1LYroBj4gPKLeJ8Xi89Y67b8mFhvUHlXh/view?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/19E_SzC0B9_COAYOnpo7KVSk9sQwOq-TUXU3O5QSZXPE/edit?usp=sharing", label: "Gearup Slides" },
		    { icon: <FaYoutube />, link: "https://drive.google.com/file/d/1Ke2Hrt53y6ZJz6dqXd83ONwUz0E2tf3u/view?usp=sharing", label: "Gearup Recording" }
		]
	},
	{
		number: 2, title: "Rackette", dueDate: "Nov. 10, 11 p.m. EST", active: true,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1y_G-gdPjTdvpjFqmB90LnPyFEf6aHVZC/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1HcncukfTH8_r9jHAmMdCS78QtXLWtW5m?usp=sharing", label: "Source Code" },
		 	{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1-5xbYYGcYeCzIMep6YXTpc6C37oFiyZL-RiwXeR9t3g/edit?usp=sharing", label: "Gearup Slides" },
			{ icon: <FaYoutube />, link: "https://drive.google.com/file/d/15kwLQd1im55Ugqzfh_9AT6VDZI7TkR7i/view?usp=sharing", label: "Gearup Recording" }
		]
	},
	{
		number: 3, title: "Game", dueDate: "Dec. 4, 11 p.m. EST", active: true,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1_K7fMGxxMxoMplIn8xdsSy_ZATsK62JE/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1b-eW0nP3JwYXvQB6TuYztCTgydGDPCLd?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1JpcP_iQyfw7BKRVrRVucJlUOxdX3K-o8_viW1Wy2SU4/edit?usp=sharing", label: "Gearup Slides" },
			{ icon: <FaYoutube />, link: "https://drive.google.com/file/d/1F_4BmeCftwIRcpttiELq8EB2LqXS0WZc/view?usp=sharing", label: "Gearup Recording" }
		]
	}
]

export default projects;