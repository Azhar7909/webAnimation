
// Heading Animation
var element = document.querySelector("#heading");
element.animate(
    [
        {transform: 'scale(0.5)',},
        {transform: 'scale(2)',},
        {transform: 'scale(0.5)',},
        {transform: 'translate(550px,0)',},
        {transform: 'translate(0,0)',},
        {transform: 'translate(-550px,0)',},
        {transform: 'translate(550px,0)',},
        {transform: 'translate(0,0)',},

    ],
    {
        duration: 15000,
        iterations: Infinity
    }
)
//  Box1 Animation
var element = document.querySelector("#box1");
element.animate(
    [
        { transform: 'translate(0,0)' },
        { transform: 'translate(1100px,0)',backgroundColor: 'gray',},
        { transform: 'translate(1100px,400px)', backgroundColor: 'sky',},
        { transform: 'translate(0,400px)', backgroundColor: 'grey',},
        { transform: 'translate(0,0)', backgroundColor: 'yellow',},
    ],
    {
        duration: 10000,
        iterations: Infinity
    }
);

// Box2 Animation
var element = document.querySelector("#box2");
element.animate(
    [
        { transform: 'translate(1100px,-400px)', },
        { transform: 'translate(0,-400px)', backgroundColor: 'yellow',},
        { transform: 'translate(0,0)', backgroundColor: 'sky',},
        { transform: 'translate(1100px,0)', backgroundColor: 'grey'},
        { transform: 'translate(1100px,-400px)', backgroundColor: 'red'},
    ],
    {
        duration: 10000,
        iterations: Infinity
    }
)
// Box3 Animation
var element = document.querySelector("#box3");
element.animate(
    [
        { transform: 'translate(0,-500px)',  },
        { transform: 'translate(1100px,-100px)',backgroundColor: 'red',},
        { transform: 'translate(0,-520px)', backgroundColor: 'blue',},
    ],
    {
        duration: 10000,
        iterations: Infinity
    }
)
// Box4 Animation
var element = document.querySelector("#box4");
element.animate(
    [
        { transform: 'translate(1100px,-600px)' },
        { transform: 'translate(0,-200px)', backgroundColor: 'black',},
        { transform: 'translate(1100px,-600px)', backgroundColor: 'navy',},
    ],
    {
        duration: 10000,
        iterations: Infinity
    }
)
// Box5 Animation
var element = document.querySelector("#box5");
element.animate(
    [
        { transform: 'scale(0)' },
        { transform: 'scale(1)', backgroundColor: 'black',},
        { transform: 'scale(0)', backgroundColor: 'navy',},
    ],
    {
        duration: 15000,
        iterations: Infinity
    }
)
