<script>
  var canvas = document.getElementById('pieChart');
  var ctx = canvas.getContext('2d');

  var data = [30, 40, 30];
  var colors = ['#FF6384', '#36A2EB', '#FFCE56'];

  var total = data.reduce((acc, val) => acc + val, 0);
  var startAngle = 0;

  data.forEach((value, index) => {
    var sliceAngle = (value / total) * 2 * Math.PI;

    ctx.fillStyle = colors[index];
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fill();

    startAngle += sliceAngle;
  });
</script>


