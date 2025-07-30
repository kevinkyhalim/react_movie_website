# React Movie Website Tutorial

This is a tutorial React repository to document my React learnings

## Features
- API call to TMDB to show latest popular movies
- API call to TMDB to filter movies based on a query
- Favorites tab to show favorited movies

## To be Added
- Non-local storage so favorites can be stored indefinitely
- Add ratings to the movie
- Add pages to the bottom of the website
- Add Sections for TV Shows, include also the ratings and pages section

# Main Notes
## Creating a Project
0. Install Node.js from https://nodejs.org/en/download
1. Navigate to your folder and open a terminal
2. Run the command ``` npm create vite@latest ```
3. Pick a project name, select a framework and variant.
4. Run the following code
```
cd 'project_name'
npm install
npm run dev
```

## Installing React Router (to view different pages)
1. Run the following command ```npm install react-router-dom```
2. Add the code ``` import {BrowserRouter} from 'react-router-dom ``` inside the main.jsx file
3. Wrap the <App /> inside a <BrowserRouter>
4. Add the code ``` import {Routes, Route} from "react-router-dom" ``` inside the App.jsx file
5. Add the different Route inside the App.jsx file, e.g.
```
function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>        
      </Routes>
    </main>
  );
}
```

## Applying for API Key for TMDB
1. Create an account under https://www.themoviedb.org
2. Under Profile -> Settings -> API -> API Key
3. Modify the API_KEY value inside the file src/services/api.js

## Other Notes
- Everything revolves around "components" that are modular. That can be reused and combined!
- Component here means ANY function in JavaScript that returns some kind of JSX code, always start with a CAPITAL letter.
- Most codes we will be concerned is inside the src folder
- Edit .jxs files for your code!
- Conditional rendering
```
function App(){
    const movieNumber = 1;

    return (
        <>
            {movieNumber === 1 ?(
                <MovieCard movie={{title:"Kevin's Film", release_date:"2024"}} />
            ) : (
                <MovieCard movie={{title:"Joe's Film", release_date:"2025"}} />
            )}
        </>
    )
}
// or
function App(){
    const movieNumber = 1;

    return (
        <>
            {movieNumber === 1 &&  <MovieCard movie={{title:"Kevin's Film", release_date:"2024"}} />}
        </>
    )
}
```

- use 'useState' to ensure that variable changes persist even after a page is re-rendered
- when a state change occurs, the ENTIRE component are re ran / re-rendered
(check if this applies to ALL components, or just components that are dependent on said state)
- It's good practice to create a separate file that contains all of your API calls so you can keep all the networking operations or stuff related to the API in a separate file and find it easily
- 'useEffect' allows us to add side effects to our functions / components and define when they should run
- When dealing with APIs, it is common to have 2 states
    1. Loading State
    2. Store any potential error
- context will allow state to be globally available to anything that's within the provided context
    1. Create the context using createContext()
    2. Declare the context to be used by using useContext(1)
    3. create a provider, with all the values and functions, and return <1.Provider> </ 1.Provider>
    4. Wrap your App.jsx with the MovieProvider context so the values and functions can be used by all items inside App.jsx
