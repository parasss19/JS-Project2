const input = document.querySelectorAll('.controls input')   //here we select class(controls) and all input fields

function handleChange(){
    //for understanding
    //console.log(this)        //here "this" is whole object input field
    //console.log(this.value)
    //dataset basically return all the input field attributes that start with 'data' 
    //console.log(this.dataset)   // DOMStringMap {sizing: 'px'}
    //console.log(document.documentElement)
    //console.log(this.name)         //it return the name attribute value of each input field

    //main logic
    const suffix = this.dataset.sizing || '';     //here we apply empty coz for base we dont have any suffix 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)


}
input.forEach((e) => e.addEventListener('change', handleChange) );
input.forEach((e) => e.addEventListener('mousemove', handleChange) );


// Note 
// 1 We apply spacing in terms of pixels here so its suffix is px
// 2 Similarly blur also applied in terms of pixels so its suffix is px
// 3 Base(bg color) has no suffix 
// 4 Now spacing and blur values we get in console but we have to add suffix in pixels so we use data-sizing attribute