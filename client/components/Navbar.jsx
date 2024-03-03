import {
	Article,
	FormatAlignJustify,
	Functions,
	Home,
	Password,
	Percent,
	Search,
} from "@mui/icons-material";
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const menus = [
	{ jdl: "Home", link: "/", icon: <Home /> },
	{ jdl: "Pencarian", link: "/pencarian", icon: <Search /> },
	{ jdl: "Data Jurnal", link: "/jurnal", icon: <Article /> },
	{
		jdl: "Text Processing",
		link: "/preprocessing",
		icon: <FormatAlignJustify />,
	},
	{ jdl: "Pembuatan Index", link: "/buatindex", icon: <Password /> },
	{ jdl: "TF-IDF", link: "/tfidf", icon: <Functions /> },
	{ jdl: "Cosine Similarity", link: "/cosinesimilarity", icon: <Percent /> },
];

const Navbar = () => {
	const [selectedIndex, setSelectedIndex] = useState();

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	return (
		<Box
			sx={{ backgroundColor: "hsl(0, 0%, 100%)", height: "100vh" }}
			borderRadius={2}
		>
			<List>
				<ListItem
					disablePadding
					key={"info"}
					sx={{
						backgroundColor: "#ff6b81",
						mt: -1,
						mb: 1,
						p: 1.5,
						borderRadius: "5px 5px 0 0",
					}}
				>
					<ListItemText>
						<Typography
							variant="button"
							fontSize={17}
							sx={{ color: "#fff", ml: 1 }}
						>
							Menu
						</Typography>
					</ListItemText>
				</ListItem>

				{menus.map((menu) => {
					return (
						<ListItem
							disablePadding
							key={menu.jdl}
							sx={{ paddingX: 2 }}
						>
							<ListItemButton
								selected={selectedIndex === menu.jdl}
								onClick={(event) =>
									handleListItemClick(event, menu.jdl)
								}
								sx={{
									"&.Mui-selected": {
										"&:hover": {
											backgroundColor: "#ff6b81",
										},
										backgroundColor:
											"rgba(255, 107, 129, .5)",
									},
								}}
							>
								<ListItemIcon>{menu.icon}</ListItemIcon>
								<Link href={menu.link}>
									<ListItemText primary={menu.jdl} />
								</Link>
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		</Box>
	);
};

export default Navbar;
