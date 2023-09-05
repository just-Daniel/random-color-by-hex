function randomColor () {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        const index = Math.round(Math.random() * (hex.length - 1))
      
        color += hex[index]
    }

    return color
}

module.exports = randomColor