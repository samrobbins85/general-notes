import { useRef, useEffect } from "react";
import Sidebar from "../components/sidebar/sidebar";
import NavBar from "../components/navbar";
import { getTree } from "../lib/tree";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
export default function Homepage({ tree, sidebarVisible, setSidebarVisible }) {
	const router = useRouter();
	const node = useRef();
	const node2 = useRef();
	function toggleSidebar() {
		setSidebarVisible(!sidebarVisible);
	}

	useEffect(() => {
		if (open) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	useEffect(() => {
		router.events.on("routeChangeComplete", function () {
			setSidebarVisible(false);
		});
	}, []);

	const handleClickOutside = (e) => {
		if (
			node.current.contains(e.target) ||
			node2.current.contains(e.target)
		) {
			// inside click
			return;
		}
		// outside click
		setSidebarVisible(false);
	};

	function Home() {
		return (
			<div className="p-6 pt-24 pb-12 flex justify-center">
				<link
					href="https://fonts.googleapis.com/css?family=Cookie"
					rel="stylesheet"
				></link>
				<div className="grid w-full">
					<div className="text-center text-6xl font-extrabold leading-none tracking-tight">
						<h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 text-center">
							{"Sam's Notes"}
						</h1>
					</div>

					<h2 className="text-lg text-gray-700 pt-6 text-center">
						Notes taken for a variety of reasons
					</h2>
				</div>
			</div>
		);
	}

	return (
		<>
			<Head>
				<title>{"Sam's Notes"}</title>
				<meta name="description" content="Notes from my education" />
				<meta
					property="og:image"
					content={
						"https://og.csnotes.me/**Sam's%20Notes**%20/.png?theme=dark&md=1&fontSize=200px"
					}
				></meta>
			</Head>

			<Layout
				main={<Home />}
				sidebar={
					<Sidebar toggle={sidebarVisible} ref={node} tree={tree} />
				}
				navbar={<NavBar toggleFunction={toggleSidebar} ref={node2} />}
				isFooter={false}
				toggle={sidebarVisible}
			/>
		</>
	);
}

export async function getStaticProps() {
	const tree = getTree();
	return {
		props: {
			tree,
		},
	};
}
