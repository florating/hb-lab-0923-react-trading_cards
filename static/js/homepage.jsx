'use strict';

function Homepage() {
    // A welcome message to the user
    // A link to the /cards page
    // A nice, large image of Balloonicorn (the image is located at /static/img/balloonicorn.jpg)

  return (
    <div>
        Hello! Welcome to our website!
        <br/><br/><a href="/cards">Click here to check out the cards page.</a>
        <br/>
        <br/><img id="balloonicorn-homepage" src="/static/img/balloonicorn.jpg"/>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
