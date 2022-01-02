

// about tab 
document.getElementById('about').addEventListener('click',()=>{
    document.getElementById('education-qual').style.display='none';
    document.getElementById('project').style.display='none';
    document.getElementById('certificate').style.display='none';
    document.getElementById('leftscreen').style.display='block';
    document.getElementById('rightscreen').style.display='flex';
})


// education tab
document.getElementById('Education').addEventListener('click',()=>{
    document.getElementById('leftscreen').style.display='none';
    document.getElementById('rightscreen').style.display='none';
    document.getElementById('project').style.display='none';
    document.getElementById('certificate').style.display='none';
    document.getElementById('education-qual').style.display='flex';
})


// projects tab
document.getElementById('Projects').addEventListener('click',()=>{
    document.getElementById('education-qual').style.display='none';
    document.getElementById('leftscreen').style.display='none';
    document.getElementById('rightscreen').style.display='none';
    document.getElementById('certificate').style.display='none';
    document.getElementById('project').style.display='block';
})


// certification tab 
document.getElementById('certificates').addEventListener('click',()=>{
    document.getElementById('education-qual').style.display='none';
    document.getElementById('leftscreen').style.display='none';
    document.getElementById('rightscreen').style.display='none';
    document.getElementById('project').style.display='none';
    document.getElementById('certificate').style.display='flex';
})



