import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h2>Ex 0</h2>
    <p>Hello, <strong>JSX</strong></p>
    <h2>Ex 0.1</h2>
    <div>
      <button />
      <code />
      <input />
      <label />
      <p />
      <pre />
      <select />
      <table />
      <ul />
    </div>
    <h2>Ex 0.2</h2>
    <section>
      <header>
        <h1>A Header</h1>
      </header>
      <nav>
        <a href='item'>Nav Item</a>
      </nav>
      <main>
        <p>The main content...</p>
      </main>
      <footer>
        <small>&copy; 2021</small>
      </footer>
    </section>
  </>
);

