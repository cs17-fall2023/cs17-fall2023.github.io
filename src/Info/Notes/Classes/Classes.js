import { FaFileAlt, FaYoutube, FaFilePowerpoint } from 'react-icons/fa';

const classes = [
	{
		number: 0, title: "All Class Recordings", outDate: "Fall 2023", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1mSC4T3zlkwyU3nYbdt3mZbXHC0RBIugT/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=%223db23cb2-c393-4e7c-8d62-b06e00d79eef%22", label: "Recording" },
			// { icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1nGRI2vRghzUIwadPTml9mljqdFwiMYWP/edit?usp=sharing&ouid=102918815439366304366&rtpof=false&sd=false", label: "Slides" },
		],
		// tags: ["Racket"]
	},
	{
		number: 1, title: "Introduction", outDate: "Sept. 6", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1mSC4T3zlkwyU3nYbdt3mZbXHC0RBIugT/view?usp=sharing", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=%223db23cb2-c393-4e7c-8d62-b06e00d79eef%22", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/16aWjuG1v0QelG6LjzYpBITm54XodkCsH/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket"]
	},
	{
		number: 2, title: "Arithmetic, Types, and Keywords", outDate: "Sept. 8", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1C1AbPgZA27czZ1hzTyGYag132upG78jv/view?usp=sharing", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6c91723e-66e8-48f3-9631-af090024f5f7", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/18bFNDbVzt-O-9mqTPnh8AevVM5q7AW0s/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Definitions", "Evaluation"]
	},
	{
		number: 3, title: "Syntax Overview", outDate: "Sept. 11", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1hYpSU33UhRq3ymmLDZ5I8e2WlKnQ3G1-/view?usp=sharing", label: "Code" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6c04966b-e6b0-410d-8b7d-af090024f60e", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1Tob6exaEtvnXhyVsHq7btD03AtX237gw/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Definitions", "Expressions"]
	},
	{
		number: 4, title: "Syntax and Semantics", outDate: "Sept. 13", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1O24CUXHSmVKDcaWl9MOSeQSe1pTfjusQ/view?usp=sharing", label: "Code" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8c57237a-6738-41ab-9644-af1000ecc248", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1IbX-AWtthle0onAFCBJe0g7gR7hcvsbR/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket", "Procedures", "Evaluation"]
	},
	{
		number: 5, title: "Rules of Evaluation and Design Recipe", outDate: "Sept. 15", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://docs.google.com/document/d/1XMtNrjmHYJTfGeBtQYt7GGALl3eVNv3cYYTyVt9apGM/edit?usp=sharing", label: "Notes" },
			//{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4f9d2c79-269c-45ba-86bc-af1000ecc2a2", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/145CGMKTGDV2Woq8agwk1qpC3P1iqlShz/edit?usp=sharing&ouid=106417929176948026815&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Design Recipe", "Racket", "Evaluation"]
	},
	{
		number: 6, title: "Lists and List Procedures", outDate: "Sept. 18", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://docs.google.com/document/d/1z1V_BGoXBPl_B8Iy-sbCr19ceon1K8HWGwfVHm5cbkM/edit?usp=sharing", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d68a86f6-8c04-40dd-898d-af1000ecc2c4", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1KRckCd3QvgovEf1zeyA9tbeDMNtPl526/edit?usp=sharing&ouid=107485465646607954788&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Design Recipe", "Racket", "Evaluation", "Lists"]
	},
	{
		number: 7, title: "List Recursion", outDate: "Sept. 20", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1-55dDnftYDivNfQs0KUqnm-BbudHfEBu/view?usp=sharing", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5b617010-8ec9-4b6b-b8fb-af1000ecc2e6", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1t9kv4M7p9_J6lBxFH_aonRZxD1rq5GW6/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Lists", "Racket", "Recursion"]
	},
	{
		number: 8, title: "More Recursion", outDate: "Sept. 23", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://docs.google.com/document/d/1p4BllXUZ9-0NcgZRIb3eLbknBOvzl3oBLwaeG6DC6fc/edit?usp=sharing", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a73c6e60-0fb7-48b8-a679-af1000ecc305", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1lYTL9cE6FuvaPRzEljip7RFs3kMdrq3Q/edit?usp=sharing&ouid=106417929176948026815&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Lists", "Recursion", "Racket", "Analysis"]
	},
	{
		number: 9, title: "Even More Recursion", outDate: "Sept. 25", active: true,
		links: [
			//{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1j3-MBz_icvzY1AbnDBotrFS0aTX_EBRC/view?usp=sharing", label: "Notes" },
			//{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fdfc622f-8733-406d-bc1f-af1000ecc325", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1UXnLaYdbh5LoQaFUIczCJ3lFsTbeuicu/edit?usp=sharing&ouid=107485465646607954788&rtpof=true&sd=true", label: "Slides" }
		],
		tags: ["Recursion", "Racket"] //, "Analysis"]
	},
	{
		number: 10, title: "Two Argument Recursion and Analysis", outDate: "Sept. 27", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://docs.google.com/document/d/1360yA56UYUbaJJiRb-9aW88Usyqz6XRlPiCWJQp455U/edit?usp=sharing", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=23e80812-1115-4cfc-b802-af1000ecc34b", label: "Recording" },
			// { icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/13NscPigBi-m-2WoyEc0P4lM5ijAtCY8C/edit?usp=sharing&ouid=102918815439366304366&rtpof=false&sd=false", label: "Slides" },
		],
		tags: ["Recursion", "Analysis", "Racket"]
	},
	{
		number: 11, title: "Reverse and More Analysis", outDate: "Sept. 29", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://docs.google.com/document/d/1rmrd3IoVwaFlnsY37MAAEjdk1jIq_l59S9YLI5n36JE/edit?usp=sharing", label: "Notes" },
			//	{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=09df814d-4c63-4afd-b484-af1000ecc384", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1C5S7mBQ848G3dlcns4bGsOhPVaNnBFBU/edit?usp=sharing&ouid=106417929176948026815&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Recursion", "Analysis", "Racket"]
	},
	{
		number: 12, title: "Map, Lambda, and Analysis", outDate: "Oct. 2", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://docs.google.com/document/d/10Amy39NbbiuRrpebdx5BmaIXsFMwhZdfKPf0EfGT2Ig/edit?usp=sharing", label: "Notes" },
			//{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=de96ae25-0ed2-429c-80a5-af1000ecc3ab", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1qltbnA9KwwSSJZg-UymtvC2M8XieuKB3/edit?usp=sharing&ouid=107485465646607954788&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Recursion", "HOPs", "Lambda", "Analysis"]
	},
	{
		number: 13, title: "More Analysis", outDate: "Oct. 4", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://docs.google.com/document/d/1i6BInKEACbLhh62w7xSIB1EmGxWpnFD0qqxzpoqz_LU/edit?usp=sharing", label: "Notes" },
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Ov52dR93ip3bklTmnuwvmPwBsaRKuJ2K/view?usp=sharing", label: "Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1EoEuXIba6NX2Bxggk0D6PR20Phpy3ukc/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket", "Analysis"]
	},
	{
		number: 14, title: "Runtime, Stars and Stripes", outDate: "Oct. 6", active: true,
		links: [
			//	{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1pXgRzrTmcQLtPc_Aqrw7PeGLFqNQcmMU/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://drive.google.com/file/d/13cgdSozCStZCC87f6EnCdsc9YLjjyzRl/view?usp=sharing", label: "Addendum" },
			//	{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/16jnRyHlH0L6EMz9k_XEZDXGTvBSKbCSV/edit?usp=sharing&ouid=102918815439366304366&rtpof=false&sd=false", label: "Slides" },
		],
		tags: ["Racket", "Analysis"]
	},
	{
		number: 15, title: "Let and Combinatorics", outDate: "Oct. 11", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a09d5fbe-5c9a-4160-830f-af1000ecc452", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1XA0FwwkBcI1-696begHGYHBaecMiEe5_/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket"]
	},
	{
		number: 16, title: "Mutual Recursion, Closures, and ReasonML", outDate: "Oct. 13", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1TVartcPx-GmERIj7pD7qQlPb4A_dPmCE/view?usp=sharing", label: "Notes" },
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Ix5dpZOfgEbSCZHoTHsRq3Z4_j8by1IC/view?usp=drive_link", label: "Code" },
			//	{ icon: <FaCode />, link: "https://drive.google.com/file/d/1Ix5dpZOfgEbSCZHoTHsRq3Z4_j8by1IC/view?usp=sharing", label: "Code" },
			//	{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=08bc98f1-8e45-499d-9c3b-af1000ecc476", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/11pAjJqMYE13xv5pMlCs5_nWq62rHecZW/edit?usp=sharing&ouid=106417929176948026815&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Recursion", "ReasonML"]
	},
	{
		number: 17, title: "Recursion Diagrams Redux, ReasonML Part 2", outDate: "Oct. 16", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1L2xC5u-gecAi6LmbXZ4aH2DtVX_rwXZZ/view?usp=sharing", label: "Notes" },
			//	{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a8316926-cb1a-4679-b4a4-af1000ecc49c", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1TvC-kwvX3LoHAnZAEwn1_9iSPJaBXkxw/edit?usp=sharing&ouid=106417929176948026815&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML", "Rescursion"]
	},
	{
		number: 18, title: "The End of Racket, Reason continued", outDate: "Oct. 18", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1Mjt3WVSb_eTrg4syxcIFkZQdrl4fdmsZ/view?usp=sharing", label: "Notes" },
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1yp_syuKbIl9_I6VkYJ55ZGqax14J8LQ7/view?usp=sharing", label: "Code" },
			//	{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a58c0ac1-44c0-4686-a21d-af1000ecc4c8", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1-0xDN5QoVqad28jxqV9BjCtB511Yt5ts/edit?usp=sharing&ouid=106417929176948026815&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML"]
	},
	{
		number: 19, title: "Finishing up ReasonML, BNF, Trees", outDate: "Oct. 20", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1iKhfa851Ruq3oqZCPXzW5WaXtEVxaequ/view?usp=sharing", label: "Notes" },
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1_lXIzKw4TtfUPKxdATIo0-pYvJe9b27b/view?usp=sharing", label: "Code" },
			//{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Home.aspx", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1ILNgXgh5H9K6CXJHVc55bU46C3xmGFxN/edit?usp=sharing&ouid=106417929176948026815&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML", "BNF", "Trees"]
	},
	{
		number: 20, title: "Reason Trees", outDate: "Oct. 23", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1bPGUfYT4m1RvdvxlsXLm-RxR1KvjJ1Uw/view?usp=sharing", label: "Code" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=163909df-add1-47ff-9ef6-af1000ecc549", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1kR5jDH3gyaKqWQYAUwaAyTLPNDA8AH-i/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML", "Trees"]
	},
	{
		number: 21, title: "ADTs and Rackette", outDate: "Oct. 25", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9a1fe878-02c6-41d2-820f-af1000ecc577", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1Td8m1K_iHUP9TQDYBY04j1LcGpt1opD_/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ADTs", "Rackette"]
	},
	{
		number: 22, title: "Rackette Overview", outDate: "Oct. 28", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1aUaU5H5eRtdLCqshBXHW_yX7MPIDma65/view?usp=sharing", label: "Notes" },
		//	{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7b4c416e-0c09-4e6c-8730-af1000ecc5a9", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1xkjeNCAZcVUVrcScloUelfH5StoCSELB/edit?usp=sharing&ouid=106417929176948026815&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML", "Rackette", "Trees"]
	},
	{
		number: 23, title: "Analysis", outDate: "Oct. 30", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1KQxlQtzieMGVD2aPNVLcG_u8o2TkQG7j/view?usp=sharing", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e1a1279c-3ed5-49d3-8c53-af1000ecc5db", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1LRoreGmNaDobkw0mQoI_VGZIWx1d-_eL/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Analysis", "Big-O"]
	},
	{
		number: 24, title: "Log-based Analysis", outDate: "Nov. 1", active: true,
		links: [
			// { icon: <FaFileAlt/>, link: "", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e0709775-6cf3-4019-9ac6-af1000ecc608", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1WY1MUfEGfMj6D1vujDPsi-FRnE-Kjt-i/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Analysis", "Big-O"]
	},
	{
		number: 25, title: "Analysis Summary", outDate: "Nov. 3", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a7bf7468-f51d-48a5-b69f-af1000ecc62e", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1EfuoXARp9HTA1jwQxUVYCOJYL8ZRT0YI/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Analysis", "Set ADT"]
	},
	{
		number: 26, title: "Trees & Code Beautification", outDate: "Nov. 6", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1vp03btAkS89w4pOMipdAs0MXOtXe43AX/view?usp=sharing", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c3b1fd73-5b82-43fa-8949-af1000ecc652", label: "Recording" },
			// { icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1kIeH6K6ricKaUaWeI5qvqWQh-sk5rEsD/edit?usp=sharing&ouid=102918815439366304366&rtpof=false&sd=false", label: "Slides" },
		],
		tags: ["Trees"]
	},
	{
		number: 27, title: "Evaluation and Sorting", outDate: "Nov. 8", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/drive/folders/1xs80927P6598iWm_3oOsV4T8dL2H52An?usp=sharing", label: "Code" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e5195009-4c92-4743-aa63-af1000ecc67c", label: "Recording" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1jRJ2f18dixtqZmu7H2NYOD19ehQns1AT/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Sorting", "Analysis", "Evaluation"]
	},
	{
		number: 28, title: "Merge Sort", outDate: "Nov. 10", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1eIJNwnlSy8bEyEL0yd3KZ2ZQdA7KxOLZ/view?usp=sharing", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=677cf5cd-cb32-4369-a2f6-af1000ecc6a1", label: "Recording" },
			// { icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1SM2PyuRIT0RwL4eE00jNM-jKDIivH7xn/edit?usp=sharing&ouid=102918815439366304366&rtpof=false&sd=false", label: "Slides" },
		],
		tags: ["Sorting"]
	},
	{
		number: 29, title: "Intro to Game", outDate: "Nov. 13", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1crBDpJG7TbR_Ay4PbaesxnMSycqwG65-/view?usp=sharing", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=36fd200f-b62b-4740-b19f-af1000ecc6e1", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1YwR867Thy37nGjorXaIckRQhMV6xKuQ9/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Game"]
	},
	{
		number: 30, title: "Game - Game Trees / Virtual Trees", outDate: "Nov. 15", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "", label: "Notes" },
			// { icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7a705422-7a4c-4743-854a-af1000ecc6ff", label: "Recording" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/17Q5nK-UJ-RWcj4na0J4XS-3iUO1RpUJl/edit?usp=sharing&ouid=104062516653910080286&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Game", "Minimax"]
	},
	// {
	// 	number: 31, title: "Analysis Redux", outDate: "Nov. 18", active: false,
	// 	links: [
	// 		// { icon: <FaFileAlt/>, link: "", label: "Notes" },
	// 		{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=aa267fe3-2e50-42d6-afcf-af1000ecc71f", label: "Recording" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1kL9PHzunNfcFkNebLVUGomN6blSvwmjP/edit?usp=sharing&ouid=102918815439366304366&rtpof=false&sd=false", label: "Slides" },
	// 	],
	// 	tags: ["Analysis"]
	// },
	// {
	// 	number: 32, title: "Limits of Sorting & Computation", outDate: "Nov. 21", active: false,
	// 	links: [
	// 		{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/15l5NWxjGucdx0hhEvhIQ2WgXwDJDs9l7/view?usp=sharing", label: "Notes" },
	// 		{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=02370343-0ef5-4dae-92c0-af1000ecc741", label: "Recording" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1p4jVSDosm97rws7Dl9n2xKQeyNwGRT_4/edit?usp=sharing&ouid=102918815439366304366&rtpof=false&sd=false", label: "Slides" },
	// 	],
	// 	tags: ["Computational Limits"]
	// },
	// {
	// 	number: 33, title: "All You Need Is Lambda", outDate: "Nov. 23", active: false,
	// 	links: [
	// 		// { icon: <FaFileAlt/>, link: "", label: "Notes" },
	// 		{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=880eab6e-c4a4-4201-898d-af1000ecc76c", label: "Recording" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1PvfU8-LZa4yeLU5nd0gkYB15MSVWK7lK/edit?usp=sharing&ouid=102918815439366304366&rtpof=false&sd=false", label: "Slides" },
	// 	],
	// 	tags: ["Computational Limits"]
	// },
	// {
	// 	number: 34, title: "Miscellany", outDate: "Nov. 28", active: false,
	// 	links: [
	// 		// { icon: <FaFileAlt/>, link: "", label: "Notes" },
	// 		{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=259a581c-84f6-4958-b570-af1000ecc7b1", label: "Recording" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1Vl7q0nc3xe7gY7z6rFbxr-4g7vW25lUK/edit?usp=sharing&ouid=102918815439366304366&rtpof=false&sd=false", label: "Slides" },
	// 	],
	// 	tags: []
	// },
	// {
	// 	number: 35, title: "Stacks & Divide and Conquer", outDate: "Nov. 30", active: false,
	// 	links: [
	// 		// { icon: <FaFileAlt/>, link: "", label: "Notes" },
	// 		{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8e62b3f2-5d58-4efa-9e8a-af1000ecc7d3", label: "Recording" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1gjgiOUSCS8TyHYh7j-nczImTieZLW4no/edit?usp=sharing&ouid=102918815439366304366&rtpof=false&sd=false", label: "Slides" },
	// 	],
	// 	tags: []
	// },
	// {
	// 	number: 36, title: "Alternative Approach to Playing a Game", outDate: "Dec. 2", active: false,
	// 	links: [
	// 		// { icon: <FaFileAlt/>, link: "", label: "Notes" },
	// 		{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cb68363f-dbb3-40f7-8608-af1000ecc7f5", label: "Recording" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1jn3ObWwyw1ESIpUsCMj-Akf0wO8okLd3/edit?usp=sharing&ouid=102918815439366304366&rtpof=false&sd=false", label: "Slides" },
	// 	],
	// 	tags: []
	// },
	// {
	// 	number: 37, title: "Review", outDate: "Dec. 5", active: false,
	// 	links: [
	// 		// { icon: <FaFileAlt/>, link: "", label: "Notes" },
	// 		{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b3020bbb-3115-4a3f-985e-af1000ecc81b", label: "Recording" },
	// 		{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1brpwDPCYcX1iWUl5nf9OIrOJRzOu-CFU/edit?usp=sharing&ouid=102918815439366304366&rtpof=false&sd=false", label: "Slides" },
	// 	],
	// 	tags: ["Exam Review"]
	// },
]

export default classes;
