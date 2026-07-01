//// Run this in browser console

document.getElementById('title')
//<title id="title" class="heading">DOM learning</title>

document.getElementById("title").getAttribute("class")
// 'heading'
document.getElementById("title").getAttribute("id")
// 'title'
document.getElementById("title").id
// 'title'
document.getElementById("title").class
// undefined
document.getElementById("title").className
// 'heading'

document.getElementById("title").setAttribute('class','test heading')
// undefined


heading = document.getElementById("heading")
// <h1 id=​"heading" class=​"headline">​DOM learning on Chai aur code​</h1>​

heading = document.getElementById("heading")  /// store object of title
console.log(typeof heading)
// object
heading.style.backgroundColor = 'green'
// 'green'
heading.style.padding = '15px'
// '15px'
heading.style.borderRadius = '15px'
// '15px'
heading.textContent
'DOM learning on Chai aur code'
heading.innerText
'DOM learning on Chai aur code'
heading.innerHTML
'DOM learning on Chai aur code'

heading.innerText
'DOM learning on Chai aur code'
heading.textContent
'DOM learning on Chai aur codehiden text'
heading.innerHTML
'DOM learning on Chai aur code<span style="display: none;">hiden text</span>'



document.querySelector('h1') // first h1
// <h1 id=​"heading" class=​"headline">​"DOM learning on Chai aur code"<span style=​"display:​ none;​">​hiden text​</span>​</h1>​

document.querySelectorAll('h1') // all h1
// NodeList(3) [h1#heading.headline, h1, h1]

document.querySelector('#title')
// <title id=​"title" class=​"heading">​DOM learning​</title>​
document.querySelector('.heading')
// <title id=​"title" class=​"heading">​DOM learning​</title>​

document.querySelector('input[type="password"]')
// <input type=​"password">​
ulls = document.querySelector('ul')
<ul>​…​</ul>​
ulls.querySelector('li')
<li style=​"background-color:​ green;​ color:​ white;​">​::marker​"one "</li>​
fili = ulls.querySelector('li')
<li style=​"background-color:​ green;​ color:​ white;​">​…​</li>​
fili.style.backgroundColor = 'green'
'green'
fili.style.color = 'white'
'white'

fili = ulls.querySelectorAll('li')
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeList
fili[0].style.color = 'blue'
'blue'


fili.forEach(function (ls){ ls.style.backgroundColor = 'white' })


document.getElementsByClassName('listitem')
HTMLCollection(4) [li.listitem, li.listitem, li.listitem, li.listitem]0: li.listitem1: li.listitem2: li.listitem3: li.listitemlength: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
const temp = document.getElementsByClassName('listitem')
undefined
Array.from(temp)
(4) [li.listitem, li.listitem, li.listitem, li.listitem]
const converar = Array.from(temp)
undefined
converar.forEach(function(li){li.style.color = 'orange'})


myh2 = document.querySelectorAll('h2')
myh2.forEach(function(h){h.innerText = "vasu"})
