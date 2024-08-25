const canvas = document.getElementById('output')
const c = canvas.getContext('2d')

const ratio = 100

const drawGraph = () => {
    for (let i = 0; i <= canvas.width / ratio; i++) {
        c.beginPath()
        c.moveTo(i * ratio, 0)
        c.lineTo(i * ratio, canvas.height)
        c.strokeStyle = '#202020'
        c.stroke()
    }

    for (let i = 0; i <= (canvas.width / ratio); i++) {
        if (i * ratio == canvas.height / 2) {
            c.beginPath()
            c.moveTo(0, i * ratio)
            c.lineTo(canvas.width, i * ratio)
            c.lineWidth = 5
            c.stroke()
        } else {
            c.beginPath()
            c.moveTo(0, i * ratio)
            c.lineTo(canvas.width, i * ratio)
            c.strokeStyle = '#202020'
            c.lineWidth = 2
            c.stroke()
        }
    }
}

drawGraph()