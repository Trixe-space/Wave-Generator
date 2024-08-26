const canvas = document.getElementById('output')
const c = canvas.getContext('2d')

const colorInput = document.getElementById('color')
const amplitudeInput = document.getElementById('amplitude')
const wavelengthInput = document.getElementById('wavelength')

let color = colorInput.value
let amplitude = amplitudeInput.value
let wavelength = wavelengthInput.value


colorInput.addEventListener('input', () => {
    color = colorInput.value
    drawWave()
})

amplitudeInput.addEventListener('input', () => {
    amplitude = amplitudeInput.value
    drawWave()
})

wavelengthInput.addEventListener('input', () => {
    wavelength = wavelengthInput.value
    drawWave()
})


const ratio = 100

const drawGraph = () => {
    for (let i = 0; i <= canvas.width / ratio; i++) {
        c.beginPath()
        c.moveTo(i * ratio, 0)
        c.lineTo(i * ratio, canvas.height)
        c.strokeStyle = '#202020'
        c.lineWidth = 3
        c.stroke()
    }

    for (let i = 0; i <= (canvas.width / ratio); i++) {
            c.beginPath()
            c.moveTo(0, i * ratio)
            c.lineTo(canvas.width, i * ratio)
            c.strokeStyle = '#202020'
            c.lineWidth = i * ratio == canvas.height / 2 ? 10 : 3
            c.stroke()
    }
}

const drawWave = () => {
    c.clearRect(0, 0, canvas.width, canvas.height)
    drawGraph()

    console.log(color, amplitude, wavelength)
}

drawWave()