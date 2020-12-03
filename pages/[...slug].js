import { useRef, useEffect, useState } from "react";
import Sidebar from "../components/sidebar/sidebar";
import NavBar from "../components/navbar";
import { getTree, getPaths } from "../lib/tree";
import { getPostData } from "../lib/lecture";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import hydrate from "@/lib/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import {
	Definition,
	Important,
	Theorem,
	Corollary,
	Lemma,
	Problem,
	Example,
	Question,
	Answer,
	Exercise,
} from "@samrobbins/admonition-components";

import MyImg from "@/components/mdx/image";
import MyTable from "@/components/mdx/table";
import MyCode from "@/components/mdx/code";
import MyPre from "@/components/mdx/pre";
import slug from "remark-slug";
import remarkSmartypants from "@/lib/remarkSmartypants";
import math from "@/lib/remark-math";
import highlightCode from "@mapbox/rehype-prism";
import footnotes from "remark-footnotes";
import Layout from "@/components/layout";
const components = {
	table: MyTable,
	img: MyImg,
	code: MyCode,
	pre: MyPre,
	Definition,
	Important,
	Theorem,
	Corollary,
	Lemma,
	Problem,
	Example,
	Question,
	Answer,
	Exercise,
};
function Lecture({
	tree,
	postData,
	params,
	source,
	sidebarVisible,
	setSidebarVisible,
	exercise,
}) {
	const [tab, setTab] = useState("Notes");
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
			setTab("Notes");
		});
	}, []);

	useEffect(() => {
		if (postData.contentHtml !== undefined) {
			import("../lib/rendermath").then((renderMath) => {
				renderMath.default();
			});
		}
	}, [tab]);

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

	var list = [];
	if (postData.contentHtml === undefined) {
		var i;
		var temp = tree;
		for (i = 0; i < params.slug.length; i++) {
			temp = temp.children.find((x) => x.name === params.slug[i]);
		}
		list = temp;
	}

	function Main() {
		if (postData.contentHtml === undefined) {
			return <IntermediatePage />;
		} else {
			return <LecturePage />;
		}
	}

	function LecturePage() {
		return (
			<>
				<div className="p-6 pt-4 pb-4">
					<h1 className="text-4xl sm:text-5xl text-center font-semibold title">
						{postData.title}
					</h1>
					<h2 className="text-center text-lg text-gray-700">
						{params.slug[1].replace(/_/g, " ")}
					</h2>
					{postData.author && (
						<h3 className="text-center text-green-700 text-lg">
							Written by{" "}
							<a
								className="underline"
								href={
									"https://github.com/" +
									postData.author.github
								}
							>
								{postData.author.name}
							</a>
						</h3>
					)}
				</div>
				{postData.exercise && (
					<div className="flex justify-center pb-4">
						<div className="w-40 flex justify-between">
							<button
								onClick={() => {
									setTab("Notes");
								}}
								className={`border-b-4 hover:border-blue-400 ${
									tab === "Notes"
										? "border-blue-400"
										: "border-transparent"
								}`}
							>
								Notes
							</button>

							<button
								onClick={() => {
									setTab("Exercises");
								}}
								className={`border-b-4 hover:border-blue-400 ${
									tab === "Exercises"
										? "border-blue-400"
										: "border-transparent"
								}`}
							>
								Exercises
							</button>
						</div>
					</div>
				)}
				<hr className="pb-4" />
				{(tab === "Notes" || !postData.exercise) && (
					<div className="pb-6">
						<div className="prose pb-6 mx-auto px-4">
							{hydrate(source, { components })}
						</div>
						<div className="flex justify-center">
							<a
								className="flex content-center hover:underline text-blue-700"
								href={
									"https://github.com/samrobbins85/general-notes/blob/main/notes/" +
									params.slug.join("/") +
									".md"
								}
							>
								<svg
									className="h-4 pr-2 self-center"
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>GitHub icon</title>
									<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
								</svg>
								<p>Edit this page on GitHub</p>
							</a>
						</div>
					</div>
				)}
				{tab === "Exercises" && postData.exercise && (
					<div className="pb-6">
						<div className="prose pb-6 mx-auto px-4">
							{
								<div className="pb-6">
									<div className="prose pb-6 mx-auto px-4">
										{hydrate(exercise, { components })}
									</div>
									<div className="flex justify-center">
										<a
											className="flex content-center hover:underline text-blue-700"
											href={
												"https://github.com/samrobbins85/notes-site/blob/master/notes/" +
												params.slug.join("/") +
												".exercise.md"
											}
										>
											<svg
												className="h-4 pr-2 self-center"
												role="img"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<title>GitHub icon</title>
												<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
											</svg>
											<p>Edit this page on GitHub</p>
										</a>
									</div>
								</div>
							}
						</div>
					</div>
				)}
			</>
		);
	}

	function IntermediatePage() {
		return (
			<>
				<h1 className="pt-4 text-5xl text-center font-bold text-purple-800 w-5/6 mx-auto">
					{params.slug.length <= 2 &&
						params.slug[params.slug.length - 1].replace(/_/g, " ")}
					{params.slug.length === 3 &&
						params.slug[params.slug.length - 2].replace(/_/g, " ") +
							" - " +
							params.slug[params.slug.length - 1].replace(
								/_/g,
								" "
							)}
				</h1>

				<div className="flex justify-center pt-4">
					<ul className="divide-y-4 divide-transparent">
						{list.children.map((x) => (
							<li key={x.name.replace(/\.[^/.]+$/, "")}>
								<Link
									href={
										"/" +
										params.slug.join("/") +
										"/" +
										x.name.replace(/\.[^/.]+$/, "")
									}
								>
									<a className="text-lg text-blue-700 hover:underline">
										<p className="text-center">
											{x.name
												.replace(/\.[^/.]+$/, "")
												.replace(/_/g, " ")}
										</p>
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</>
		);
	}

	return (
		<>
			<Head>
				<title>
					{(params.slug !== undefined
						? params.slug[params.slug.length - 1].replace(
								/_/g,
								" "
						  ) + " | "
						: "") + "Sam's Notes"}
				</title>
				<meta name="description" content="Notes from my education" />
				<meta
					property="og:image"
					content={`https://og.csnotes.me/**${escape(
						params.slug[params.slug.length - 1].replace(/_/g, " ")
					)}**/${escape(
						params.slug.length <= 1
							? "Sam's Notes"
							: params.slug[params.slug.length - 2].replace(
									/_/g,
									" "
							  )
					)}.png?theme=dark&md=1&fontSize=100px`}
				></meta>
				<meta
					property="og:title"
					content={params.slug[params.slug.length - 1].replace(
						/_/g,
						" "
					)}
				></meta>
			</Head>
			<Layout
				main={<Main />}
				sidebar={<Sidebar ref={node} tree={tree} slug={params.slug} />}
				navbar={<NavBar toggleFunction={toggleSidebar} ref={node2} />}
				toggle={sidebarVisible}
			/>
		</>
	);
}

export default Lecture;

export async function getStaticProps({ params }) {
	const postData = await getPostData(params);
	const source = await renderToString(postData.contentHtml, {
		components: components,
		mdxOptions: {
			remarkPlugins: [slug, math, remarkSmartypants, footnotes],
			rehypePlugins: [[highlightCode, { ignoreMissing: true }]],
		},
	});
	var exercise;
	if (postData.exercise) {
		exercise = await renderToString(postData.exercise, {
			components: components,
			mdxOptions: {
				remarkPlugins: [slug, math, remarkSmartypants, footnotes],
				rehypePlugins: [[highlightCode, { ignoreMissing: true }]],
			},
		});
	} else {
		exercise = false;
	}
	const tree = getTree();
	return {
		props: {
			tree,
			postData,
			params,
			source,
			exercise,
		},
	};
}

export async function getStaticPaths() {
	const paths = getPaths();
	return {
		paths: paths,
		fallback: false,
	};
}
