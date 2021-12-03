import axios from "axios";

const Tabs = (topics) => {
	// TASK 3
	// ---------------------
	// Implement this function which takes an array of strings ("topics") as its only argument.
	// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
	// then the function returns the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	// <div class="topics">
	//   <div class="tab">javascript</div>
	//   <div class="tab">bootstrap</div>
	//   <div class="tab">technology</div>
	// </div>
	//

	// Creating Elements
	const topicsElement = document.createElement("div");

	// Adding refs
	topicsElement.classList.add("topics");

	// ForEach on Topics
	// I need to create the element on each iteration, update the class with "tab", and assign it a textContent of it's own value.
	topics.forEach((el) => {
		const div = document.createElement("div");
		div.classList.add("tab");
		div.textContent = el;
		topicsElement.appendChild(div);
	});

	return topicsElement;
};

const tabsAppender = (selector) => {
	// TASK 4
	// ---------------------
	// Implement this function which takes a css selector as its only argument.
	// It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
	// Find the array of topics inside the response, and create the tabs using the Tabs component.
	// Append the tabs to the element in the DOM that matches the selector passed to the function.
	//
	// const topics = { "topics": ["javascript", "bootstrap", "technology", "jquery", "node.js"] }
	axios
		.get("http://localhost:5000/api/topics")
		.then((res) => {
			console.log(res.data.topics);
			document.querySelector(selector).appendChild(Tabs(res.data.topics));
		})
		.catch((err) => {
			console.error(err);
		});
};

export { Tabs, tabsAppender };
