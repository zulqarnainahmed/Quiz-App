
function check(){
var score = 0;
var a = document.getElementById('first1')
var b = document.getElementById('first2')
var c = document.getElementById('first3')
var d = document.getElementById('first4')

if(a.checked){
    score++
    alert("Hurrah!")
}
else{
    alert("Alas!")
}

var e = document.getElementById('second1')
var f = document.getElementById('second2')
var g = document.getElementById('second3')
var h = document.getElementById('second4')

if(f.checked){
    score++
    alert("Hurrah!")
}
else{
    alert("Alas!")
}

var i = document.getElementById('third1')
var j = document.getElementById('third2')
var k = document.getElementById('third3')
var l = document.getElementById('third4')

if(i.checked){
    score++
    alert("Hurrah!")
}
else{
    alert("Alas!")
}

var m = document.getElementById('fourth1')
var n = document.getElementById('fourth2')
var o = document.getElementById('fourth3')
var p = document.getElementById('fourth4')

if(o.checked){
    score++
    alert("Hurrah!")
}
else{
    alert("Alas!")
}

var q = document.getElementById('fifth1')
var r = document.getElementById('fifth2')
var s = document.getElementById('fifth3')
var t = document.getElementById('fifth4')

if(q.checked || r.checked || s.checked ||t.checked){
    score++
    alert("Hurrah!")
}
else{
    alert("Alas!")
}
alert("You have scored " + parseInt(score) + " out of 5")
}

function reset(){
    alert("Retake quiz")
}