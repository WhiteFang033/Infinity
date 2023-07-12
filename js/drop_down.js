let p1 = document.getElementById("i1")
let p2 = document.getElementById("i2")
let p3 = document.getElementById("i3")
let clr = document.querySelector(':root')

p2.addEventListener('click', () => {
    if (p2.innerText === 'Basic Litmus') {
        clr.style.setProperty('--sig', 'rgb(143,0,255)')
        clr.style.setProperty('--b_glow', ` 0 0 10px rgba(144, 0, 255, 0.487),
                                            0 0 20px rgba(144, 0, 255, 0.514),
                                            0 0 40px rgba(144, 0, 255, 0.732),
                                            0 0 80px rgb(143,0,255)`)

        clr.style.setProperty('--a_glow', `0 0 10px rgb(144, 0, 255),
                                           0 0 20px rgba(144, 0, 255, 0.994),
                                           0 0 40px rgba(179, 99, 240, 0.732),
                                           0 0 80px rgb(190, 118, 245)`)
        p2.innerText = p1.innerText
        p1.innerText = 'Basic Litmus'
    }

    else if (p2.innerText === 'Sodium Dichromate') {
        clr.style.setProperty('--sig', 'rgb(232, 106, 2)')
        clr.style.setProperty('--b_glow', ` 0 0 10px rgb(68, 32, 4),
                                            0 0 20px rgb(112, 57, 11),
                                            0 0 40px rgb(155, 85, 27),
                                            0 0 80px rgb(164, 89, 28)`)

        clr.style.setProperty('--a_glow', `0 0 20px rgb(251, 114, 10),
                                            0 0 40px rgb(230, 125, 39),
                                            0 0 80px rgb(227, 132, 54),
                                            0 0 160px rgb(227, 169, 121)`)
        p2.innerText = p1.innerText
        p1.innerText = 'Sodium Dichromate'

    }
    else if (p2.innerText === 'Potassium Permanganate') {
        clr.style.setProperty('--sig', 'rgb(201, 5, 250)')
        clr.style.setProperty('--b_glow', ` 0 0 10px rgba(201, 5, 250, 0.233),
                                            0 0 20px rgba(201, 5, 250, 0.509),
                                            0 0 40px rgba(201, 5, 250, 0.772),
                                            0 0 80px rgb(201, 5, 250)`)

        clr.style.setProperty('--a_glow', `0 0 10px rgb(201, 5, 250),
                                            0 0 20px rgb(206, 58, 243),
                                            0 0 40px rgb(215, 101, 244),
                                            0 0 80px rgb(222, 112, 250)`)
        p2.innerText = p1.innerText
        p1.innerText = 'Potassium Permanganate'
    }
}
)

p3.addEventListener('click', () => {
    if (p3.innerText === 'Potassium Permanganate') {
        clr.style.setProperty('--sig', 'rgb(201, 5, 250)')
        clr.style.setProperty('--b_glow', ` 0 0 10px rgba(201, 5, 250, 0.233),
                                            0 0 20px rgba(201, 5, 250, 0.509),
                                            0 0 40px rgba(201, 5, 250, 0.772),
                                            0 0 80px rgb(201, 5, 250)`)

        clr.style.setProperty('--a_glow', `0 0 10px rgb(201, 5, 250),
                                            0 0 20px rgb(206, 58, 243),
                                            0 0 40px rgb(215, 101, 244),
                                            0 0 80px rgb(222, 112, 250)`)
        p3.innerText = p1.innerText
        p1.innerText = 'Potassium Permanganate'
    }

    else if (p3.innerText === 'Sodium Dichromate') {
        clr.style.setProperty('--sig', 'rgb(232, 106, 2)')
        clr.style.setProperty('--b_glow', ` 0 0 10px rgb(68, 32, 4),
                                            0 0 20px rgb(112, 57, 11),
                                            0 0 40px rgb(155, 85, 27),
                                            0 0 80px rgb(164, 89, 28)`)

        clr.style.setProperty('--a_glow', `0 0 20px rgb(251, 114, 10),
                                            0 0 40px rgb(230, 125, 39),
                                            0 0 80px rgb(227, 132, 54),
                                            0 0 160px rgb(227, 169, 121)`)
        p3.innerText = p1.innerText
        p1.innerText = 'Sodium Dichromate'

    }
    else if (p3.innerText === 'Basic Litmus') {
        clr.style.setProperty('--sig', 'rgb(143,0,255)')
        clr.style.setProperty('--b_glow', ` 0 0 10px rgba(144, 0, 255, 0.487),
                                            0 0 20px rgba(144, 0, 255, 0.514),
                                            0 0 40px rgba(144, 0, 255, 0.732),
                                            0 0 80px rgb(143,0,255)`)

        clr.style.setProperty('--a_glow', `0 0 10px rgb(144, 0, 255),
                                           0 0 20px rgba(144, 0, 255, 0.994),
                                           0 0 40px rgba(179, 99, 240, 0.732),
                                           0 0 80px rgb(190, 118, 245)`)
        p3.innerText = p1.innerText
        p1.innerText = 'Basic Litmus'
    }
}
)
