/**
 * Created by Sube on 2016/9/3.
 */
window.onload = function() {
    var title = document.getElementById('title').getElementsByTagName('a');
    var body = document.getElementById('list').getElementsByTagName('ul');
    for (var i = 0; i < title.length; i++) {
        title[i].id = i;
        title[i].onmouseover = function () {
            sub(this.id);
        }
    }
    function sub(nowid) {
        for (var j = 0; j < title.length; j++) {
            if (nowid == j) {
                title[j].className = 'active';
                body[j].style.display = 'block';
            } else {
                title[j].className = '';
                body[j].style.display = '';
            }
        }
    }

    function slider() {
        var box = document.getElementById('img');
        var imgbox = document.getElementById('imglist');
        var leftwidth = box.offsetWidth;
        var btn = document.getElementById('point').getElementsByTagName('li');
        var time;
        var index = 0;
        console.log(leftwidth);
        function autogo() {
            var start = imgbox.offsetLeft;
            var end = index * leftwidth * (-1);
            var change = end - start;
            var timer;
            var t = 0;
            var maxT = 50;

            clear();
            if (index == btn.length) {
                btn[0].className = 'selected';
            } else {
                btn[index].className = 'selected';
            }

            timer = setInterval(function () {
                t++;
                if (t >= maxT) {
                    clearInterval(timer);
                }
                imgbox.style.left = change / maxT * t + start + "px";
                if (index == btn.length && t >= maxT) {
                    imgbox.style.left = 0 + "px";
                    index = 0;
                }

            }, 17);

        }

        function forward() {
            index++;
            //当图片下标到最后一张把小标换0
            if (index > btn.length) {
                index = 0;
            }
            autogo();


        }

        time = setInterval(forward, 2000);


        for (var i = 0; i < btn.length; i++) {
            btn[i].id = i;
            btn[i].onmouseover = function () {
                clearInterval(time);
                index = this.id;
                autogo();
            }
        }
        box.onmouseover = function () {
            clearInterval(time);
        };
        box.onmouseout = function () {
            time = setInterval(forward, 2000);
        }
        function clear() {
            for (var i = 0; i < btn.length; i++) {
                btn[i].className = "";
            }
        }
    }

    slider();


    function slider2() {
        var box = document.getElementsByClassName('mod')[0];
        var imgbox = document.getElementById('imglist2');
        var leftwidth = box.offsetWidth;
        var btn = document.getElementById('btn').getElementsByTagName('li');
        var time;
        var index = 0;
        console.log(leftwidth);
        console.log(btn);
        function autogo() {
            var start = imgbox.offsetLeft;
            var end = index * leftwidth * (-1);
            var change = end - start;
            var timer;
            var t = 0;
            var maxT = 50;

            clear();
            if (index == btn.length) {
                btn[0].className = 'active';
            } else {
                btn[index].className = 'active';
            }

            timer = setInterval(function () {
                t++;
                if (t >= maxT) {
                    clearInterval(timer);
                }
                imgbox.style.left = change / maxT * t + start + "px";
                if (index == btn.length && t >= maxT) {
                    imgbox.style.left = 0 + "px";
                    index = 0;
                }

            }, 10);

        }

        function forward() {
            index++;
            //当图片下标到最后一张把小标换0
            if (index > btn.length) {
                index = 0;
            }
            autogo();


        }

        time = setInterval(forward, 3000);


        for (var i = 0; i < btn.length; i++) {
            btn[i].id = i;
            btn[i].onmouseover = function () {
                clearInterval(time);
                index = this.id;
                autogo();
            }
        }
        box.onmouseover = function () {
            clearInterval(time);
        };
        box.onmouseout = function () {
            time = setInterval(forward, 2000);
        }
        function clear() {
            for (var i = 0; i < btn.length; i++) {
                btn[i].className = "";
            }
        }
    }


    function tab1() {
        var title = document.getElementById('threetitle1').getElementsByTagName('a')
        var body = document.getElementsByClassName('boxsub1')
        for (var i = 0; i < title.length; i++) {
            title[i].id = i;
            title[i].onmouseover = function () {
                sub(this.id);
            }
        }
        function sub(nowid) {
            for (var j = 0; j < title.length; j++) {
                if (nowid == j) {
                    title[j].className = 'active';
                    body[j].style.display = 'block';
                } else {
                    title[j].className = '';
                    body[j].style.display = '';
                }
            }
        }
    }
    function tab2() {
        var title = document.getElementById('threetitle2').getElementsByTagName('a')
        var body = document.getElementsByClassName('boxsub2');
        for (var i = 0; i < title.length; i++) {
            title[i].id = i;
            title[i].onmouseover = function () {
                sub(this.id);
            }
        }
        function sub(nowid) {
            for (var j = 0; j < title.length; j++) {
                if (nowid == j) {
                    title[j].className = 'active';
                    body[j].style.display = 'block';
                } else {
                    title[j].className = '';
                    body[j].style.display = '';
                }
            }
        }
    }
    function tab3() {
        var title = document.getElementById('threetitle3').getElementsByTagName('a')
        var body = document.getElementsByClassName('boxsub3');
        for (var i = 0; i < title.length; i++) {
            title[i].id = i;
            title[i].onmouseover = function () {
                sub(this.id);
            }
        }
        function sub(nowid) {
            for (var j = 0; j < title.length; j++) {
                if (nowid == j) {
                    title[j].className = 'active';
                    body[j].style.display = 'block';
                } else {
                    title[j].className = '';
                    body[j].style.display = '';
                }
            }
        }
    }
    function tab4() {
        var title = document.getElementById('threetitle4').getElementsByTagName('a')
        var body = document.getElementsByClassName('boxsub4');
        for (var i = 0; i < title.length; i++) {
            title[i].id = i;
            title[i].onmouseover = function () {
                sub(this.id);
            }
        }
        function sub(nowid) {
            for (var j = 0; j < title.length; j++) {
                if (nowid == j) {
                    title[j].className = 'active';
                    body[j].style.display = 'block';
                } else {
                    title[j].className = '';
                    body[j].style.display = '';
                }
            }
        }
    }
        slider2();
        tab1();
        tab2();
        tab3();
        tab4();

}