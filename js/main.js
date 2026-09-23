document.addEventListener('DOMContentLoaded',function(){
    console.log("邯郸市第二十七中学网站加载完成");
    document.querySelectorAll('img').forEach(img=>{
        img.loading = "lazy";
    });
});
