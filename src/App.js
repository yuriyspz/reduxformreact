import React from 'react';
import FormComponent from "./formComponent";
import handleSubmit from "./handleSubmit";

function App() {
    return (
        <FormComponent onSubmit={handleSubmit}/>
    );
}

export default App;
