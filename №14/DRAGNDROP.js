let imgAll = document.querySelectorAll('img');

imgAll.forEach(element => {

    element.onmousedown = function mouseDown(event) {

        let ballWigth = event.clientX - element.getBoundingClientRect().left;
        let ballHight = event.clientY - element.getBoundingClientRect().top;

        element.style.position = 'absolute';
        element.style.zIndex = 10;
        element.style.margin = '0px';
        element.style.cursor = 'pointer';

        document.body.appendChild(element)

        getCalc(event.pageX, event.pageY);

        function getCalc(pageX, pageY) {
            element.style.left = pageX - ballWigth + 'px';
            element.style.top = pageY - ballHight + 'px';
        }

        function mouseMove(event) {
            getCalc(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', mouseMove);

        element.onmouseup = function() {
            document.removeEventListener('mousemove', mouseMove);
            element.onmouseup = null;
        }
    }
    element.ondragstart = function() {
        return false;
    }
})