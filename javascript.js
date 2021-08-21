function counter(){
    if(count == 1){
        count = 0;
    }
    else if(count == 0){
        count = 1;
    }
    else{
        count = 1;
    }

    showHideNav();
}

function showHideNav(){
    if(count==0){
        list[1].style.display = 'none';
        list[2].style.display = 'none';
        navigation.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }

    else if(count==1){
        list[1].style.display = 'flex';
        list[2].style.display = 'flex';
        navigation.style.backgroundColor = 'rgba(255, 255, 255, 0.87)';
    }

}

var count;

var hamburgur = document.getElementById("hamburger");

var list = document.getElementsByClassName("nav-list");

var navigation = document.getElementById("sec-nav");

hamburgur.addEventListener('click', showHideNav);
