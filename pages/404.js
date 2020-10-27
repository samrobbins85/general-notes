import Link from "next/link";
import Head from "next/head";
export default function Custom404() {
	return (
		<>
			<Head>
				<title>404 - Page not found</title>
			</Head>
			<div className="flex items-center justify-center h-screen">
				<div className="w-full sm:w-1/2 md:w-1/3 px-2">
					<h1 className="text-center text-4xl font-medium">
						Oops, that's a 404, looks like you're lost
					</h1>
					<img src="/home/MessyDoodle.svg" alt="Page not found doodle" className="w-full py-4" />
					<div className="flex justify-center">
						<Link href="/">
							<a className="text-3xl text-blue-600 hover:underline">
								Go Home
							</a>
						</Link>
					</div>
					<p className="text-center pt-12">
						Don't think this should be a 404? Let me know in a{" "}
						<a
							className="text-blue-600 hover:underline"
							href="https://github.com/samrobbins85/notes-site/issues/new"
						>
							GitHub Issue
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
