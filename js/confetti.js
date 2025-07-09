// Confetti animation for WiseUp landing page
// Use: showConfetti(canvasId = 'confetti-canvas')

function showConfetti(canvasId = 'confetti-canvas') {
  const confettiCanvas = document.getElementById(canvasId);
  if (!confettiCanvas) return;
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  confettiCanvas.style.display = 'block';
  const ctx = confettiCanvas.getContext('2d');
  const confettiCount = 120;
  const confetti = [];
  const colors = ['#00FFC2', '#076441', '#fff', '#FFEB3B', '#FF4081', '#00B0FF'];
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * -confettiCanvas.height,
      r: 6 + Math.random() * 8,
      d: Math.random() * confettiCount,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 10,
      tiltAngle: 0,
      tiltAngleIncremental: (Math.random() * 0.07) + 0.05
    });
  }
  let angle = 0;
  let animationFrame;
  let frames = 0;
  const maxFrames = 180; // ~6 segundos a 30fps
  function drawConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    for (let i = 0; i < confettiCount; i++) {
      let c = confetti[i];
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + (c.r / 3), c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
      ctx.stroke();
    }
    updateConfetti();
    frames++;
    if (frames < maxFrames) {
      animationFrame = requestAnimationFrame(drawConfetti);
    } else {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      confettiCanvas.style.display = 'none';
    }
  }
  function updateConfetti() {
    angle += 0.01;
    for (let i = 0; i < confettiCount; i++) {
      let c = confetti[i];
      c.y += (Math.cos(angle + c.d) + 3 + c.r / 2) * 1.2; // mais rápido para chegar ao fim
      c.x += Math.sin(angle);
      c.tiltAngle += c.tiltAngleIncremental;
      c.tilt = Math.sin(c.tiltAngle) * 15;
      if (c.y > confettiCanvas.height) {
        c.x = Math.random() * confettiCanvas.width;
        c.y = -10;
      }
    }
  }
  drawConfetti();
}
