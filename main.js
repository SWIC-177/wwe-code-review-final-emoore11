// Here we are importing the necessary components and state from their respective files.

import Search from "./src/components/search";
import Table from "./src/components/table";
import { State } from "./src/state";

// Getting the root element of the application where components will be rendered.

const appElement = document.getElementById("app");

// Creating a new instance of the State class to manage application state.
const state = new State();

// Function to render the application. It takes the state as an argument and renders the Search and Table components with the state values.

function render(st) {
  appElement.innerHTML = `                        // Rendering the search component and table component with the state values.
  
  ${Search({ searchValue: st.searchState })}
  ${Table({
    col1: st.data.belts,
    col2: st.data.champions,
    col1Header: "Belt",
    col2Header: "Champion",
  })}
  `;

  // Getting the search input element and setting the focus on it. Also, setting the cursor at the end of the search input value.

  const searchInput = document.getElementById("search");
  const searchValueLen = searchInput.value.length;

  searchInput.focus();
  searchInput.setSelectionRange(searchValueLen, searchValueLen);

  searchInput.addEventListener("input", (e) => {
    // eslint-disable-next-line no-param-reassign -- It's a class with a setter!
    st.searchState = e.target.value;
    render(st);
  });
}

// Rendering the application with the initial state.
render(state);
