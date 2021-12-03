import axios from "axios";

const Card = (article) => {
	// TASK 5
	// ---------------------
	// Implement this function, which should return the markup you see below.
	// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
	//
	// <div class="card">
	//   <div class="headline">{ headline }</div>
	//   <div class="author">
	//     <div class="img-container">
	//       <img src={ authorPhoto }>
	//     </div>
	//     <span>By { authorName }</span>
	//   </div>
	// </div>
	//

	// Create elements
	const card = document.createElement("div");
	const headLine = document.createElement("div");
	const author = document.createElement("div");
	const imgContainer = document.createElement("div");
	const img = document.createElement("img");
	const authorName = document.createElement("span");

	// Creating Structure
	card.appendChild(headLine);
	card.appendChild(author);
	author.appendChild(imgContainer);
	imgContainer.appendChild(img);
	author.appendChild(authorName);

	// Adding Refs
	card.classList.add("card");
	headLine.classList.add("headline");
	headLine.textContent = article.headline;
	author.classList.add("author");
	imgContainer.classList.add("img-container");
	img.src = article.authorPhoto;
	authorName.textContent = `By ${article.authorName}`;
	card.addEventListener("click", () => {
		console.log(headLine.textContent);
	});

	return card;
};
//
const cardAppender = (selector) => {
	// TASK 6
	// ---------------------
	// Implement this function that takes a css selector as its only argument.
	// It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
	// However, the articles do not come organized in a single, neat array. Inspect the response closely!
	// Create a card from each and every article object in the response, using the Card component.
	// Append each card to the element in the DOM that matches the selector passed to the function.
	//
	axios
		.get("http://localhost:5000/api/articles")
		.then((res) => {
			// console.log(res.data.articles);
			res.data.articles.bootstrap.forEach((el) => {
				document.querySelector(selector).appendChild(Card(el));
			});
			res.data.articles.javascript.forEach((el) => {
				document.querySelector(selector).appendChild(Card(el));
			});
			res.data.articles.jquery.forEach((el) => {
				document.querySelector(selector).appendChild(Card(el));
			});
			res.data.articles.node.forEach((el) => {
				document.querySelector(selector).appendChild(Card(el));
			});
			res.data.articles.technology.forEach((el) => {
				document.querySelector(selector).appendChild(Card(el));
			});
		})
		.catch((err) => {
			console.error(err);
		});
};

export { Card, cardAppender };
