import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import MyButton from "/MyButton";
const root = ReactDOM.createRoot(document.getElementById('root'));

function render({ second }) {
    root.render(
        <main>
            <MyButton />
            <MyList text={second.text} disabled={second.disabled} />
        </main>
    );
}
render({
    second: {
        text: "Second Buton",
        disabled: true,
    },
});


