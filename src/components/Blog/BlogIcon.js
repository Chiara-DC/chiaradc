import styles from "../../styles/Blog.module.css";
import React, { useState } from "react";

function BlogIcon({ blog }) {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<>
			{blog && !modalOpen && (
				<div className={styles.griditem}>
					<>
						<b style={{ fontSize: "large" }}>{blog.title}</b> <br />
						{blog.date}
						<br />
						<em>{blog.subtitle}</em>
						<br />
						<button
							onClick={() => {
								setModalOpen(true);
							}}
						>
							Read more here!
						</button>
					</>
				</div>
			)}

			{blog && modalOpen && (
				<div className={styles.griditem}>
					<>
						<b style={{ fontSize: "large" }}>{blog.title}</b>
						<br />
						{blog.date}
						<br />
						<br />
						<em>{blog.subtitle}</em>
						<br />
						<br />
						{blog.text}
						<br />
						<br />
						<div className={styles.blogtags}>
							Tags:
							{blog.tags.map((tag) => (
								<b key={tag}> {tag}, </b>
							))}
							<b>blog</b>
						</div>
						<br />
						<button
							onClick={() => {
								setModalOpen(false);
							}}
						>
							Close
						</button>
					</>
				</div>
			)}
		</>
	);
}

export default BlogIcon;
