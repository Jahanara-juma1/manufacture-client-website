import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='font-bold'>QUESTION: How will you improve the performance of a React Application?</h2>
            <p>ANS: Using React in application brings better performance and minimizes the number of DOM operations used to build faster user interfaces as it was built keeping performance in mind. React applications very fast is the DOM, but it sometimes makes many irrelevant components render the tree. As a result, UI might glitch, and sometimes developers may get hesitant to continue with React.

                Also, as the application grows, the performance might get affected, so building high-performance React applications becomes essential to maintain the performance and provide a seamless user experience since high performance is a primary key to speed up your React app. But first, how do we measure the performance of a React application?</p>
            <h2 className='font-bold'>QUESTION: What are the different ways to manage a state in a React application?</h2>
            <p>ANS: We can use URL to store some data e.g.

                The id of the current item, being viewed
                Filter parameters
                Pagination offset and limit
                Sorting data
                Keeping such data in the URL allows users to share deep links with others.

                It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change

                React Router is a great tool to handle routes and manage the params.</p>
            <h2 className='font-bold'>QUESTION: How does prototypical inheritance work? </h2>
            <p>ANS: Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another objec.When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype</p>
            <h2 className='font-bold'>QUESTION: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
            <p>ANS: We import the useState Hook from React. It lets us keep local state in a function component.
                Inside the Example component, we declare a new state variable by calling the useState Hook. It returns a pair of values, to which we give names. We’re calling our variable count because it holds the number of button clicks. We initialize it to zero by passing 0 as the only useState argument. The second returned item is itself a function. It lets us update the count so we’ll name it setCount.
                When the user clicks, we call setCount with a new value. React will then re-render the Example component, passing the new count value to it.</p>
                <h2 className='font-bold'>QUESTION: What is a unit test? Why should write unit tests?</h2>
                <p>ANS: A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.Unit tests can be performed manually or automated. Those employing a manual method may have an instinctual document made detailing each step in the process; however, automated testing is the more common method to unit tests. Automated approaches commonly use a testing framework to develop test cases. These frameworks are also set to flag and report any failed test cases while also providing a summary of test cases.</p>


        </div>
    );
};

export default Blogs;