let imgAll = document.querySelectorAll('.ball');
let div = document.getElementById('balls');

div.onmousedown = (event) => {
    if (event.target.className === 'ball') {

        let ball = event.target;
        let distance = ball.getBoundingClientRect();
        let offsetX = event.clientX - distance.left;
        let offsetY = event.clientY - distance.top;

        imgAll.forEach((element) => {
            let startingPoints = element.getBoundingClientRect();

            element.style.left = startingPoints.x + 'px';
            element.style.top = startingPoints.y + 'px';

            setTimeout(
                () => element.style.position = 'absolute', 100);

        })

        setTimeout(
            () => div.append(ball), 100);

        function moveAt(pageX, pageY) {
            ball.style.left = pageX - offsetX + 'px';
            ball.style.top = pageY - offsetY + 'px';
        }

        moveAt(event.pageX, event.pageY);

        function mouseMove(event) {
            moveAt(event.pageX, event.pageY);
            ball.style.cursor = 'pointer';
        }

        document.addEventListener('mousemove', mouseMove);

        document.onmouseup = function() {
            document.removeEventListener('mousemove', mouseMove);
            ball.onmousemove = document.onmouseup = null;
        }
    }
};

document.ondragstart = function() {
    return false;
};