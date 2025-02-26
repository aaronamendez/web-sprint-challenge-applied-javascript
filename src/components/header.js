const Header = (title, date, temp) => {
	// TASK 1
	// ---------------------
	// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	//  <div class="header">
	//    <span class="date">{ date }</span>
	//    <h1>{ title }</h1>
	//    <span class="temp">{ temp }</span>
	//  </div>
	//

	// Creating the elements
	const header = document.createElement("div");
	const dateElement = document.createElement("span");
	const head = document.createElement("h1");
	const tempElement = document.createElement("span");

	// Establishing structure of Elements
	header.appendChild(dateElement);
	header.appendChild(head);
	header.appendChild(tempElement);

	// Adding Refs
	header.classList.add("header");
	dateElement.classList.add("date");
	dateElement.textContent = date;
	head.textContent = title;
	tempElement.classList.add("temp");
	tempElement.textContent = temp;

	return header;
};

const headerAppender = (selector) => {
	// TASK 2
	// ---------------------
	// Implement this function taking a css selector as its only argument.
	// It should create a header using the Header component above, passing arguments of your choosing.
	// It should append the header to the element in the DOM that matches the given selector.
	//
	document
		.querySelector(selector)
		.appendChild(Header("Dogecoin", "12-20-08", "56 Degrees"));
};

export { Header, headerAppender };
