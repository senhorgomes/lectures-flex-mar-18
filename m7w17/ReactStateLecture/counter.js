// Event listener to listen for when the button is being clicked
// After the button is clicked, we need to modify the text within the h4
$(()=> {
    $('button').on('click', ()=> {
        console.log("Button is clicked!");
        // Target the h4
        // Capturing the value
        const previousNumber = Number($('h4').text());
        // Setting the value
        $('h4').text(previousNumber + 1);
    })
})