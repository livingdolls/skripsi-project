import { Search } from "@mui/icons-material";
import { Box, CircularProgress } from "@mui/material";
import { useState } from "react";
import MainInput from "../../components/Form/MainInput";
import Layout from "../../components/Layout";
import MainButton from "../../components/MainButton";
import BoxResult from "../../components/pencarian/BoxResult";

const Pencarian = () => {
	const [query, setQuery] = useState();
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState({
		jml: 0,
		data: [],
	});
	const [queryInfo, setQueryInfo] = useState({
		bobot: [],
		product: [{ result: 0 }],
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/_getPencarian.php`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: query,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setResult(data);
				setLoading(false);
			});

		await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/API/_queryInfo.php`)
			.then((res) => res.json())
			.then((d) => setQueryInfo(d));
	};

	return (
		<Layout judulmenu="Pencarian Jurnal">
			<Box marginBottom={1}>
				<form onSubmit={handleSubmit}>
					<MainInput
						placeholder="Kata Kunci Pencarian"
						size="small"
						onChange={(e) => setQuery(e.target.value)}
						sx={{ width: "629px" }}
					/>

					<MainButton type="submit" sx={{ padding: "7px" }}>
						{/* <Search /> */}
						Cari
					</MainButton>
				</form>
			</Box>

			{loading ? (
				<CircularProgress sx={{ ml: "300px" }} />
			) : (
				<BoxResult result={result} queryInfo={queryInfo} />
			)}
		</Layout>
	);
};

export default Pencarian;
