//image
const container1 = document.querySelector('.container1');
const jumbo = document.querySelector('.jumbo');
const thum = document.querySelectorAll('.thum');

container1.addEventListener('click', function(e){
//cek gambar
    if (e.target.className == 'thum'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        },500);
        
        thum.forEach(function(thum)
        {
            // if(thum.classList.contains('active')){
            //     thum.classList.remove('remove');
            // }
            thum.className = 'thum';
        });
        e.target.classList.add('active');
    }
});
// totop
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () =>{
if (window.pageYOffset > 50) {
    toTop.classList.add('active');
}else{
    toTop.classList.remove('active');
}
})