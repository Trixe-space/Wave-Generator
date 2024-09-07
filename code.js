const canvas = document.getElementById('output')
const c = canvas.getContext('2d')

const colorInput = document.getElementById('color')
const amplitudeInput = document.getElementById('amplitude')
const wavelengthInput = document.getElementById('wavelength')

let color = colorInput.value
let amplitude = amplitudeInput.value
let wavelength = wavelengthInput.value


canvas.width = 1000 * Math.PI
canvas.height = 600 * Math.PI

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


const cellSide = 100 * Math.PI

const drawGraph = () => {
    c.fillStyle = '#303030'
    c.fillRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < canvas.width / cellSide; i++) {
        c.beginPath()
        c.moveTo(i * cellSide, 0)
        c.lineTo(i * cellSide, canvas.height)
        c.strokeStyle = '#202020'
        c.lineWidth = 10
        c.stroke()
    }

    for (let i = 0; i < canvas.height / cellSide; i++) {
        c.beginPath()
        c.moveTo(0, i * cellSide)
        c.lineTo(canvas.width, i * cellSide)
        c.strokeStyle = '#202020'
        c.lineWidth = Math.floor(i * cellSide) == canvas.height / 2 ? 25 : 10
        c.stroke()
    }
}

const drawWave = () => {
    c.clearRect(0, 0, canvas.width, canvas.height)
    drawGraph()
    
    c.beginPath()
    c.moveTo(0, canvas.height / 2)

    for (let x = 0; x < canvas.width; x++) {
        c.lineTo(x, amplitude * cellSide * Math.sin(1 / (wavelength * 50) * x) + canvas.height / 2)
    }

    c.strokeStyle = color
    c.stroke()
}

drawWave()


const pngDownload = document.getElementById('png-download')

pngDownload.addEventListener('click', () => {
    const imageURL = canvas.toDataURL()

    const downloader = document.createElement('a')
    downloader.href = imageURL
    downloader.download = 'Wave'
    downloader.click()
    downloader.remove()
})