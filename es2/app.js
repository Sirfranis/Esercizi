function showSidebar(){
    document.querySelector('.sidebar').style.width="100%";
    document.querySelector('.x_button').style.display = "block";
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    document.querySelector('.x_button').style.display = "none";
    sidebar.style.width="0%";
}